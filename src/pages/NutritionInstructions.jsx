import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Apple, Clock, AlertCircle, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const NutritionInstructions = () => {
  const navigate = useNavigate();
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleStartTest = () => {
    if (agreementChecked) {
      // Navigate to actual test page (to be created)
      navigate('/tests/nutrition/questions');
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Apple className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Nutrition Wellbeing Test
          </h1>
          <p className="text-lg text-gray-600">
            Evaluate your nutritional habits and their impact on your wellbeing
          </p>
        </div>

        {/* Test Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
            <p className="text-gray-600">8-12 minutes</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Questions</h3>
            <p className="text-gray-600">20 questions</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <AlertCircle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Time per Question</h3>
            <p className="text-gray-600">20 seconds each</p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
            INSTRUCTIONS
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 font-medium">
              Please read carefully before you begin
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-orange-600 font-bold text-sm">1</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  It is best to take this test when you are <strong>relaxed and comfortable</strong>. 
                  Like someone who has just returned from a restful holiday.
                  indicate this is not a test with right or wrong answers. It is about confirming 
                  what you feel most of the time. <strong>There is no perfect profile.</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-orange-600 font-bold text-sm">2</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  For each question you will be getting exactly <strong>20 seconds to answer</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-orange-600 font-bold text-sm">3</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  To increase the accuracy of your results:
                </p>
                <div className="ml-4 space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-600 font-bold text-sm">3.1</span>
                    <p className="text-gray-700">
                      Keep in mind that there are <strong>no right or wrong answers</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-600 font-bold text-sm">3.2</span>
                    <p className="text-gray-700">
                      Go with your <strong>first instinct</strong>—don't spend too much time on any one question
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-600 font-bold text-sm">3.3</span>
                    <p className="text-gray-700">
                      Remember that these questions measure what you feel <strong>most of the time</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Specific Info */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
            <Apple className="h-5 w-5 mr-2" />
            About Nutrition Wellbeing Assessment
          </h3>
          <p className="text-orange-800 mb-4">
            This assessment evaluates various aspects of your nutritional habits and their relationship with your overall wellbeing:
          </p>
          <ul className="space-y-2 text-orange-800">
            <li className="flex items-start space-x-2">
              <span className="text-orange-600">•</span>
              <span><strong>Eating Patterns:</strong> Your regular meal timing and frequency</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-orange-600">•</span>
              <span><strong>Food Choices:</strong> Quality and variety of foods in your diet</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-orange-600">•</span>
              <span><strong>Hydration Habits:</strong> Water intake and beverage choices</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-orange-600">•</span>
              <span><strong>Mindful Eating:</strong> Awareness and intention around food consumption</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-orange-600">•</span>
              <span><strong>Energy Levels:</strong> How nutrition affects your daily vitality</span>
            </li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            Important Notes
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">•</span>
              <span>This assessment contains <strong>20 questions</strong> in total</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">•</span>
              <span>Each question has a <strong>20-second timer</strong></span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">•</span>
              <span>You cannot go back to previous questions</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">•</span>
              <span>This is not medical advice - consult professionals for health concerns</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">•</span>
              <span>Complete the test in one sitting for best results</span>
            </li>
          </ul>
        </div>

        {/* Agreement and Start Button */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start space-x-3 mb-6">
            <input
              type="checkbox"
              id="agreement"
              checked={agreementChecked}
              onChange={(e) => setAgreementChecked(e.target.checked)}
              className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1"
            />
            <label htmlFor="agreement" className="text-gray-700 leading-relaxed">
              I understand the instructions and agree to complete this assessment honestly. 
              I am in a relaxed state and ready to begin the Nutrition Wellbeing Test.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/tests"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tests
            </Link>
            
            <button
              onClick={handleStartTest}
              disabled={!agreementChecked}
              className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                agreementChecked
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start Nutrition Test
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NutritionInstructions;

