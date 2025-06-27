
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Clock, BookOpen, Users, Play, Calendar, TrendingUp, Award } from 'lucide-react';

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
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Inteligência Artificial para RH
              </h1>
              <p className="text-blue-100 text-xl mb-4">
                Desvendando Talentos no Recrutamento e Seleção
              </p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  12 horas de conteúdo
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  8 módulos práticos
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  Certificação inclusa
                </Badge>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" 
                alt="IA e RH" 
                className="rounded-xl shadow-2xl opacity-90"
              />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-blue-100 font-medium">Seu Progresso no Curso</span>
              <span className="font-bold text-xl">{userProgress.totalProgress}%</span>
            </div>
            <Progress 
              value={userProgress.totalProgress} 
              className="h-4 bg-white/20"
            />
            <div className="flex justify-between items-center mt-2 text-sm text-blue-100">
              <span>{userProgress.completedModules} de {userProgress.totalModules} módulos concluídos</span>
              <span>Continue aprendendo!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-blue-100 rounded-xl">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {userProgress.completedModules}/{userProgress.totalModules}
              </p>
              <p className="text-gray-600 font-medium">Módulos</p>
              <p className="text-xs text-gray-500">Concluídos</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-green-100 rounded-xl">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">1.5h</p>
              <p className="text-gray-600 font-medium">Tempo</p>
              <p className="text-xs text-gray-500">Estudado hoje</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-purple-100 rounded-xl">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">95%</p>
              <p className="text-gray-600 font-medium">Performance</p>
              <p className="text-xs text-gray-500">Média dos quizzes</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-yellow-100 rounded-xl">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">1</p>
              <p className="text-gray-600 font-medium">Certificados</p>
              <p className="text-xs text-gray-500">Conquistados</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Continue Learning */}
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-600 rounded-lg text-white">
              <Play className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Continue Aprendendo</h3>
              <p className="text-gray-600 mb-4">
                Módulo 2: Entendendo a Inteligência Artificial Aplicada ao RH
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progresso do módulo</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Continuar Estudando
              </Button>
            </div>
          </div>
        </Card>

        {/* Upcoming Events */}
        <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-600 rounded-lg text-white">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Próximos Eventos</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Webinar: Tendências IA 2024</p>
                    <p className="text-sm text-gray-600">15 Jul, 14:00</p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">Ao Vivo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Fórum: Ética na IA</p>
                    <p className="text-sm text-gray-600">22 Jul</p>
                  </div>
                  <Badge variant="outline">Discussão</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Ver Cronograma Completo
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Ações Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <BookOpen className="h-6 w-6" />
            <span>Baixar Materiais</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <Users className="h-6 w-6" />
            <span>Acessar Fórum</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <Trophy className="h-6 w-6" />
            <span>Ver Certificados</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
