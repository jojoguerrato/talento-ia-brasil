
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
  Calendar
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
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'modules', icon: BookOpen, label: 'Módulos' },
    { id: 'webinars', icon: PlayCircle, label: 'Webinars ao Vivo' },
    { id: 'forum', icon: MessageSquare, label: 'Fórum Geral' },
    { id: 'community', icon: Users, label: 'Comunidade' },
    { id: 'schedule', icon: Calendar, label: 'Cronograma' },
    { id: 'certificates', icon: Trophy, label: 'Certificados' },
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
            IA
          </div>
          <h2 className="font-bold text-gray-900">Talento IA Brasil</h2>
          <p className="text-sm text-gray-600">RH + Inteligência Artificial</p>
        </div>
      </div>

      <div className="p-4">
        <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {userProgress.totalProgress}%
            </div>
            <p className="text-sm text-gray-600 mb-2">Progresso Geral</p>
            <Progress value={userProgress.totalProgress} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">
              {userProgress.completedModules} de {userProgress.totalModules} módulos
            </p>
          </div>
        </Card>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start h-11 ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 space-y-2">
        <Button variant="ghost" className="w-full justify-start text-gray-700">
          <Settings className="h-5 w-5 mr-3" />
          Configurações
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-700">
          <LogOut className="h-5 w-5 mr-3" />
          Sair
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
