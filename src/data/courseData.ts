
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
      }
    ],
    quiz: {
      id: 1,
      passingScore: 70,
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
        }
      ]
    },
    forum: [
      {
        id: 1,
        title: "Experiências com IA no recrutamento",
        author: "João Silva",
        date: "2024-06-25",
        replies: 15,
        lastActivity: "há 2 horas"
      }
    ]
  },
  {
    id: 2,
    title: "Entendendo a Inteligência Artificial Aplicada ao RH",
    description: "Fundamentos técnicos e aplicações práticas da IA em recursos humanos",
    duration: "1h 45min",
    isCompleted: false,
    isLocked: true,
    materials: [],
    forum: []
  },
  {
    id: 3,
    title: "Coletando os Dados Certos para a IA",
    description: "Como identificar, coletar e preparar dados para alimentar sistemas de IA",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: true,
    materials: [],
    forum: []
  },
  {
    id: 4,
    title: "Revelando o Invisível com IA – Análise Preditiva",
    description: "Utilizando IA para prever comportamentos e resultados no recrutamento",
    duration: "2h",
    isCompleted: false,
    isLocked: true,
    materials: [],
    forum: []
  },
  {
    id: 5,
    title: "IA como Espelho e Lupa – Candidato, Empresa e Cultura",
    description: "Análise profunda de fit cultural usando inteligência artificial",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: true,
    materials: [],
    forum: []
  },
  {
    id: 6,
    title: "Construindo Processos de R&S com IA na Prática",
    description: "Implementação prática de processos de recrutamento com IA",
    duration: "2h",
    isCompleted: false,
    isLocked: true,
    materials: [],
    forum: []
  },
  {
    id: 7,
    title: "Casos Reais, Sucesso e Desafios",
    description: "Estudos de caso reais de implementação de IA no recrutamento",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: true,
    materials: [],
    forum: []
  },
  {
    id: 8,
    title: "O Futuro do Recrutamento é Agora – Estratégia e Preparação",
    description: "Preparando-se para o futuro do recrutamento com IA",
    duration: "1h 30min",
    isCompleted: false,
    isLocked: true,
    materials: [],
    forum: []
  }
];
