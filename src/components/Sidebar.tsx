
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Trophy, 
  MessageSquare, 
  Settings, 
  LogOut,
  Home,
  PlayCircle,
  Users,
  Calendar,
  Brain,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  userProgress: {
    totalProgress: number;
    completedModules: number;
    totalModules: number;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  onSectionChange, 
  userProgress 
}) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', color: 'text-blue-600' },
    { id: 'modules', icon: BookOpen, label: 'Módulos', color: 'text-indigo-600' },
    { id: 'webinars', icon: PlayCircle, label: 'Webinars ao Vivo', color: 'text-purple-600' },
    { id: 'forum', icon: MessageSquare, label: 'Fórum Geral', color: 'text-emerald-600' },
    { id: 'community', icon: Users, label: 'Comunidade', color: 'text-pink-600' },
    { id: 'schedule', icon: Calendar, label: 'Cronograma', color: 'text-amber-600' },
    { id: 'certificates', icon: Trophy, label: 'Certificados', color: 'text-orange-600' },
  ];

  return (
    <div className="w-72 h-full bg-white/80 backdrop-blur-md border-r border-gray-200/50 flex flex-col shadow-xl">
      <div className="p-8 border-b border-gray-200/50">
        <div className="text-center">
          <div className="relative mx-auto mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl mx-auto flex items-center justify-center shadow-lg">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Talento IA Brasil</h2>
          <p className="text-sm text-gray-600">RH + Inteligência Artificial</p>
        </div>
      </div>

      <div className="p-6">
        <div className="card-modern p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              {userProgress.totalProgress}%
            </div>
            <p className="text-sm text-gray-600 mb-4 font-medium">Progresso Geral</p>
            <div className="progress-modern">
              <div 
                className="progress-bar" 
                style={{ width: `${userProgress.totalProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              {userProgress.completedModules} de {userProgress.totalModules} módulos
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                variant="ghost"
                className={`w-full justify-start h-12 text-left transition-all duration-300 rounded-xl ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30' 
                    : 'text-gray-700 hover:bg-gray-100/80 hover:text-gray-900'
                }`}
              >
                <div className={`p-2 rounded-lg mr-3 transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : item.color}`} />
                </div>
                <span className="font-medium">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>

      <div className="p-6 border-t border-gray-200/50 space-y-2">
        <Button variant="ghost" className="w-full justify-start h-12 text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 rounded-xl transition-all duration-300">
          <div className="p-2 bg-gray-100 rounded-lg mr-3">
            <Settings className="h-5 w-5 text-gray-500" />
          </div>
          <span className="font-medium">Configurações</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start h-12 text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 rounded-xl transition-all duration-300">
          <div className="p-2 bg-gray-100 rounded-lg mr-3">
            <LogOut className="h-5 w-5 text-gray-500" />
          </div>
          <span className="font-medium">Sair</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
