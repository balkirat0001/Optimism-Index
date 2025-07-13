import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Brain, Heart, Apple, ArrowLeft, Download, Share } from 'lucide-react';
import { useEffect, useState } from 'react';

const TestResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [scores, setScores] = useState(null);

  useEffect(() => {
    if (location.state?.result) {
      const testResult = location.state.result;
      setResult(testResult);
      calculateScores(testResult);
    } else {
      // If no result data, redirect to tests page
      navigate('/tests');
    }
  }, [location, navigate]);

  const calculateScores = (testResult) => {
    const { answers, testType } = testResult;
    
    if (testType === 'optimism') {
      calculateOptimismScores(answers);
    } else if (testType === 'leaps') {
      calculateLeapsScores(answers);
    } else if (testType === 'nutrition') {
      calculateNutritionScores(answers);
    }
  };

  const calculateOptimismScores = (answers) => {
    // Calculate Optimism Index scores based on 5 components
    const components = {
      PE: { name: 'Positive Emotions', questions: [1, 6, 16, 25, 27, 29, 40, 41, 42], score: 0 },
      EG: { name: 'Engagement', questions: [2, 5, 9, 12, 14, 20, 22, 24, 34, 35, 49], score: 0 },
      RS: { name: 'Relationship Network', questions: [8, 13, 17, 18, 32, 37, 38, 43, 47, 48, 52, 53], score: 0 },
      MF: { name: 'Meaningfulness', questions: [4, 10, 11, 19, 31, 44, 50, 54, 59, 60], score: 0 },
      AC: { name: 'Accomplishment', questions: [15, 21, 23, 26, 28, 30, 33, 36, 39, 45, 46, 51, 55, 56, 57, 58], score: 0 }
    };

    // Calculate scores for each component
    Object.keys(components).forEach(key => {
      const comp = components[key];
      let totalScore = 0;
      let answeredQuestions = 0;

      comp.questions.forEach(qNum => {
        const answer = answers.find(a => a.questionId === qNum);
        if (answer && answer.value !== 0) { // Skip questions marked
          // Reverse scoring for negative questions (3, 7, 11, 13, 18, 21, 30, 32, 38, 39, 51, 52, 53, 54, 56, 57, 58)
          const negativeQuestions = [3, 7, 11, 13, 18, 21, 30, 32, 38, 39, 51, 52, 53, 54, 56, 57, 58];
          const score = negativeQuestions.includes(qNum) ? (6 - answer.value) : answer.value;
          totalScore += score;
          answeredQuestions++;
        }
      });

      comp.score = answeredQuestions > 0 ? (totalScore / answeredQuestions) * 20 : 0; // Scale to 100
    });

    // Calculate composite score
    const compositeScore = Math.round(
      (components.PE.score + components.EG.score + components.RS.score + 
       components.MF.score + components.AC.score) / 5
    );

    // Determine optimism level (1-7 scale)
    const optimismLevel = Math.ceil(compositeScore / 14.3); // 100/7 ≈ 14.3

    const colorMap = {
      1: { color: 'Red', description: 'Very Low Optimism' },
      2: { color: 'Orange', description: 'Low Optimism' },
      3: { color: 'Yellow', description: 'Below Average Optimism' },
      4: { color: 'Light Green', description: 'Average Optimism' },
      5: { color: 'Green', description: 'Above Average Optimism' },
      6: { color: 'Blue', description: 'High Optimism' },
      7: { color: 'Purple', description: 'Very High Optimism' }
    };

    setScores({
      type: 'optimism',
      compositeScore,
      optimismLevel,
      colorInfo: colorMap[optimismLevel],
      components,
      totalAnswered: answers.filter(a => a.value !== 0).length,
      totalQuestions: answers.length
    });
  };

  const calculateLeapsScores = (answers) => {
    // LEAPS scoring based on 5 components with specific question mappings
    const components = {
      LOVE: { 
        name: 'Love', 
        description: 'Love denotes passion in life and emotionally gratifying relationships.',
        questions: [1, 9, 16, 21, 26, 31, 41, 46, 50, 54], 
        score: 0,
        answeredCount: 0,
        maxPossibleScore: 0,
        color: 'bg-blue-600'
      },
      EXPERTISE: { 
        name: 'Expertise', 
        description: 'Expertise is competencies, capabilities and proficiency towards excellence. It is related to "what you excel in".',
        questions: [2, 7, 12, 14, 17, 22, 27, 42, 47, 61], 
        score: 0,
        answeredCount: 0,
        maxPossibleScore: 0,
        color: 'bg-red-600'
      },
      ADAPTABILITY: { 
        name: 'Adaptability', 
        description: 'Adaptability is related to flexibility and capability to adapt with environment and life circumstances.',
        questions: [3, 8, 28, 33, 38, 43, 48, 51, 52, 59], 
        score: 0,
        answeredCount: 0,
        maxPossibleScore: 0,
        color: 'bg-yellow-600'
      },
      PROFESSION: { 
        name: 'Profession', 
        description: 'Profession is excellence in career which enables earning a living and livelihood.',
        questions: [4, 19, 24, 29, 32, 36, 39, 44, 55, 58], 
        score: 0,
        answeredCount: 0,
        maxPossibleScore: 0,
        color: 'bg-green-600'
      },
      SPIRITUALITY: { 
        name: 'Spirituality', 
        description: 'Spirituality means purposeful and worthy living. It is leading a good life, value based life and contributing to the society and community at large.',
        questions: [5, 10, 11, 15, 18, 20, 23, 25, 30, 34, 35, 37, 40, 45, 49, 53, 56, 57, 60], 
        score: 0,
        answeredCount: 0,
        maxPossibleScore: 0,
        color: 'bg-purple-600'
      }
    };

    // Check minimum answer requirement (at least 50% of questions should be answered)
    const totalQuestions = answers.length;
    const answeredQuestions = answers.filter(a => a.value !== 0).length;
    const answerRate = answeredQuestions / totalQuestions;

    // If less than 50% questions are answered, show insufficient data message
    if (answerRate < 0.5) {
      setScores({
        type: 'leaps',
        compositeScore: 0,
        components,
        wellbeingLevel: 'Insufficient Data',
        totalAnswered: answeredQuestions,
        totalQuestions: totalQuestions,
        answerRate: Math.round(answerRate * 100),
        insufficientData: true,
        message: `You need to answer at least ${Math.ceil(totalQuestions * 0.5)} questions (50%) to get meaningful results. You answered ${answeredQuestions} out of ${totalQuestions} questions.`
      });
      return;
    }

    // Calculate scores for each component
    Object.keys(components).forEach(key => {
      const comp = components[key];
      let totalScore = 0;
      let answeredInComponent = 0;
      const negativeQuestions = [17, 21, 26, 28, 31, 33, 34, 38, 41, 44, 49, 50, 52, 55, 56, 60];

      comp.questions.forEach(qNum => {
        const answer = answers.find(a => a.questionId === qNum);
        if (answer && answer.value !== 0) {
          // Handle reverse scoring for negative questions
          const score = negativeQuestions.includes(qNum) ? (6 - answer.value) : answer.value;
          totalScore += score;
          answeredInComponent++;
        }
      });

      comp.answeredCount = answeredInComponent;
      comp.maxPossibleScore = comp.questions.length * 5; // Max score possible for this component

      // For skipped questions in this component, use a neutral score (3) to maintain balance
      const skippedInComponent = comp.questions.length - answeredInComponent;
      const neutralScoreForSkipped = skippedInComponent * 3;
      
      // Component score = actual answers + neutral score for skipped questions
      comp.score = totalScore + neutralScoreForSkipped;
    });

    // Calculate composite score (sum of all component scores)
    const compositeScore = Object.values(components).reduce((sum, comp) => sum + comp.score, 0);

    // Calculate percentage of max possible score for better assessment
    const maxPossibleComposite = 61 * 5; // 61 questions × 5 max score each
    const percentageScore = (compositeScore / maxPossibleComposite) * 100;

    // Determine wellbeing level based on percentage score and answer rate
    let wellbeingLevel = 'Low';
    let levelDescription = '';

    if (answerRate >= 0.8) { // If 80%+ questions answered, use standard scale
      if (percentageScore >= 80) {
        wellbeingLevel = 'Excellent';
        levelDescription = 'Outstanding wellbeing across all dimensions';
      } else if (percentageScore >= 65) {
        wellbeingLevel = 'Good';
        levelDescription = 'Strong wellbeing with room for growth';
      } else if (percentageScore >= 50) {
        wellbeingLevel = 'Fair';
        levelDescription = 'Moderate wellbeing with areas for improvement';
      } else {
        wellbeingLevel = 'Needs Attention';
        levelDescription = 'Several areas requiring focus and development';
      }
    } else { // If 50-79% questions answered, adjust scale and add note
      if (percentageScore >= 75) {
        wellbeingLevel = 'Good*';
        levelDescription = 'Appears positive, but more complete data needed';
      } else if (percentageScore >= 60) {
        wellbeingLevel = 'Fair*';
        levelDescription = 'Mixed results, consider retaking with more answers';
      } else {
        wellbeingLevel = 'Limited Assessment*';
        levelDescription = 'Insufficient data for reliable assessment';
      }
    }

    setScores({
      type: 'leaps',
      compositeScore: Math.round(compositeScore),
      components,
      wellbeingLevel,
      levelDescription,
      totalAnswered: answeredQuestions,
      totalQuestions: totalQuestions,
      answerRate: Math.round(answerRate * 100),
      percentageScore: Math.round(percentageScore),
      insufficientData: false,
      partialData: answerRate < 0.8
    });
  };

  const calculateNutritionScores = (answers) => {
    // Nutrition scoring
    const totalScore = answers.reduce((sum, answer) => {
      return sum + (answer.value === 0 ? 0 : answer.value);
    }, 0);
    
    const answeredQuestions = answers.filter(a => a.value !== 0).length;
    const averageScore = answeredQuestions > 0 ? totalScore / answeredQuestions : 0;
    const percentageScore = (averageScore / 5) * 100;

    let nutritionLevel = 'Needs Improvement';
    if (percentageScore >= 80) nutritionLevel = 'Excellent';
    else if (percentageScore >= 60) nutritionLevel = 'Good';
    else if (percentageScore >= 40) nutritionLevel = 'Fair';

    setScores({
      type: 'nutrition',
      totalScore: Math.round(percentageScore),
      averageScore: averageScore.toFixed(1),
      nutritionLevel,
      totalAnswered: answeredQuestions,
      totalQuestions: answers.length
    });
  };

  const getTestIcon = (type) => {
    switch (type) {
      case 'optimism': return <Brain className="h-8 w-8" />;
      case 'leaps': return <Heart className="h-8 w-8" />;
      case 'nutrition': return <Apple className="h-8 w-8" />;
      default: return <Brain className="h-8 w-8" />;
    }
  };

  const getTestTitle = (type) => {
    switch (type) {
      case 'optimism': return 'Optimism Index Test';
      case 'leaps': return 'LEAPS Wellbeing Test';
      case 'nutrition': return 'Nutrition Wellbeing Test';
      default: return 'Test';
    }
  };

  if (!result || !scores) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Loading Results...</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`${
            result.testType === 'optimism' ? 'bg-red-100 text-red-600' :
            result.testType === 'leaps' ? 'bg-green-100 text-green-600' :
            'bg-orange-100 text-orange-600'
          } rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
            {getTestIcon(result.testType)}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getTestTitle(result.testType)} Results
          </h1>
          <p className="text-lg text-gray-600">
            Completed on {new Date(result.completedAt).toLocaleDateString()}
          </p>
        </div>

        {/* Results Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Insufficient Data Warning */}
          {scores.type === 'leaps' && scores.insufficientData && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Insufficient Data for Reliable Results</h3>
                  <p className="text-yellow-700 mb-4">{scores.message}</p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Completion Rate:</span>
                      <span className="text-sm font-bold text-yellow-600">{scores.answerRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: `${scores.answerRate}%`}}></div>
                    </div>
                  </div>
                  <p className="text-sm text-yellow-600 mt-4">
                    <strong>Recommendation:</strong> Please retake the test and answer more questions for accurate assessment.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Partial Data Warning */}
          {scores.type === 'leaps' && scores.partialData && !scores.insufficientData && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-blue-800">
                  <strong>Note:</strong> Results based on {scores.answerRate}% completion. For more accurate assessment, consider answering more questions.
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${
                result.testType === 'optimism' ? 'text-red-600' :
                result.testType === 'leaps' ? (scores.insufficientData ? 'text-gray-400' : 'text-green-600') :
                'text-orange-600'
              }`}>
                {scores.type === 'optimism' ? scores.compositeScore : 
                 scores.type === 'leaps' ? (scores.insufficientData ? '--' : scores.compositeScore) : scores.totalScore}
              </div>
              <p className="text-gray-600">
                {scores.type === 'optimism' ? 'Composite Score' : 
                 scores.type === 'leaps' ? 'Composite Score' : 'Overall Score'}
              </p>
            </div>
            
            <div className="text-center">
              <div className={`text-2xl font-semibold mb-2 ${scores.insufficientData ? 'text-gray-400' : 'text-gray-900'}`}>
                {scores.type === 'optimism' ? `Level ${scores.optimismLevel}` :
                 scores.type === 'leaps' ? scores.wellbeingLevel :
                 scores.nutritionLevel}
              </div>
              <p className="text-gray-600">
                {scores.type === 'optimism' ? scores.colorInfo?.description :
                 scores.type === 'leaps' ? (scores.levelDescription || 'Wellbeing Level') :
                 'Nutrition Level'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2 text-gray-900">
                {scores.totalAnswered}/{scores.totalQuestions}
              </div>
              <p className="text-gray-600">Questions Answered</p>
              {scores.type === 'leaps' && scores.answerRate && (
                <p className={`text-sm mt-1 ${
                  scores.answerRate >= 80 ? 'text-green-600' : 
                  scores.answerRate >= 50 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {scores.answerRate}% Complete
                </p>
              )}
            </div>
          </div>

          {/* Optimism Index Specific Results */}
          {scores.type === 'optimism' && (
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Component Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(scores.components).map(([$1, $2]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{component.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-600">
                        {Math.round(component.score)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {component.questions.length} questions
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-red-600 h-2 rounded-full"
                        style={{ width: `${component.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LEAPS Specific Results */}
          {scores.type === 'leaps' && !scores.insufficientData && (
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">LEAPS Component Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(scores.components).map(([$1, $2]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{component.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-bold ${component.color.replace('bg-', 'text-')}`}>
                        {component.score}
                      </span>
                      <span className="text-sm text-gray-500">
                        {component.questions.length} questions
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span>Answered: {component.answeredCount}/{component.questions.length}</span>
                      <span>{Math.round((component.answeredCount / component.questions.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className={component.color + ' h-2 rounded-full'}
                        style={{ width: `${Math.min((component.score / component.maxPossibleScore) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Info for Partial Data */}
              {scores.partialData && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Scoring Method</h4>
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> For skipped questions, a neutral score (3 out of 5) was applied to provide balanced results. 
                    This helps maintain proportional scoring while indicating areas where more specific answers would improve accuracy.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* LEAPS Insufficient Data Message */}
          {scores.type === 'leaps' && scores.insufficientData && (
            <div className="border-t pt-8">
              <div className="text-center py-12">
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Component Analysis Unavailable</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Complete at least 50% of the questions to see your detailed component breakdown and personalized insights.
                </p>
                <button
                  onClick={() => navigate('/tests/leaps/instructions')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Retake Test
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Explanations */}
        {scores.type === 'optimism' && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Understanding Your Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 bg-blue-100 px-3 py-2 rounded mb-3">
                    Positive Emotions
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Positive emotions refer to an individual's predisposition to look at life situations and outcomes 
                    optimistically and with a positive affect. These include joy, passion, alertness and happiness.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 bg-blue-100 px-3 py-2 rounded mb-3">
                    Engagement
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Engagement refers to the extent of an individual's physical, cognitive and emotional involvement 
                    in work and pursuit in general. It is characterized by vigor, dedication and absorption.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 bg-blue-100 px-3 py-2 rounded mb-3">
                    Relationship Network
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Relationship network refers to the extent an individual benefits and synergises from his circle 
                    of associates, family and friends. A good relationship network is an added strength for success.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 bg-blue-100 px-3 py-2 rounded mb-3">
                    Meaningfulness
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Meaningfulness refers to a sense of purpose in life tasks giving the individual a feeling of 
                    contributing to larger goals. It is a sense of intrinsic motivation serving
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 bg-blue-100 px-3 py-2 rounded mb-3">
                  Accomplishment
                </h4>
                <p className="text-gray-700 text-sm">
                  Accomplishment refers to successfully achieving the planned objectives and goals. It is a driving 
                  force which makes the individual strive for bigger goals, raising the bar each time and reinforcing 
                  for taking on more challenges.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* LEAPS Detailed Explanations */}
        {scores.type === 'leaps' && !scores.insufficientData && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Understanding Your LEAPS Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 bg-blue-100 px-3 py-2 rounded mb-3">
                    Love
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Love denotes passion in life and emotionally gratifying relationships. It encompasses the ability 
                    to form meaningful connections and experience joy in interpersonal relationships.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 bg-red-100 px-3 py-2 rounded mb-3">
                    Expertise
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Expertise is competencies, capabilities and proficiency towards excellence. It is related to 
                    "what you excel in" and represents your mastery and skill development in various areas of life.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 bg-yellow-100 px-3 py-2 rounded mb-3">
                    Adaptability
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Adaptability is related to flexibility and capability to adapt with environment and life circumstances. 
                    It reflects your resilience and ability to thrive in changing situations.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 bg-green-100 px-3 py-2 rounded mb-3">
                    Profession
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Profession is excellence in career which enables earning a living and livelihood. It represents 
                    your professional satisfaction, achievement, and career development.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 bg-purple-100 px-3 py-2 rounded mb-3">
                    Spirituality
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Spirituality means purposeful and worthy living. It is leading a good life, value based life 
                    and contributing to the society and community at large. It encompasses meaning, purpose, and values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/tests')}
            className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tests
          </button>
          
          <button
            onClick={() => window.print()}
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white transition-colors ${
              result.testType === 'optimism' ? 'bg-red-600 hover:bg-red-700' :
              result.testType === 'leaps' ? 'bg-green-600 hover:bg-green-700' :
              'bg-orange-600 hover:bg-orange-700'
            }`}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Results
          </button>
          
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `${getTestTitle(result.testType)} Results`,
                  text: `I completed the ${getTestTitle(result.testType)} and got a score of ${scores.type === 'optimism' ? scores.compositeScore : scores.totalScore}!`,
                  url: window.location.href
                });
              }
            }}
            className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Share className="h-4 w-4 mr-2" />
            Share Results
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TestResults;

