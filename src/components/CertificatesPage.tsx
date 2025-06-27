
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Download, Share2, Eye, Calendar, Award, CheckCircle } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  type: 'module' | 'course' | 'completion';
  moduleNumber?: number;
  issueDate: string;
  validUntil?: string;
  hours: number;
  grade?: number;
  status: 'earned' | 'available' | 'locked';
  description: string;
  skills: string[];
}

const CertificatesPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Fundamentos de IA no Recrutamento',
      type: 'module',
      moduleNumber: 1,
      issueDate: '2024-07-08',
      hours: 1.5,
      grade: 95,
      status: 'earned',
      description: 'Certificado de conclusão do primeiro módulo sobre os fundamentos da Inteligência Artificial aplicada ao recrutamento.',
      skills: ['IA Básica', 'Recrutamento Digital', 'Conceitos Fundamentais']
    },
    {
      id: 2,
      title: 'IA Aplicada ao RH - Técnico',
      type: 'module',
      moduleNumber: 2,
      issueDate: '2024-07-16',
      hours: 2,
      grade: 88,
      status: 'available',
      description: 'Certificado técnico sobre implementação prática de soluções de IA em processos de RH.',
      skills: ['Machine Learning', 'NLP', 'Análise de Dados', 'Automação']
    },
    {
      id: 3,
      title: 'Especialista em Coleta de Dados para IA',
      type: 'module',
      moduleNumber: 3,
      issueDate: '',
      hours: 1.5,
      status: 'locked',
      description: 'Certificado em estratégias avançadas de coleta e preparação de dados para sistemas de IA.',
      skills: ['Data Collection', 'Data Preparation', 'Quality Assurance']
    },
    {
      id: 4,
      title: 'Inteligência Artificial para RH - Certificado Completo',
      type: 'course',
      issueDate: '',
      validUntil: '2026-07-30',
      hours: 12,
      status: 'locked',
      description: 'Certificado de conclusão completa do curso "Inteligência Artificial para RH: Desvendando Talentos no Recrutamento e Seleção".',
      skills: ['IA Avançada', 'Recrutamento Estratégico', 'Análise Preditiva', 'Gestão de Talentos', 'Liderança em IA']
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'earned':
        return <Badge className="bg-green-100 text-green-800">Conquistado</Badge>;
      case 'available':
        return <Badge className="bg-blue-100 text-blue-800">Disponível</Badge>;
      case 'locked':
        return <Badge className="bg-gray-100 text-gray-800">Bloqueado</Badge>;
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <Trophy className="h-6 w-6" />;
      case 'module':
        return <Award className="h-6 w-6" />;
      default:
        return <CheckCircle className="h-6 w-6" />;
    }
  };

  const filteredCertificates = certificates.filter(cert => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'earned') return cert.status === 'earned';
    if (selectedTab === 'available') return cert.status === 'available';
    return false;
  });

  const earnedCount = certificates.filter(c => c.status === 'earned').length;
  const availableCount = certificates.filter(c => c.status === 'available').length;
  const totalHours = certificates.filter(c => c.status === 'earned').reduce((sum, c) => sum + c.hours, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <Trophy className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Seus Certificados</h1>
            <p className="text-orange-100 text-lg">Reconhecimento pelo seu progresso e conquistas</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span className="font-semibold">Conquistados</span>
            </div>
            <p className="text-2xl font-bold mt-1">{earnedCount}</p>
            <p className="text-xs opacity-75">certificados</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Disponíveis</span>
            </div>
            <p className="text-2xl font-bold mt-1">{availableCount}</p>
            <p className="text-xs opacity-75">para resgate</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Horas Certificadas</span>
            </div>
            <p className="text-2xl font-bold mt-1">{totalHours}h</p>
            <p className="text-xs opacity-75">de treinamento</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Progresso</span>
            </div>
            <p className="text-2xl font-bold mt-1">{Math.round((earnedCount / certificates.length) * 100)}%</p>
            <p className="text-xs opacity-75">completo</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-4">
        {[
          { key: 'all', label: 'Todos' },
          { key: 'earned', label: 'Conquistados' },
          { key: 'available', label: 'Disponíveis' }
        ].map(filter => (
          <Button
            key={filter.key}
            variant={selectedTab === filter.key ? "default" : "outline"}
            onClick={() => setSelectedTab(filter.key)}
            className="flex-1 md:flex-none"
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCertificates.map(certificate => (
          <Card key={certificate.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`p-6 ${
              certificate.type === 'course' 
                ? 'bg-gradient-to-r from-purple-50 to-indigo-50' 
                : 'bg-gradient-to-r from-blue-50 to-cyan-50'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${
                    certificate.status === 'earned' 
                      ? 'bg-green-100 text-green-600' 
                      : certificate.status === 'available'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {getTypeIcon(certificate.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{certificate.title}</h3>
                    {certificate.moduleNumber && (
                      <p className="text-sm text-gray-600">Módulo {certificate.moduleNumber}</p>
                    )}
                  </div>
                </div>
                {getStatusBadge(certificate.status)}
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">{certificate.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{certificate.hours}h de carga horária</span>
                </div>
                {certificate.grade && (
                  <div className="flex items-center space-x-1">
                    <Trophy className="h-4 w-4" />
                    <span>Nota: {certificate.grade}%</span>
                  </div>
                )}
              </div>

              {/* Skills */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Competências Certificadas:</p>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map(skill => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex space-x-2 pt-4 border-t border-gray-200">
                {certificate.status === 'earned' && (
                  <>
                    <Button size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      Visualizar
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-4 w-4 mr-1" />
                      Compartilhar
                    </Button>
                  </>
                )}
                {certificate.status === 'available' && (
                  <Button size="sm" className="w-full">
                    <Award className="h-4 w-4 mr-1" />
                    Resgatar Certificado
                  </Button>
                )}
                {certificate.status === 'locked' && (
                  <Button size="sm" variant="outline" disabled className="w-full">
                    Complete os requisitos
                  </Button>
                )}
              </div>
              
              {certificate.issueDate && (
                <p className="text-xs text-gray-500 mt-3">
                  Emitido em: {new Date(certificate.issueDate).toLocaleDateString('pt-BR')}
                  {certificate.validUntil && (
                    <span> • Válido até: {new Date(certificate.validUntil).toLocaleDateString('pt-BR')}</span>
                  )}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Achievement Summary */}
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="text-center">
          <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Parabéns pelo seu progresso!</h3>
          <p className="text-gray-600 mb-4">
            Você já conquistou {earnedCount} certificado{earnedCount !== 1 ? 's' : ''} e acumulou {totalHours} horas de treinamento certificado.
          </p>
          <Button>
            <Share2 className="h-4 w-4 mr-2" />
            Compartilhar Conquistas no LinkedIn
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CertificatesPage;
