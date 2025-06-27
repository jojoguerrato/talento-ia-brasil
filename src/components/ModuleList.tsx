
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, Lock, CheckCircle, Clock, Download, MessageSquare } from 'lucide-react';
import { Module } from '../types/course';

interface ModuleListProps {
  modules: Module[];
  onModuleSelect: (module: Module) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({ modules, onModuleSelect }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Módulos do Curso</h2>
        <Badge variant="secondary" className="px-3 py-1">
          8 Módulos • 12h Total
        </Badge>
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <Card key={module.id} className="p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                module.isCompleted 
                  ? 'bg-green-100 text-green-600' 
                  : module.isLocked 
                    ? 'bg-gray-100 text-gray-400'
                    : 'bg-blue-100 text-blue-600'
              }`}>
                {module.isCompleted ? (
                  <CheckCircle className="h-6 w-6" />
                ) : module.isLocked ? (
                  <Lock className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Módulo {index + 1}: {module.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {module.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{module.materials.length} materiais</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{module.forum.length} discussões</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    {module.isCompleted && (
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Concluído
                      </Badge>
                    )}
                    {module.isLocked && (
                      <Badge variant="outline" className="text-gray-500 border-gray-200">
                        Bloqueado
                      </Badge>
                    )}
                    
                    <Button
                      onClick={() => onModuleSelect(module)}
                      disabled={module.isLocked}
                      variant={module.isCompleted ? "outline" : "default"}
                      size="sm"
                      className="min-w-[100px]"
                    >
                      {module.isCompleted ? 'Revisar' : module.isLocked ? 'Bloqueado' : 'Acessar'}
                    </Button>
                  </div>
                </div>

                {!module.isLocked && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Progresso</span>
                      <span className="text-xs text-gray-500">
                        {module.isCompleted ? '100%' : '0%'}
                      </span>
                    </div>
                    <Progress 
                      value={module.isCompleted ? 100 : 0} 
                      className="h-2"
                    />
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ModuleList;
