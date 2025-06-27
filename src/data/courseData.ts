
import { Module } from '../types/course';

export const courseModules: Module[] = [
  {
    id: 1,
    title: "Novo Olhar Sobre o Recrutamento na Era da IA",
    description: "Entenda como a IA está revolucionando os processos de recrutamento e seleção",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: false,
    videoUrl: "https://example.com/video1",
    materials: [
      {
        id: 1,
        title: "Slides - Introdução à IA no RH",
        type: 'pdf',
        url: "/materials/modulo1-slides.pdf",
        description: "Apresentação completa do módulo"
      },
      {
        id: 2,
        title: "Artigo IBM Watson Talent",
        type: 'link',
        url: "https://www.ibm.com/watson/talent",
        description: "Como a IBM utiliza IA para recrutamento"
      },
      {
        id: 3,
        title: "Whitepaper - Tendências de IA em RH 2024",
        type: 'pdf',
        url: "/materials/whitepaper-tendencias-ia-rh.pdf",
        description: "Relatório completo sobre tendências do mercado"
      }
    ],
    quiz: {
      id: 1,
      passingScore: 70,
      isCompleted: false,
      questions: [
        {
          id: 1,
          question: "Qual é o principal benefício da IA no recrutamento?",
          options: [
            "Redução de custos apenas",
            "Automatização completa do processo",
            "Análise mais precisa e eliminação de vieses",
            "Substituição total dos recrutadores"
          ],
          correctAnswer: 2,
          explanation: "A IA ajuda a tomar decisões mais precisas e reduzir vieses inconscientes"
        },
        {
          id: 2,
          question: "Quais são os principais desafios da implementação de IA no RH?",
          options: [
            "Custo e complexidade técnica",
            "Resistência dos funcionários e questões éticas",
            "Falta de dados de qualidade",
            "Todas as alternativas anteriores"
          ],
          correctAnswer: 3,
          explanation: "A implementação de IA envolve múltiplos desafios que devem ser considerados"
        }
      ]
    },
    activities: [
      {
        id: 1,
        title: "Análise de Caso: Transformação Digital no RH",
        type: 'case-study',
        description: "Analise como uma empresa fictícia implementou IA em seus processos de recrutamento",
        instructions: [
          "Leia o caso da empresa TechCorp fornecido nos materiais",
          "Identifique os principais desafios enfrentados",
          "Liste as soluções de IA implementadas",
          "Avalie os resultados obtidos",
          "Responda às perguntas orientadoras no fórum"
        ],
        isCompleted: false
      },
      {
        id: 2,
        title: "Reflexão: Impactos da IA na sua Empresa",
        type: 'reflection',
        description: "Reflita sobre como a IA poderia impactar os processos de RH na sua organização",
        instructions: [
          "Descreva os processos atuais de recrutamento da sua empresa",
          "Identifique 3 oportunidades de aplicação de IA",
          "Liste possíveis resistências ou desafios",
          "Compartilhe suas reflexões no fórum do módulo"
        ],
        isCompleted: false
      }
    ],
    forum: [
      {
        id: 1,
        title: "Experiências com IA no recrutamento",
        author: "João Silva",
        date: "2024-06-25",
        replies: 15,
        lastActivity: "há 2 horas",
        isParticipated: false
      },
      {
        id: 2,
        title: "Discussão: Caso TechCorp",
        author: "Prof. Ana Costa",
        date: "2024-06-26",
        replies: 8,
        lastActivity: "há 1 hora",
        isParticipated: false
      }
    ],
    progress: {
      videoWatched: false,
      materialsDownloaded: 0,
      quizCompleted: false,
      forumParticipated: false,
      activitiesCompleted: 0,
      certificateGenerated: false
    }
  },
  {
    id: 2,
    title: "Entendendo a Inteligência Artificial Aplicada ao RH",
    description: "Fundamentos técnicos e aplicações práticas da IA em recursos humanos",
    duration: "1h 45min",
    isCompleted: false,
    isLocked: true,
    videoUrl: "https://example.com/video2",
    materials: [
      {
        id: 4,
        title: "Slides - Fundamentos de IA",
        type: 'pdf',
        url: "/materials/modulo2-slides.pdf",
        description: "Conceitos técnicos essenciais"
      },
      {
        id: 5,
        title: "Artigo - Machine Learning para RH",
        type: 'link',
        url: "https://hbr.org/machine-learning-hr",
        description: "Harvard Business Review sobre ML em RH"
      },
      {
        id: 6,
        title: "Template - Checklist de Implementação",
        type: 'document',
        url: "/materials/checklist-implementacao.docx",
        description: "Guia prático para implementação"
      }
    ],
    quiz: {
      id: 2,
      passingScore: 70,
      isCompleted: false,
      questions: [
        {
          id: 3,
          question: "O que é Machine Learning no contexto de RH?",
          options: [
            "Um software de gestão de pessoas",
            "Técnica para ensinar máquinas a aprender com dados",
            "Sistema de videoconferência",
            "Plataforma de recrutamento"
          ],
          correctAnswer: 1,
          explanation: "Machine Learning permite que sistemas aprendam e melhorem automaticamente"
        }
      ]
    },
    activities: [
      {
        id: 3,
        title: "Hands-On: Identificando Padrões em Currículos",
        type: 'hands-on',
        description: "Pratique a identificação de padrões usando uma ferramenta de IA simulada",
        instructions: [
          "Acesse a ferramenta de simulação fornecida",
          "Carregue os 50 currículos de exemplo",
          "Configure os critérios de análise",
          "Execute a análise e interprete os resultados",
          "Documente suas descobertas"
        ],
        isCompleted: false
      }
    ],
    forum: [
      {
        id: 3,
        title: "Dúvidas sobre algoritmos de IA",
        author: "Maria Santos",
        date: "2024-06-26",
        replies: 12,
        lastActivity: "há 3 horas",
        isParticipated: false
      }
    ],
    progress: {
      videoWatched: false,
      materialsDownloaded: 0,
      quizCompleted: false,
      forumParticipated: false,
      activitiesCompleted: 0,
      certificateGenerated: false
    }
  },
  {
    id: 3,
    title: "Coletando os Dados Certos para a IA",
    description: "Como identificar, coletar e preparar dados para alimentar sistemas de IA",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: true,
    materials: [
      {
        id: 7,
        title: "Slides - Gestão de Dados para IA",
        type: 'pdf',
        url: "/materials/modulo3-slides.pdf",
        description: "Estratégias de coleta e preparação"
      },
      {
        id: 8,
        title: "Checklist LGPD para RH",
        type: 'document',
        url: "/materials/lgpd-checklist.pdf",
        description: "Conformidade com proteção de dados"
      }
    ],
    quiz: {
      id: 3,
      passingScore: 70,
      isCompleted: false,
      questions: []
    },
    activities: [
      {
        id: 4,
        title: "Projeto: Mapeamento de Dados da Empresa",
        type: 'hands-on',
        description: "Mapeie os dados disponíveis na sua empresa para projetos de IA",
        instructions: [
          "Liste todas as fontes de dados de RH disponíveis",
          "Classifique os dados por tipo e qualidade",
          "Identifique lacunas e oportunidades",
          "Crie um plano de coleta de dados",
          "Apresente seu mapeamento no fórum"
        ],
        isCompleted: false
      }
    ],
    forum: [],
    progress: {
      videoWatched: false,
      materialsDownloaded: 0,
      quizCompleted: false,
      forumParticipated: false,
      activitiesCompleted: 0,
      certificateGenerated: false
    }
  },
  {
    id: 4,
    title: "Revelando o Invisível com IA – Análise Preditiva",
    description: "Utilizando IA para prever comportamentos e resultados no recrutamento",
    duration: "2h",
    isCompleted: false,
    isLocked: true,
    materials: [
      {
        id: 9,
        title: "Slides - Análise Preditiva em RH",
        type: 'pdf',
        url: "/materials/modulo4-slides.pdf",
        description: "Técnicas e aplicações práticas"
      }
    ],
    quiz: {
      id: 4,
      passingScore: 70,
      isCompleted: false,
      questions: []
    },
    activities: [
      {
        id: 5,
        title: "Simulação: Predição de Turnover",
        type: 'hands-on',
        description: "Use dados simulados para prever rotatividade de funcionários",
        instructions: [
          "Analise o dataset fornecido",
          "Identifique variáveis preditivas",
          "Execute o modelo de predição",
          "Interprete os resultados",
          "Proponha ações preventivas"
        ],
        isCompleted: false
      }
    ],
    forum: [],
    progress: {
      videoWatched: false,
      materialsDownloaded: 0,
      quizCompleted: false,
      forumParticipated: false,
      activitiesCompleted: 0,
      certificateGenerated: false
    }
  },
  {
    id: 5,
    title: "IA como Espelho e Lupa – Candidato, Empresa e Cultura",
    description: "Análise profunda de fit cultural usando inteligência artificial",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: true,
    materials: [],
    quiz: {
      id: 5,
      passingScore: 70,
      isCompleted: false,
      questions: []
    },
    activities: [],
    forum: [],
    progress: {
      videoWatched: false,
      materialsDownloaded: 0,
      quizCompleted: false,
      forumParticipated: false,
      activitiesCompleted: 0,
      certificateGenerated: false
    }
  },
  {
    id: 6,
    title: "Construindo Processos de R&S com IA na Prática",
    description: "Implementação prática de processos de recrutamento com IA",
    duration: "2h",
    isCompleted: false,
    isLocked: true,
    materials: [],
    quiz: {
      id: 6,
      passingScore: 70,
      isCompleted: false,
      questions: []
    },
    activities: [],
    forum: [],
    progress: {
      videoWatched: false,
      materialsDownloaded: 0,
      quizCompleted: false,
      forumParticipated: false,
      activitiesCompleted: 0,
      certificateGenerated: false
    }
  },
  {
    id: 7,
    title: "Casos Reais, Sucesso e Desafios",
    description: "Estudos de caso reais de implementação de IA no recrutamento",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: true,
    materials: [],
    quiz: {
      id: 7,
      passingScore: 70,
      isCompleted: false,
      questions: []
    },
    activities: [],
    forum: [],
    progress: {
      videoWatched: false,
      materialsDownloaded: 0,
      quizCompleted: false,
      forumParticipated: false,
      activitiesCompleted: 0,
      certificateGenerated: false
    }
  },
  {
    id: 8,
    title: "O Futuro do Recrutamento é Agora – Estratégia e Preparação",
    description: "Preparando-se para o futuro do recrutamento com IA",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: true,
    materials: [],
    quiz: {
      id: 8,
      passingScore: 70,
      isCompleted: false,
      questions: []
    },
    activities: [],
    forum: [],
    progress: {
      videoWatched: false,
      materialsDownloaded: 0,
      quizCompleted: false,
      forumParticipated: false,
      activitiesCompleted: 0,
      certificateGenerated: false
    }
  }
];
