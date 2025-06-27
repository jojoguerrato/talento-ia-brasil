
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, FileText, Users, Lightbulb } from 'lucide-react';
import { Activity } from '../types/course';

interface ActivityManagerProps {
  activities: Activity[];
  onCompleteActivity: (activityId: number) => void;
}

const ActivityManager: React.FC<ActivityManagerProps> = ({ activities, onCompleteActivity }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'case-study':
        return <FileText className="h-5 w-5" />;
      case 'hands-on':
        return <Users className="h-5 w-5" />;
      case 'reflection':
        return <Lightbulb className="h-5 w-5" />;
      default:
        return <Circle className="h-5 w-5" />;
    }
  };

  const getActivityTypeLabel = (type: string) => {
    switch (type) {
      case 'case-study':
        return 'Estudo de Caso';
      case 'hands-on':
        return 'Hands-On';
      case 'reflection':
        return 'Reflexão';
      default:
        return 'Atividade';
    }
  };

  const getActivityTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'case-study':
        return 'bg-blue-100 text-blue-800';
      case 'hands-on':
        return 'bg-green-100 text-green-800';
      case 'reflection':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <Card key={activity.id} className="p-6">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${
              activity.isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
            }`}>
              {activity.isCompleted ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                getActivityIcon(activity.type)
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h4 className="text-lg font-semibold text-gray-900">{activity.title}</h4>
                <Badge className={getActivityTypeBadgeColor(activity.type)}>
                  {getActivityTypeLabel(activity.type)}
                </Badge>
                {activity.isCompleted && (
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Concluída
                  </Badge>
                )}
              </div>

              <p className="text-gray-600 mb-4">{activity.description}</p>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 className="font-medium text-gray-900 mb-2">Instruções:</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                  {activity.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {activity.isCompleted ? 'Atividade concluída' : 'Pendente'}
                </div>
                <Button
                  onClick={() => onCompleteActivity(activity.id)}
                  disabled={activity.isCompleted}
                  variant={activity.isCompleted ? "outline" : "default"}
                >
                  {activity.isCompleted ? 'Concluída' : 'Marcar como Concluída'}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}

      {activities.length === 0 && (
        <Card className="p-8 text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Nenhuma atividade disponível para este módulo.</p>
        </Card>
      )}
    </div>
  );
};

export default ActivityManager;
