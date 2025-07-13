import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Layout';
import { Apple, Clock, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface Answer {
  questionId: number;
  value: number;
  timeSpent: number;
}

const NutritionTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    "I eat a variety of fruits and vegetables daily.",
    "I am mindful of my portion sizes during meals.",
    "I drink adequate amounts of water throughout the day.",
    "I limit my intake of processed and junk foods.",
    "I eat regular meals and avoid skipping breakfast.",
    "I read nutrition labels when shopping for food.",
    "I feel energized after eating my meals.",
    "I listen to my body's hunger and fullness cues.",
    "I include whole grains in my daily diet.",
    "I limit my consumption of sugary drinks and snacks.",
    "I plan my meals ahead of time.",
    "I eat slowly and mindfully, not while distracted.",
    "I include lean proteins in most of my meals.",
    "I feel satisfied and not overly full after eating.",
    "I limit my intake of fried and fatty foods.",
    "I eat when I'm hungry, not when I'm emotional.",
    "I include healthy fats (like nuts, avocado) in my diet.",
    "I feel good about my relationship with food.",
    "I cook meals at home regularly rather than eating out.",
    "I maintain consistent energy levels throughout the day."
  ];

  const responseOptions = [
    { value: 1, label: "Never" },
    { value: 2, label: "Rarely" },
    { value: 3, label: "Sometimes" },
    { value: 4, label: "Often" },
    { value: 5, label: "Always" }
  ];

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isComplete && selectedAnswer === null) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && selectedAnswer === null) {
      // Auto-advance when time runs out
      handleNextQuestion(3); // Default to neutral if no answer
    }
  }, [timeLeft, isComplete, selectedAnswer]);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(20);
    setSelectedAnswer(null);
  }, [currentQuestion]);

  const handleAnswerSelect = (value: number) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = (answerValue?: number) => {
    const finalAnswer = answerValue || selectedAnswer || 3;
    const timeSpent = 20 - timeLeft;

    // Save answer
    const newAnswer: Answer = {
      questionId: currentQuestion + 1,
      value: finalAnswer,
      timeSpent: timeSpent
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    // Check if this was the last question
    if (currentQuestion === questions.length - 1) {
      setIsComplete(true);
      const testResult = {
        testType: 'nutrition' as const,
        answers: updatedAnswers,
        completedAt: new Date().toISOString()
      };
      console.log('Nutrition Test completed!', testResult);
      // Navigate to results page
      setTimeout(() => {
        navigate('/tests/results', { state: { result: testResult } });
      }, 1500);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Remove the last answer from the array
      setAnswers(answers.slice(0, -1));
    }
  };

  const getTimerColor = () => {
    if (timeLeft > 10) return "text-green-600";
    if (timeLeft > 5) return "text-yellow-600";
    return "text-red-600";
  };

  const getTimerBgColor = () => {
    if (timeLeft > 10) return "bg-green-100";
    if (timeLeft > 5) return "bg-yellow-100";
    return "bg-red-100";
  };

  if (isComplete) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Nutrition Test Completed!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for completing the Nutrition Wellbeing Test. Redirecting to your results...
            </p>
            <button
              onClick={() => navigate('/tests')}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Back to Tests
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-orange-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Apple className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Nutrition Wellbeing Test
          </h1>
          <p className="text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Timer */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center ${getTimerBgColor()} rounded-full px-4 py-2`}>
            <Clock className={`h-5 w-5 ${getTimerColor()} mr-2`} />
            <span className={`font-bold ${getTimerColor()}`}>
              {timeLeft}s remaining
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Question {currentQuestion + 1}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center leading-relaxed">
            {questions[currentQuestion]}
          </h2>

          {/* Response Options */}
          <div className="space-y-3">
            {responseOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswerSelect(option.value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === option.value
                    ? 'border-orange-500 bg-orange-50 text-orange-900'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option.label}</span>
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedAnswer === option.value
                      ? 'border-orange-500 bg-orange-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswer === option.value && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNextQuestion(0)}
              className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Skip Question
            </button>
            
            <div className="text-sm text-gray-500">
              {selectedAnswer ? 'Answer selected' : 'Select an answer or skip'}
            </div>
          </div>

          <button
            onClick={() => handleNextQuestion()}
            disabled={selectedAnswer === null}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedAnswer === null
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-orange-600 text-white hover:bg-orange-700'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Complete Test' : 'Next'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>

        {/* Instructions Reminder */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm text-center">
            <strong>Remember:</strong> Go with your first instinct. There are no right or wrong answers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NutritionTest;
