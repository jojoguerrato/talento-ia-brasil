
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { Quiz, Question } from '../types/course';

interface QuizManagerProps {
  quiz: Quiz;
  onCompleteQuiz: (score: number) => void;
}

const QuizManager: React.FC<QuizManagerProps> = ({ quiz, onCompleteQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / quiz.questions.length) * 100);
    setScore(finalScore);
    setShowResults(true);
    
    if (finalScore >= quiz.passingScore) {
      onCompleteQuiz(finalScore);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  if (quiz.isCompleted) {
    return (
      <Card className="p-8 text-center">
        <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">Quiz Concluído!</h3>
        <p className="text-gray-600 mb-4">
          Sua pontuação: {quiz.score}% (Mínimo: {quiz.passingScore}%)
        </p>
        <Button onClick={resetQuiz} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Refazer Quiz
        </Button>
      </Card>
    );
  }

  if (!quizStarted) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Quiz do Módulo</h3>
        <p className="text-gray-600 mb-6">
          {quiz.questions.length} perguntas • Pontuação mínima: {quiz.passingScore}%
        </p>
        <Button onClick={handleStartQuiz} className="w-full max-w-xs">
          Iniciar Quiz
        </Button>
      </Card>
    );
  }

  if (showResults) {
    const passed = score >= quiz.passingScore;
    return (
      <Card className="p-8">
        <div className="text-center mb-6">
          {passed ? (
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          ) : (
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          )}
          <h3 className={`text-xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-red-600'}`}>
            {passed ? 'Parabéns! Você passou!' : 'Tente novamente'}
          </h3>
          <p className="text-gray-600">
            Sua pontuação: {score}% (Mínimo: {quiz.passingScore}%)
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {quiz.questions.map((question, index) => {
            const selectedAnswer = selectedAnswers[question.id];
            const isCorrect = selectedAnswer === question.correctAnswer;
            
            return (
              <div key={question.id} className="border rounded-lg p-4">
                <div className="flex items-start space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  )}
                  <h4 className="font-medium">Pergunta {index + 1}: {question.question}</h4>
                </div>
                
                <p className="text-sm text-gray-600 ml-7">
                  Sua resposta: {question.options[selectedAnswer]}
                </p>
                
                {!isCorrect && (
                  <p className="text-sm text-green-600 ml-7">
                    Resposta correta: {question.options[question.correctAnswer]}
                  </p>
                )}
                
                {question.explanation && (
                  <p className="text-sm text-blue-600 ml-7 mt-2">
                    {question.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex space-x-4">
          <Button onClick={resetQuiz} variant="outline" className="flex-1">
            Tentar Novamente
          </Button>
          {passed && (
            <Button className="flex-1" disabled>
              Quiz Aprovado
            </Button>
          )}
        </div>
      </Card>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <Card className="p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">
            Pergunta {currentQuestion + 1} de {quiz.questions.length}
          </span>
          <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <h3 className="text-lg font-semibold mb-6">{question.question}</h3>

      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(question.id, index)}
            className={`w-full p-4 text-left border rounded-lg transition-colors ${
              selectedAnswers[question.id] === index
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedAnswers[question.id] === index
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300'
              }`}>
                {selectedAnswers[question.id] === index && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      <Button
        onClick={handleNextQuestion}
        disabled={selectedAnswers[question.id] === undefined}
        className="w-full"
      >
        {currentQuestion < quiz.questions.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
      </Button>
    </Card>
  );
};

export default QuizManager;
