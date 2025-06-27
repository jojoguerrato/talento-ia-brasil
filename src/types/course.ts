
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
}

export interface UserProgress {
  completedModules: number[];
  currentModule: number;
  quizScores: { [moduleId: number]: number };
  certificateEarned: boolean;
  totalProgress: number;
}
