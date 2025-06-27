
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, CheckCircle, Circle, BookOpen, Video, Users } from 'lucide-react';

interface ScheduleItem {
  id: number;
  type: 'module' | 'webinar' | 'assignment' | 'forum';
  title: string;
  description: string;
  date: string;
  time?: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'pending' | 'available';
  moduleNumber?: number;
}

const SchedulePage = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  const scheduleItems: ScheduleItem[] = [
    {
      id: 1,
      type: 'module',
      title: 'Módulo 1: Novo Olhar Sobre o Recrutamento na Era da IA',
      description: 'Introdução aos conceitos fundamentais de IA aplicados ao recrutamento',
      date: '2024-07-08',
      duration: '90 min',
      status: 'completed',
      moduleNumber: 1
    },
    {
      id: 2,
      type: 'webinar',
      title: 'Webinar: IA no Recrutamento - Tendências 2024',
      description: 'Sessão ao vivo com especialistas sobre as principais tendências',
      date: '2024-07-15',
      time: '14:00',
      duration: '90 min',
      status: 'available'
    },
    {
      id: 3,
      type: 'module',
      title: 'Módulo 2: Entendendo a Inteligência Artificial Aplicada ao RH',
      description: 'Fundamentos técnicos e aplicações práticas da IA no RH',
      date: '2024-07-16',
      duration: '120 min',
      status: 'available',
      moduleNumber: 2
    },
    {
      id: 4,
      type: 'assignment',
      title: 'Atividade Prática: Análise de CV com IA',
      description: 'Exercício hands-on para aplicar conceitos de NLP em currículos',
      date: '2024-07-20',
      duration: '45 min',
      status: 'pending'
    },
    {
      id: 5,
      type: 'forum',
      title: 'Discussão: Ética na IA para RH',
      description: 'Participe do debate sobre aspectos éticos da IA no recrutamento',
      date: '2024-07-22',
      duration: '30 min',
      status: 'pending'
    },
    {
      id: 6,
      type: 'module',
      title: 'Módulo 3: Coletando os Dados Certos para a IA',
      description: 'Estratégias para coleta e preparação de dados para sistemas de IA',
      date: '2024-07-23',
      duration: '100 min',
      status: 'pending',
      moduleNumber: 3
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'module':
        return <BookOpen className="h-5 w-5" />;
      case 'webinar':
        return <Video className="h-5 w-5" />;
      case 'assignment':
        return <CheckCircle className="h-5 w-5" />;
      case 'forum':
        return <Users className="h-5 w-5" />;
      default:
        return <Circle className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'module':
        return 'bg-blue-100 text-blue-800';
      case 'webinar':
        return 'bg-purple-100 text-purple-800';
      case 'assignment':
        return 'bg-green-100 text-green-800';
      case 'forum':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Concluído</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-100 text-yellow-800">Em Progresso</Badge>;
      case 'available':
        return <Badge className="bg-blue-100 text-blue-800">Disponível</Badge>;
      case 'pending':
        return <Badge className="bg-gray-100 text-gray-800">Pendente</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in-progress':
        return <Circle className="h-5 w-5 text-yellow-600" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <Calendar className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Cronograma do Curso</h1>
            <p className="text-blue-100 text-lg">Acompanhe seu progresso e planeje seus estudos</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Concluído</span>
            </div>
            <p className="text-2xl font-bold mt-1">1/8</p>
            <p className="text-xs opacity-75">módulos</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Em Progresso</span>
            </div>
            <p className="text-2xl font-bold mt-1">2</p>
            <p className="text-xs opacity-75">atividades</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Próxima Tarefa</span>
            </div>
            <p className="text-sm font-semibold mt-1">15 Jul</p>
            <p className="text-xs opacity-75">Webinar ao vivo</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">Tempo Restante</span>
            </div>
            <p className="text-2xl font-bold mt-1">10h</p>
            <p className="text-xs opacity-75">de conteúdo</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Cronograma Detalhado</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-6">
            {scheduleItems.map((item, index) => (
              <div key={item.id} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg ${
                  item.status === 'completed' ? 'bg-green-500' : 
                  item.status === 'available' ? 'bg-blue-500' : 'bg-gray-300'
                }`}>
                  {getStatusIcon(item.status)}
                </div>
                
                {/* Content card */}
                <Card className="flex-1 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <Badge className={getTypeColor(item.type)}>
                          {item.type === 'module' ? 'Módulo' :
                           item.type === 'webinar' ? 'Webinar' :
                           item.type === 'assignment' ? 'Atividade' : 'Fórum'}
                        </Badge>
                        {item.moduleNumber && (
                          <Badge variant="outline" className="ml-2">
                            Módulo {item.moduleNumber}
                          </Badge>
                        )}
                      </div>
                    </div>
                    {getStatusBadge(item.status)}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      {item.time && (
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.time}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant={item.status === 'completed' ? 'outline' : 'default'}
                      disabled={item.status === 'pending'}
                    >
                      {item.status === 'completed' ? 'Revisar' :
                       item.status === 'available' ? 'Acessar' : 'Bloqueado'}
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
