import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Heart, Clock, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';



const LeapsTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    "I enjoy being in the company of my friends and family.",
    "I am aware of my strengths.",
    "I quickly adapt to the changing circumstances and environment.",
    "My attitude is my strength towards achieving success in professional life.",
    "I would like to actively participate in activities related to the betterment of society.",
    "There are things that I am passionate about, in life, and like to pursue them.",
    "I like to be up to date with all the latest developments in the field of my interests.",
    "I am able to constantly evolve myself with the passage of time.",
    "I have a strong social network that I can bank upon.",
    "I believe that meditation is a way to attain peace.",
    "I happily accept the life events,
    "I am able to accomplish, even the challenging, tasks assigned to me.",
    "I enjoy working in teams & communicate effectively.",
    "My ambition and thirst for new knowledge pay dividends.",
    "I am concerned about global unrest that may impact the global quality of life.",
    "I can make new friends with ease.",
    "I sometimes get distracted and miss the deadlines.",
    "I believe that health and wellbeing are significant in social development and moral upliftment.",
    "I feel energetic and enthusiastic, most of the time, during performing tasks related to my profession.",
    "I have selfless concerns for the wellbeing of others.",
    "My presence or absence does not matter to my friends.",
    "I can, effortlessly, multitask in order to accomplish my goals.",
    "I believe that social well-being contributes towards global development.",
    "My choice of profession gives me great satisfaction.",
    "I believe that enjoying the beauty of life leads to a more fulfilling life.",
    "My friends often take me for granted.",
    "My devotion and dedication to my responsibilities help me acquire new knowledge.",
    "I am not confident in trying out new technologies.",
    "I am able to have a sense of accomplishment in my work.",
    "The works of great philosophers and thinkers inspire me.",
    "I sometimes feel lonely and empty from within.",
    "I set realistic goals and achieve them.",
    "I get demotivated by obstacles that come in the way of my goals.",
    "I look for significant others' approval for important decisions.",
    "Integrity and honesty are my core strengths.",
    "I feel my attitude helps me make right choices.",
    "The purposefulness of tasks and goals accelerate my passion towards them.",
    "I am not able to adapt to cultural differences with ease.",
    "I am always strong willed in carrying out my responsibilities and doing the right thing.",
    "I am sensitive to the hunger and poverty around me and, participate in social activities to lessen the sufferings.",
    "I get tongue-tied and intimidated in the presence of new company.",
    "I am able to confidently take decisions based on my knowledge and expertise.",
    "I can take tough decisions calmly.",
    "I am rarely satisfied with my accomplishments.",
    "I derive satisfaction in serving the needy.",
    "I can share my thoughts and feelings with people who are part of my life.",
    "I am able to accept criticisms to improve myself.",
    "I believe that every experience in life teaches us something that helps us evolve and grow.",
    "I often get affected by pain and sufferings in life.",
    "I get affected by people's opinion of me.",
    "I am able to adapt to different styles of working in order to accomplish varied tasks.",
    "I like to go with the flow and do not believe in planning.",
    "Prayers give me inner strength to face difficult life's situation.",
    "My close friends and family desire my company.",
    "Failure in accomplishing a task demotivates me.",
    "I am anxious about my prospects.",
    "I am compassionate towards my surroundings.",
    "I believe that my health affects my productivity in life.",
    "I can remain calm in stressful situations to handle them.",
    "I sometimes feel that good deeds are not very rewarding.",
    "I love to develop new skills for future accomplishments."
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
        testType: 'leaps' ,
        answers: updatedAnswers,
        completedAt: new Date().toISOString()
      };
      console.log('LEAPS Test completed!', testResult);
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
              LEAPS Test Completed!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for completing the LEAPS Wellbeing Test. Redirecting to your results...
            </p>
            <button
              onClick={() => navigate('/tests')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
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
          <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Heart className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            LEAPS Wellbeing Test
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
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
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
            <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
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
                    ? 'border-green-500 bg-green-50 text-green-900'
                    : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option.label}</span>
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedAnswer === option.value
                      ? 'border-green-500 bg-green-500'
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
                : 'bg-green-600 text-white hover:bg-green-700'
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

export default LeapsTest;

