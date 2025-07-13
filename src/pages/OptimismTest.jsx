import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Brain, Clock, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';



const OptimismTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    "I am confident of myself.",
    "I am able to concentrate well while accomplishing a challenging task.",
    "I feel uncomfortable while interacting with people.",
    "I believe that every task assigned to me in life is important.",
    "I like to excel in whatever I do.",
    "I am happy that I possess a set of good qualities.",
    "I lose patience while pursuing my goals.",
    "I am confident of the quality of my relationships with others.",
    "For me time bound completion of task is essential.",
    "I firmly believe that man is the creator of his own destiny.",
    "I believe that I have no role in shaping my destiny.",
    "I keep devising ways to increase my competency and efficiency.",
    "I find difficulty in nurturing relationships.",
    "I aim to be the best in my pursuits.",
    "Success is enhanced by ones attitude in life.",
    "I remain content in all kinds of situations.",
    "I encourage group activities.",
    "I feel that I am not respected and valued by my peers.",
    "I focus on the future while determining my goals.",
    "I am able to work persistently towards achieving a goal.",
    "I am rarely able to solve my problems objectively.",
    "I enjoy taking on new challenges.",
    "I try to meet the goals efficiently, which I set for myself.",
    "I enjoy challenges, variety and change while accomplishing goals.",
    "I always look at the positive side of outcomes.",
    "Achievement is the driving force in my life.",
    "I always contribute to the happiness and well being of others.",
    "I enjoy doing the tasks at hand.",
    "I am competent and capable of performing the tasks entrusted to me.",
    "I am not able to be positive in difficult situations.",
    "I see my life, change and growth.",
    "I am not so active in keeping in touch with family and friends.",
    "I am able to do a task well when I am able to connect with it.",
    "I am diligent and persistent while performing a task.",
    "I am in control of my behavior and feelings.",
    "I get a sense of fulfillment and relaxation when I am able to complete a task efficiently.",
    "My social relations are supportive and rewarding.",
    "I tend to be a bit chaotic and disorganized in my approach towards task completion.",
    "I rarely achieve what I want to, despite utilizing my strengths.",
    "I feel alive and vital.",
    "I feel productive and energetic.",
    "My peers see me,
    "My life has a clear sense of purpose.",
    "I have been able to achieve the goals that I set for myself.",
    "I am resilient in my approach.",
    "I am able to get the most out of every situation.",
    "I believe in quality of relationships.",
    "I am always very focussed in my approach.",
    "I am able to serve people and society through my work.",
    "My grit and determination are my strength.",
    "I give up in tough situations.",
    "My positive relations rarely contribute to my growth.",
    "I think that my work hardly contributes in making a difference in the lives of the people.",
    "The positive feedback that I get about my work motivates me to aspire still higher.",
    "I get distracted while working for long hours, to achieve my goal.",
    "I rarely seek information even when confronted with a new situation.",
    "I find it difficult to connect with people at various levels through my work.",
    "My work does not always give me a sense of worth.",
    "I have made much difference in the lives of many people through my work."
  ];

  const responseOptions = [
    { value: 1, label: "Strongly Disagree" },
    { value: 2, label: "Disagree" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Agree" },
    { value: 5, label: "Strongly Agree" }
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

  const handleAnswerSelect = (value) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = (answerValue) => {
    const finalAnswer = answerValue || selectedAnswer || 3;
    const timeSpent = 20 - timeLeft;

    // Save answer
    const newAnswer = {
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
        testType: 'optimism' ,
        answers: updatedAnswers,
        completedAt: new Date().toISOString()
      };
      console.log('Optimism Test completed!', testResult);
      // Navigate to results page
      setTimeout(() => {
        navigate('/tests/results', { state: { result } });
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
              Optimism Test Completed!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for completing the Optimism Index Test. Redirecting to your results...
            </p>
            <button
              onClick={() => navigate('/tests')}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
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
          <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Brain className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Optimism Index Test
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
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
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
            <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
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
                    ? 'border-red-500 bg-red-50 text-red-900'
                    : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option.label}</span>
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedAnswer === option.value
                      ? 'border-red-500 bg-red-500'
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
                : 'bg-red-600 text-white hover:bg-red-700'
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

export default OptimismTest;

