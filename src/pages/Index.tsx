import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import ModuleList from '../components/ModuleList';
import ModuleViewer from '../components/ModuleViewer';
import WebinarsPage from '../components/WebinarsPage';
import SchedulePage from '../components/SchedulePage';
import CertificatesPage from '../components/CertificatesPage';
import { courseModules } from '../data/courseData';
import { Module, ModuleProgress } from '../types/course';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [modules, setModules] = useState(courseModules);
  const [userProgress, setUserProgress] = useState({
    completedModules: 1,
    totalModules: 8,
    totalProgress: 12.5,
    certificateEarned: false,
    moduleProgress: {} as { [moduleId: number]: ModuleProgress }
  });

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module);
    setActiveSection('module-viewer');
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    setActiveSection('modules');
  };

  const handleCompleteModule = (moduleId: number) => {
    setModules(prevModules => 
      prevModules.map(module => {
        if (module.id === moduleId) {
          return { ...module, isCompleted: true };
        }
        // Desbloquear próximo módulo
        if (module.id === moduleId + 1) {
          return { ...module, isLocked: false };
        }
        return module;
      })
    );
    
    setUserProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules + 1,
      totalProgress: Math.min(prev.totalProgress + 12.5, 100)
    }));
  };

  const handleUpdateProgress = (moduleId: number, progressType: string, value?: any) => {
    setModules(prevModules => 
      prevModules.map(module => {
        if (module.id === moduleId) {
          const updatedProgress = { ...module.progress };
          
          switch (progressType) {
            case 'videoWatched':
              updatedProgress.videoWatched = true;
              break;
            case 'materialDownload':
              updatedProgress.materialsDownloaded += 1;
              break;
            case 'activityComplete':
              updatedProgress.activitiesCompleted += 1;
              // Marcar atividade como completa
              const updatedActivities = module.activities.map(activity => 
                activity.id === value ? { ...activity, isCompleted: true } : activity
              );
              return { 
                ...module, 
                progress: updatedProgress,
                activities: updatedActivities 
              };
            case 'quizComplete':
              updatedProgress.quizCompleted = true;
              const updatedQuiz = module.quiz ? { ...module.quiz, isCompleted: true, score: value } : module.quiz;
              return { 
                ...module, 
                progress: updatedProgress,
                quiz: updatedQuiz 
              };
            case 'forumParticipation':
              updatedProgress.forumParticipated = true;
              const updatedForum = module.forum.map(topic => 
                topic.id === value ? { ...topic, isParticipated: true } : topic
              );
              return { 
                ...module, 
                progress: updatedProgress,
                forum: updatedForum 
              };
          }
          
          return { ...module, progress: updatedProgress };
        }
        return module;
      })
    );

    // Se o módulo selecionado foi atualizado, atualizar também o estado selectedModule
    if (selectedModule && selectedModule.id === moduleId) {
      const updatedModule = modules.find(m => m.id === moduleId);
      if (updatedModule) {
        setSelectedModule(updatedModule);
      }
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard userProgress={userProgress} />;
      
      case 'modules':
        return (
          <ModuleList 
            modules={modules} 
            onModuleSelect={handleModuleSelect}
          />
        );
      
      case 'module-viewer':
        return selectedModule ? (
          <ModuleViewer 
            module={selectedModule}
            onBack={handleBackToModules}
            onCompleteModule={handleCompleteModule}
            onUpdateProgress={handleUpdateProgress}
          />
        ) : null;
      
      case 'webinars':
        return <WebinarsPage />;
      
      case 'forum':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Fórum Geral</h2>
            <p className="text-gray-600">Seção em desenvolvimento</p>
          </div>
        );
      
      case 'community':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Comunidade</h2>
            <p className="text-gray-600">Seção em desenvolvimento</p>
          </div>
        );
      
      case 'schedule':
        return <SchedulePage />;
      
      case 'certificates':
        return <CertificatesPage />;
      
      default:
        return <Dashboard userProgress={userProgress} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          userProgress={userProgress}
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
