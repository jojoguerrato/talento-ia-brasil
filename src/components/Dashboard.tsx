
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Clock, BookOpen, Users } from 'lucide-react';

interface DashboardProps {
  userProgress: {
    completedModules: number;
    totalModules: number;
    totalProgress: number;
    certificateEarned: boolean;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ userProgress }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Inteligência Artificial para RH
        </h1>
        <p className="text-blue-100 text-lg">
          Desvendando Talentos no Recrutamento e Seleção
        </p>
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-blue-100">Progresso do Curso</span>
            <span className="font-semibold">{userProgress.totalProgress}%</span>
          </div>
          <Progress 
            value={userProgress.totalProgress} 
            className="h-3 bg-white/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {userProgress.completedModules}/{userProgress.totalModules}
              </p>
              <p className="text-gray-600 text-sm">Módulos Concluídos</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">12h</p>
              <p className="text-gray-600 text-sm">Carga Horária</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <p className="text-gray-600 text-sm">Módulos</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Trophy className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {userProgress.certificateEarned ? 'Sim' : 'Não'}
              </p>
              <p className="text-gray-600 text-sm">Certificado</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Próximos Passos</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Continue o Módulo 1: Novo Olhar Sobre o Recrutamento na Era da IA</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="text-gray-500">Complete o Quiz do Módulo 1</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="text-gray-500">Participe do Fórum de Discussão</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
