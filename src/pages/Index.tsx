
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import ModuleList from '../components/ModuleList';
import ModuleViewer from '../components/ModuleViewer';
import { courseModules } from '../data/courseData';
import { Module } from '../types/course';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [userProgress, setUserProgress] = useState({
    completedModules: 0,
    totalModules: 8,
    totalProgress: 12,
    certificateEarned: false
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
    // Aqui você implementaria a lógica para marcar o módulo como concluído
    console.log('Módulo concluído:', moduleId);
    
    // Simular atualização do progresso
    setUserProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules + 1,
      totalProgress: Math.min(prev.totalProgress + 12.5, 100)
    }));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard userProgress={userProgress} />;
      
      case 'modules':
        return (
          <ModuleList 
            modules={courseModules} 
            onModuleSelect={handleModuleSelect}
          />
        );
      
      case 'module-viewer':
        return selectedModule ? (
          <ModuleViewer 
            module={selectedModule}
            onBack={handleBackToModules}
            onCompleteModule={handleCompleteModule}
          />
        ) : null;
      
      case 'webinars':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Webinars ao Vivo</h2>
            <p className="text-gray-600">Seção em desenvolvimento</p>
          </div>
        );
      
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
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Cronograma</h2>
            <p className="text-gray-600">Seção em desenvolvimento</p>
          </div>
        );
      
      case 'certificates':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Certificados</h2>
            <p className="text-gray-600">Seção em desenvolvimento</p>
          </div>
        );
      
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
