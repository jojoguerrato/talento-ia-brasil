
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, Lock, CheckCircle, Clock, Download, MessageSquare, Star, Users, Target } from 'lucide-react';
import { Module } from '../types/course';

interface ModuleListProps {
  modules: Module[];
  onModuleSelect: (module: Module) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({ modules, onModuleSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="container-modern section-padding space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Trilha de Aprendizagem
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Módulos do Curso
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolva suas habilidades em IA para RH através de uma jornada estruturada e prática
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-lg border-2">
              <Clock className="h-4 w-4 mr-2" />
              8 Módulos
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg border-2">
              <Users className="h-4 w-4 mr-2" />
              12h Total
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg border-2">
              <Star className="h-4 w-4 mr-2" />
              Nível Avançado
            </Badge>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid gap-8">
          {modules.map((module, index) => (
            <div key={module.id} className="card-modern p-8 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-6">
                {/* Module Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  module.isCompleted 
                    ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-500/25' 
                    : module.isLocked 
                      ? 'bg-gradient-to-br from-gray-400 to-gray-500 shadow-gray-400/25'
                      : 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25'
                }`}>
                  {module.isCompleted ? (
                    <CheckCircle className="h-8 w-8 text-white" />
                  ) : module.isLocked ? (
                    <Lock className="h-8 w-8 text-white" />
                  ) : (
                    <Play className="h-8 w-8 text-white" />
                  )}
                </div>

                {/* Module Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          Módulo {index + 1}
                        </Badge>
                        {module.isCompleted && (
                          <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                            Concluído
                          </Badge>
                        )}
                        {module.isLocked && (
                          <Badge variant="outline" className="border-gray-300 text-gray-500">
                            Bloqueado
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {module.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                        {module.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{module.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span className="font-medium">{module.materials.length} materiais</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="h-4 w-4" />
                          <span className="font-medium">{module.forum.length} discussões</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-4">
                      <Button
                        onClick={() => onModuleSelect(module)}
                        disabled={module.isLocked}
                        className={`btn-modern min-w-[120px] transition-all duration-300 ${
                          module.isCompleted 
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-emerald-500/25' 
                            : module.isLocked 
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-blue-500/25'
                        }`}
                      >
                        {module.isCompleted ? 'Revisar' : module.isLocked ? 'Bloqueado' : 'Acessar'}
                      </Button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {!module.isLocked && (
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">Progresso</span>
                        <span className="text-sm font-bold text-gray-900">
                          {module.isCompleted ? '100%' : '0%'}
                        </span>
                      </div>
                      <div className="progress-modern">
                        <div 
                          className="progress-bar" 
                          style={{ width: module.isCompleted ? '100%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card-modern p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Transforme sua carreira em RH com o poder da Inteligência Artificial
            </p>
            <Button 
              onClick={() => onModuleSelect(modules.find(m => !m.isLocked && !m.isCompleted) || modules[0])}
              className="btn-modern bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-blue-500/25"
            >
              Continuar Aprendendo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleList;
