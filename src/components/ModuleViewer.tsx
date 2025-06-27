
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, Download, ExternalLink, MessageSquare, FileText, Link } from 'lucide-react';
import { Module } from '../types/course';

interface ModuleViewerProps {
  module: Module;
  onBack: () => void;
  onCompleteModule: (moduleId: number) => void;
}

const ModuleViewer: React.FC<ModuleViewerProps> = ({ module, onBack, onCompleteModule }) => {
  const [activeTab, setActiveTab] = useState('conteudo');

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'pdf':
      case 'document':
        return <FileText className="h-4 w-4" />;
      case 'link':
        return <ExternalLink className="h-4 w-4" />;
      case 'video':
        return <Play className="h-4 w-4" />;
      default:
        return <Download className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button onClick={onBack} variant="outline" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{module.title}</h1>
          <p className="text-gray-600 mt-1">{module.description}</p>
        </div>
        <Badge variant="outline" className="px-3 py-1">
          {module.duration}
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="conteudo">Conteúdo</TabsTrigger>
          <TabsTrigger value="materiais">Materiais</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
          <TabsTrigger value="forum">Fórum</TabsTrigger>
          <TabsTrigger value="certificado">Certificado</TabsTrigger>
        </TabsList>

        <TabsContent value="conteudo" className="space-y-6">
          <Card className="p-6">
            <div className="bg-black rounded-lg aspect-video flex items-center justify-center mb-6">
              <div className="text-white text-center">
                <Play className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Player de Vídeo</p>
                <p className="text-sm text-gray-300">Aula: {module.title}</p>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3>Conteúdo Programático</h3>
              <p>
                Neste módulo, você irá aprender sobre os fundamentos da inteligência artificial 
                aplicada ao recrutamento e seleção. Abordaremos as principais tecnologias, 
                benefícios e desafios da implementação de IA nos processos de RH.
              </p>
              
              <h4>Objetivos de Aprendizagem:</h4>
              <ul>
                <li>Compreender os conceitos básicos de IA aplicada ao RH</li>
                <li>Identificar oportunidades de automação no recrutamento</li>
                <li>Reconhecer os benefícios e limitações da tecnologia</li>
                <li>Analisar casos práticos de implementação</li>
              </ul>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Progresso: {module.isCompleted ? '100%' : '0%'} concluído
              </div>
              <Button 
                onClick={() => onCompleteModule(module.id)}
                disabled={module.isCompleted}
              >
                {module.isCompleted ? 'Módulo Concluído' : 'Marcar como Concluído'}
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="materiais" className="space-y-4">
          {module.materials.map((material) => (
            <Card key={material.id} className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  {getMaterialIcon(material.type)}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{material.title}</h4>
                  {material.description && (
                    <p className="text-sm text-gray-600">{material.description}</p>
                  )}
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  {material.type === 'link' ? 'Acessar' : 'Download'}
                </Button>
              </div>
            </Card>
          ))}
          
          {module.materials.length === 0 && (
            <Card className="p-8 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Nenhum material disponível para este módulo.</p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="quiz" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quiz do Módulo</h3>
            {module.quiz ? (
              <div className="space-y-4">
                <p className="text-gray-600">
                  Complete o quiz para testar seus conhecimentos sobre este módulo.
                  Pontuação mínima para aprovação: {module.quiz.passingScore}%
                </p>
                <Button className="w-full">
                  Iniciar Quiz ({module.quiz.questions.length} perguntas)
                </Button>
              </div>
            ) : (
              <p className="text-gray-500">Quiz não disponível para este módulo.</p>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="forum" className="space-y-4">
          {module.forum.map((topic) => (
            <Card key={topic.id} className="p-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{topic.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span>Por {topic.author}</span>
                    <span>{topic.replies} respostas</span>
                    <span>{topic.lastActivity}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Participar
                </Button>
              </div>
            </Card>
          ))}
          
          {module.forum.length === 0 && (
            <Card className="p-8 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Nenhuma discussão ativa para este módulo.</p>
              <Button className="mt-4">Iniciar Nova Discussão</Button>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="certificado" className="space-y-4">
          <Card className="p-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">Certificado de Conclusão</h3>
              <p>Inteligência Artificial para RH</p>
            </div>
            
            {module.isCompleted ? (
              <div className="space-y-4">
                <p className="text-green-600 font-medium">
                  ✓ Módulo concluído com sucesso!
                </p>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Certificado
                </Button>
              </div>
            ) : (
              <p className="text-gray-500">
                Complete todos os módulos e atividades para receber seu certificado.
              </p>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModuleViewer;
