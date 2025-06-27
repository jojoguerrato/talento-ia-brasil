
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Video, Play, Bell } from 'lucide-react';

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
      description: "Explore as principais tendências de IA aplicadas ao recrutamento e seleção, com cases reais e demonstrações práticas.",
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
      description: "Sessão hands-on para construir modelos preditivos que identifiquem os melhores candidatos para sua empresa.",
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
      description: "Discussão com especialistas sobre como a IA está transformando o departamento de Recursos Humanos.",
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge className="bg-blue-100 text-blue-800">Próximo</Badge>;
      case 'live':
        return <Badge className="bg-red-100 text-red-800 animate-pulse">Ao Vivo</Badge>;
      case 'completed':
        return <Badge className="bg-gray-100 text-gray-800">Finalizado</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <Video className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Webinars ao Vivo</h1>
            <p className="text-blue-100 text-lg">Participe de sessões exclusivas com especialistas em IA para RH</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Próximo Webinar</span>
            </div>
            <p className="text-sm mt-1">15 Jul, 14:00</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span className="font-semibold">Participantes</span>
            </div>
            <p className="text-sm mt-1">85+ inscritos</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span className="font-semibold">Gravações</span>
            </div>
            <p className="text-sm mt-1">Disponíveis 24h após</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-4">
        {[
          { key: 'all', label: 'Todos' },
          { key: 'upcoming', label: 'Próximos' },
          { key: 'completed', label: 'Finalizados' }
        ].map(filter => (
          <Button
            key={filter.key}
            variant={selectedFilter === filter.key ? "default" : "outline"}
            onClick={() => setSelectedFilter(filter.key)}
            className="flex-1 md:flex-none"
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Webinars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredWebinars.map(webinar => (
          <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={webinar.image} 
                alt={webinar.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                {getStatusBadge(webinar.status)}
              </div>
              {webinar.status === 'live' && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-red-600 text-white px-2 py-1 rounded text-xs">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>AO VIVO</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {webinar.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{webinar.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{webinar.instructor}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(webinar.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{webinar.duration}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {webinar.participants}/{webinar.maxParticipants} participantes
                </div>
                
                <div className="flex space-x-2">
                  {webinar.status === 'upcoming' && (
                    <>
                      <Button variant="outline" size="sm">
                        <Bell className="h-4 w-4 mr-1" />
                        Lembrete
                      </Button>
                      <Button size="sm">
                        Participar
                      </Button>
                    </>
                  )}
                  {webinar.status === 'live' && (
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      <Play className="h-4 w-4 mr-1" />
                      Entrar Agora
                    </Button>
                  )}
                  {webinar.status === 'completed' && (
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Ver Gravação
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WebinarsPage;
