
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Clock, BookOpen, Users, Play, Calendar, TrendingUp, Award, Target, Brain, Zap } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="container-modern section-padding space-y-8 animate-fade-in">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
          
          <div className="relative z-10 p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-100">
                    <Brain className="h-5 w-5" />
                    <span className="text-sm font-medium">Curso Premium</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Inteligência Artificial para RH
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Desvendando Talentos no Recrutamento e Seleção
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-200">
                    <Clock className="h-3 w-3 mr-1" />
                    12 horas de conteúdo
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-200">
                    <BookOpen className="h-3 w-3 mr-1" />
                    8 módulos práticos
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-200">
                    <Award className="h-3 w-3 mr-1" />
                    Certificação inclusa
                  </Badge>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-30"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop" 
                    alt="IA e RH" 
                    className="relative rounded-2xl shadow-2xl border border-white/20"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 glass rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100 font-medium">Progresso do Curso</span>
                </div>
                <span className="text-2xl font-bold">{userProgress.totalProgress}%</span>
              </div>
              <div className="progress-modern">
                <div 
                  className="progress-bar" 
                  style={{ width: `${userProgress.totalProgress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-3 text-sm text-blue-100">
                <span>{userProgress.completedModules} de {userProgress.totalModules} módulos concluídos</span>
                <span className="flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span>Continue aprendendo!</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-modern p-6 group">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {userProgress.completedModules}/{userProgress.totalModules}
                </p>
                <p className="text-gray-600 font-medium">Módulos</p>
                <p className="text-sm text-gray-500">Concluídos</p>
              </div>
            </div>
          </div>

          <div className="card-modern p-6 group">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 mb-1">1.5h</p>
                <p className="text-gray-600 font-medium">Tempo</p>
                <p className="text-sm text-gray-500">Estudado hoje</p>
              </div>
            </div>
          </div>

          <div className="card-modern p-6 group">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 mb-1">95%</p>
                <p className="text-gray-600 font-medium">Performance</p>
                <p className="text-sm text-gray-500">Média dos quizzes</p>
              </div>
            </div>
          </div>

          <div className="card-modern p-6 group">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 mb-1">1</p>
                <p className="text-gray-600 font-medium">Certificados</p>
                <p className="text-sm text-gray-500">Conquistados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Continue Learning */}
          <div className="card-modern p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                <Play className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Continue Aprendendo</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Módulo 2: Entendendo a Inteligência Artificial Aplicada ao RH
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progresso do módulo</span>
                    <span>0%</span>
                  </div>
                  <div className="progress-modern">
                    <div className="progress-bar" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <Button className="btn-modern w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Continuar Estudando
                </Button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="card-modern p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200/50">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Próximos Eventos</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-purple-100">
                    <div>
                      <p className="font-semibold text-gray-900">Webinar: Tendências IA 2024</p>
                      <p className="text-sm text-gray-600">15 Jul, 14:00</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">Ao Vivo</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-purple-100">
                    <div>
                      <p className="font-semibold text-gray-900">Fórum: Ética na IA</p>
                      <p className="text-sm text-gray-600">22 Jul</p>
                    </div>
                    <Badge variant="outline" className="border-purple-200 text-purple-600">Discussão</Badge>
                  </div>
                </div>
                <Button variant="outline" className="btn-modern w-full border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300">
                  Ver Cronograma Completo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card-modern p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Ações Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button variant="outline" className="btn-modern h-24 flex-col space-y-3 border-2 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
              <div className="p-2 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-medium">Baixar Materiais</span>
            </Button>
            <Button variant="outline" className="btn-modern h-24 flex-col space-y-3 border-2 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group">
              <div className="p-2 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <span className="font-medium">Acessar Fórum</span>
            </Button>
            <Button variant="outline" className="btn-modern h-24 flex-col space-y-3 border-2 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 group">
              <div className="p-2 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors duration-300">
                <Trophy className="h-6 w-6 text-amber-600" />
              </div>
              <span className="font-medium">Ver Certificados</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
