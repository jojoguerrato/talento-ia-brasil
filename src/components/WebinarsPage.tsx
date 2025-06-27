
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Video, Play, Bell, Zap, Star, Globe } from 'lucide-react';

interface Webinar {
  id: number;
  title: string;
  description: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  participants: number;
  maxParticipants: number;
  status: 'upcoming' | 'live' | 'completed';
  image: string;
  tags: string[];
}

const WebinarsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const webinars: Webinar[] = [
    {
      id: 1,
      title: "IA no Recrutamento: Tendências 2024",
      description: "Explore as principais tendências de IA aplicadas ao recrutamento e seleção, com cases reais e demonstrações práticas dos mais modernos algoritmos.",
      instructor: "Dr. Ana Silva",
      date: "2024-07-15",
      time: "14:00",
      duration: "90 min",
      participants: 85,
      maxParticipants: 100,
      status: 'upcoming',
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
      tags: ["IA", "Recrutamento", "Tendências"]
    },
    {
      id: 2,
      title: "Workshop: Análise Preditiva de Candidatos",
      description: "Sessão hands-on para construir modelos preditivos que identifiquem os melhores candidatos para sua empresa usando machine learning.",
      instructor: "Prof. Carlos Mendes",
      date: "2024-07-22",
      time: "16:00",
      duration: "120 min",
      participants: 67,
      maxParticipants: 80,
      status: 'upcoming',
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      tags: ["Workshop", "Análise Preditiva", "Hands-on"]
    },
    {
      id: 3,
      title: "Mesa Redonda: O Futuro do RH",
      description: "Discussão com especialistas sobre como a IA está transformando o departamento de Recursos Humanos e o que esperar para o futuro.",
      instructor: "Painel de Especialistas",
      date: "2024-07-08",
      time: "19:00",
      duration: "60 min",
      participants: 150,
      maxParticipants: 150,
      status: 'completed',
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop",
      tags: ["Mesa Redonda", "Futuro", "Especialistas"]
    }
  ];

  const filteredWebinars = webinars.filter(webinar => 
    selectedFilter === 'all' || webinar.status === selectedFilter
  );

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'upcoming':
        return {
          badge: <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">Próximo</Badge>,
          button: (
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="btn-modern">
                <Bell className="h-4 w-4 mr-1" />
                Lembrete
              </Button>
              <Button size="sm" className="btn-modern bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                Participar
              </Button>
            </div>
          )
        };
      case 'live':
        return {
          badge: <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse">Ao Vivo</Badge>,
          button: (
            <Button size="sm" className="btn-modern bg-gradient-to-r from-red-500 to-red-600 text-white">
              <Play className="h-4 w-4 mr-1" />
              Entrar Agora
            </Button>
          )
        };
      case 'completed':
        return {
          badge: <Badge variant="outline" className="border-gray-300 text-gray-600">Finalizado</Badge>,
          button: (
            <Button variant="outline" size="sm" className="btn-modern">
              <Play className="h-4 w-4 mr-1" />
              Ver Gravação
            </Button>
          )
        };
      default:
        return { badge: null, button: null };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/40">
      <div className="container-modern section-padding space-y-8 animate-fade-in">
        {/* Hero Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 p-8 lg:p-12 text-white">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Video className="h-12 w-12" />
                </div>
              </div>
              
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Webinars ao Vivo
                </h1>
                <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
                  Participe de sessões exclusivas com especialistas em IA para RH. 
                  Aprenda com os melhores profissionais do mercado em tempo real.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="glass rounded-2xl p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">Próximo Webinar</h3>
                  <p className="text-purple-100">15 Jul, 14:00</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">Participantes</h3>
                  <p className="text-purple-100">85+ inscritos</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <Play className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">Gravações</h3>
                  <p className="text-purple-100">Disponíveis 24h após</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { key: 'all', label: 'Todos os Webinars', icon: Globe },
            { key: 'upcoming', label: 'Próximos', icon: Calendar },
            { key: 'live', label: 'Ao Vivo', icon: Zap },
            { key: 'completed', label: 'Finalizados', icon: Star }
          ].map(filter => {
            const Icon = filter.icon;
            return (
              <Button
                key={filter.key}
                variant={selectedFilter === filter.key ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.key)}
                className={`btn-modern ${
                  selectedFilter === filter.key 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg' 
                    : 'hover:bg-purple-50 border-2'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {filter.label}
              </Button>
            );
          })}
        </div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredWebinars.map((webinar, index) => (
            <div key={webinar.id} className="card-modern overflow-hidden group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img 
                  src={webinar.image} 
                  alt={webinar.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  {getStatusConfig(webinar.status).badge}
                </div>
                {webinar.status === 'live' && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      <div className="status-dot status-online"></div>
                      <span className="font-medium">AO VIVO</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {webinar.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs border-purple-200 text-purple-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {webinar.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">{webinar.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">{new Date(webinar.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">{webinar.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">{webinar.participants}/{webinar.maxParticipants}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="progress-modern w-24">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${(webinar.participants / webinar.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {Math.round((webinar.participants / webinar.maxParticipants) * 100)}% ocupado
                    </span>
                  </div>
                  
                  {getStatusConfig(webinar.status).button}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-modern p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não perca nenhum webinar!
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Ative as notificações para receber lembretes dos próximos eventos
            </p>
            <Button className="btn-modern bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 text-lg">
              <Bell className="h-5 w-5 mr-2" />
              Ativar Notificações
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarsPage;
