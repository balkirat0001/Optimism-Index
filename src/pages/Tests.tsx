import { Link } from 'react-router-dom';
import { Brain, Heart, Utensils, ArrowRight, CheckCircle, Clock, Users, Award, Sparkles } from 'lucide-react';
import Layout from '../components/Layout';

const Tests = () => {
  const tests = [
    {
      id: 1,
      title: "Optimism Index Test",
      description: "Measure your optimistic intelligence and positive outlook on life. This comprehensive assessment evaluates your resilience, future expectations, and ability to find opportunities in challenges.",
      icon: Brain,
      duration: "20-25 minutes",
      questions: "59 questions",
      color: "red",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      buttonColor: "bg-red-500 hover:bg-red-600",
      borderColor: "border-red-200",
      link: "/tests/optimism/instructions"
    },
    {
      id: 2,
      title: "LEAPS Wellbeing Test",
      description: "Evaluate your overall wellbeing across multiple dimensions including Life satisfaction, Emotional balance, Achievement, Purpose, and Social connections.",
      icon: Heart,
      duration: "25-30 minutes",
      questions: "61 questions",
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      borderColor: "border-blue-200",
      link: "/tests/leaps/instructions"
    },
    {
      id: 3,
      title: "Nutrition Wellbeing Test",
      description: "Assess your nutritional awareness, eating habits, and relationship with food. Get insights into your nutritional wellbeing and personalized recommendations.",
      icon: Utensils,
      duration: "8-12 minutes",
      questions: "20 questions",
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      buttonColor: "bg-green-500 hover:bg-green-600",
      borderColor: "border-green-200",
      link: "/tests/nutrition/instructions"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-4 animate-pulse-gentle">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Choose Your</span>
            <br />
            <span className="text-gray-900">Assessment Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover your potential with our scientifically validated assessments. 
            Each test provides personalized insights to help you understand and improve your wellbeing.
          </p>
        </div>
      </div>

      {/* Tests Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => {
            const IconComponent = test.icon;
            const gradients = [
              'from-red-500 to-pink-600',
              'from-emerald-500 to-green-600', 
              'from-orange-500 to-amber-600'
            ];
            return (
              <div
                key={test.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 card-hover animate-fadeInUp"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-center mb-8">
                  <div className={`bg-gradient-to-br ${gradients[index]} rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {test.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {test.description}
                  </p>
                </div>

                {/* Test Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      <span className="text-gray-700 font-medium">{test.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-gray-500" />
                      <span className="text-gray-700 font-medium">{test.questions}</span>
                    </div>
                  </div>
                </div>

                {/* Take Test Button */}
                <Link
                  to={test.link}
                  className={`w-full bg-gradient-to-r ${gradients[index]} text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg hover:scale-105 text-lg`}
                >
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Why Choose</span>
              <br />
              <span className="text-gray-900">Our Assessments?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our assessments are backed by scientific research and designed to provide actionable insights for personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scientifically Validated</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                All our assessments are based on peer-reviewed research and validated psychological instruments.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Results</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Receive detailed, personalized reports with actionable recommendations for improvement.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Quality</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Trusted by professionals and individuals worldwide for accurate and reliable assessments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tests;
