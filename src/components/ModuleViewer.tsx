import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, Download, ExternalLink, MessageSquare, FileText, Link, CheckCircle } from 'lucide-react';
import { Module } from '../types/course';
import ActivityManager from './ActivityManager';
import QuizManager from './QuizManager';

interface ModuleViewerProps {
  module: Module;
  onBack: () => void;
  onCompleteModule: (moduleId: number) => void;
  onUpdateProgress: (moduleId: number, progressType: string, value?: any) => void;
}

const ModuleViewer: React.FC<ModuleViewerProps> = ({ 
  module, 
  onBack, 
  onCompleteModule,
  onUpdateProgress 
}) => {
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

  const handleVideoComplete = () => {
    onUpdateProgress(module.id, 'videoWatched', true);
  };

  const handleMaterialDownload = (materialId: number) => {
    onUpdateProgress(module.id, 'materialDownload', materialId);
  };

  const handleActivityComplete = (activityId: number) => {
    onUpdateProgress(module.id, 'activityComplete', activityId);
  };

  const handleQuizComplete = (score: number) => {
    onUpdateProgress(module.id, 'quizComplete', score);
  };

  const handleForumParticipation = (topicId: number) => {
    onUpdateProgress(module.id, 'forumParticipation', topicId);
  };

  const calculateModuleProgress = () => {
    const { progress } = module;
    let totalTasks = 5; // video, materiais, quiz, fórum, atividades
    let completedTasks = 0;

    if (progress.videoWatched) completedTasks++;
    if (progress.materialsDownloaded > 0) completedTasks++;
    if (progress.quizCompleted) completedTasks++;
    if (progress.forumParticipated) completedTasks++;
    if (progress.activitiesCompleted > 0) completedTasks++;

    return Math.round((completedTasks / totalTasks) * 100);
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

      {/* Barra de Progresso do Módulo */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-900">Progresso do Módulo</span>
          <span className="text-sm font-semibold text-blue-600">{calculateModuleProgress()}%</span>
        </div>
        <Progress value={calculateModuleProgress()} className="h-3" />
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>Vídeo: {module.progress.videoWatched ? '✓' : '○'}</span>
          <span>Materiais: {module.progress.materialsDownloaded}/{module.materials.length}</span>
          <span>Quiz: {module.progress.quizCompleted ? '✓' : '○'}</span>
          <span>Fórum: {module.progress.forumParticipated ? '✓' : '○'}</span>
          <span>Atividades: {module.progress.activitiesCompleted}/{module.activities.length}</span>
        </div>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-gray-100 p-1">
          <TabsTrigger 
            value="conteudo"
            className="text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
          >
            Conteúdo
            {module.progress.videoWatched && <CheckCircle className="h-3 w-3 ml-1 text-green-500" />}
          </TabsTrigger>
          <TabsTrigger 
            value="materiais"
            className="text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
          >
            Materiais
            {module.progress.materialsDownloaded > 0 && <CheckCircle className="h-3 w-3 ml-1 text-green-500" />}
          </TabsTrigger>
          <TabsTrigger 
            value="atividades"
            className="text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
          >
            Atividades
            {module.progress.activitiesCompleted > 0 && <CheckCircle className="h-3 w-3 ml-1 text-green-500" />}
          </TabsTrigger>
          <TabsTrigger 
            value="quiz"
            className="text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
          >
            Quiz
            {module.progress.quizCompleted && <CheckCircle className="h-3 w-3 ml-1 text-green-500" />}
          </TabsTrigger>
          <TabsTrigger 
            value="forum"
            className="text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
          >
            Fórum
            {module.progress.forumParticipated && <CheckCircle className="h-3 w-3 ml-1 text-green-500" />}
          </TabsTrigger>
          <TabsTrigger 
            value="certificado"
            className="text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
          >
            Certificado
          </TabsTrigger>
        </TabsList>

        <TabsContent value="conteudo" className="space-y-6">
          <Card className="p-6">
            <div className="bg-black rounded-lg aspect-video flex items-center justify-center mb-6 relative">
              <div className="text-white text-center">
                <Play className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Aula: {module.title}</p>
                <p className="text-sm text-gray-300">Duração: {module.duration}</p>
              </div>
              {module.progress.videoWatched && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              )}
            </div>
            
            <div className="prose max-w-none mb-6">
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

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Status: {module.progress.videoWatched ? 'Assistido' : 'Não assistido'}
              </div>
              <Button 
                onClick={handleVideoComplete}
                disabled={module.progress.videoWatched}
                variant={module.progress.videoWatched ? "outline" : "default"}
              >
                {module.progress.videoWatched ? 'Vídeo Assistido' : 'Marcar como Assistido'}
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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleMaterialDownload(material.id)}
                >
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

        <TabsContent value="atividades" className="space-y-4">
          <ActivityManager 
            activities={module.activities}
            onCompleteActivity={handleActivityComplete}
          />
        </TabsContent>

        <TabsContent value="quiz" className="space-y-4">
          {module.quiz ? (
            <QuizManager 
              quiz={module.quiz}
              onCompleteQuiz={handleQuizComplete}
            />
          ) : (
            <Card className="p-8 text-center">
              <p className="text-gray-500">Quiz não disponível para este módulo.</p>
            </Card>
          )}
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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleForumParticipation(topic.id)}
                >
                  {topic.isParticipated ? 'Participando' : 'Participar'}
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
              <p>Módulo: {module.title}</p>
            </div>
            
            {calculateModuleProgress() === 100 ? (
              <div className="space-y-4">
                <p className="text-green-600 font-medium">
                  ✓ Módulo concluído com sucesso!
                </p>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Certificado do Módulo
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-500">
                  Complete todas as atividades do módulo para gerar seu certificado.
                </p>
                <div className="text-sm text-gray-400">
                  Progresso atual: {calculateModuleProgress()}%
                </div>
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModuleViewer;
