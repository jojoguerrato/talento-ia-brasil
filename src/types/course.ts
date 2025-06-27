
export interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  videoUrl?: string;
  materials: Material[];
  quiz?: Quiz;
  forum: ForumTopic[];
  activities: Activity[];
  progress: ModuleProgress;
}

export interface Material {
  id: number;
  title: string;
  type: 'pdf' | 'document' | 'link' | 'video';
  url: string;
  description?: string;
}

export interface Quiz {
  id: number;
  questions: Question[];
  passingScore: number;
  isCompleted: boolean;
  score?: number;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface ForumTopic {
  id: number;
  title: string;
  author: string;
  date: string;
  replies: number;
  lastActivity: string;
  isParticipated: boolean;
}

export interface Activity {
  id: number;
  title: string;
  type: 'hands-on' | 'case-study' | 'reflection';
  description: string;
  instructions: string[];
  isCompleted: boolean;
}

export interface ModuleProgress {
  videoWatched: boolean;
  materialsDownloaded: number;
  quizCompleted: boolean;
  forumParticipated: boolean;
  activitiesCompleted: number;
  certificateGenerated: boolean;
}

export interface UserProgress {
  completedModules: number[];
  currentModule: number;
  quizScores: { [moduleId: number]: number };
  certificateEarned: boolean;
  totalProgress: number;
  moduleProgress: { [moduleId: number]: ModuleProgress };
}
