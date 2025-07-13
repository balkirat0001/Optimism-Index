import { Link } from 'react-router-dom';
import { PlayCircle, Brain, Target, Heart, TrendingUp, Users, Award, MessageSquare, Lock, Sparkles, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout>
      {/* Hero Section with Enhanced Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-white/60"></div>
        
        {/* Interactive cursor follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-10 w-14 h-14 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-25 animate-float" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Welcome Section */}
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-4 animate-pulse-gentle shadow-2xl floating-element">
                <Brain className="h-12 w-12 text-white animate-glow" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideInLeft">
              <span className="gradient-text-rainbow">Discover Your</span>
              <br />
              <span className="text-gray-900 animate-slideInRight">Optimism Quotient</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Unlock your potential to face any situation in life and discover how you can bounce back stronger than ever.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-scaleIn" style={{animationDelay: '0.4s'}}>
              Take your <span className="font-semibold text-indigo-600 gradient-text">OI (Optimism Index)</span> test to discover the real you.
            </p>
            
            {/* Robin Williams Quote */}
            <div className="glass-morphism rounded-2xl p-8 mb-12 max-w-4xl mx-auto card-hover animate-bounceIn" style={{animationDelay: '0.6s'}}>
              <div className="flex justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-500 animate-spin-slow" />
              </div>
              <blockquote className="text-2xl text-gray-700 italic mb-6 font-medium">
                "You're only given one little spark of madness. You mustn't lose it."
              </blockquote>
              <cite className="text-gray-600 font-semibold text-lg">- Robin Williams</cite>
            </div>

            {/* CTA Button */}
            {isAuthenticated ? (
              <div className="animate-scaleIn" style={{animationDelay: '0.8s'}}>
                <Link 
                  to="/tests" 
                  className="inline-flex items-center px-10 py-5 text-xl font-semibold rounded-2xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-2 hover:scale-105 btn-interactive floating-element"
                >
                  <PlayCircle className="h-7 w-7 mr-3 animate-pulse-gentle" />
                  START YOUR JOURNEY
                  <Sparkles className="h-6 w-6 ml-3 animate-wiggle" />
                </Link>
              </div>
            ) : (
              <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                <div className="glass-morphism border-l-4 border-yellow-500 rounded-xl p-6 mb-6 max-w-md mx-auto card-hover">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-6 w-6 text-yellow-600 animate-wiggle" />
                    <p className="text-yellow-800 font-semibold">Login Required</p>
                  </div>
                  <p className="text-yellow-700 mt-2">
                    Please login to access your personalized assessment journey.
                  </p>
                </div>
                <Link 
                  to="/login" 
                  className="inline-flex items-center px-10 py-5 text-xl font-semibold rounded-2xl text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-2 hover:scale-105 btn-interactive floating-element"
                >
                  <Lock className="h-7 w-7 mr-3 animate-pulse-gentle" />
                  LOGIN TO BEGIN
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text-rainbow">Unlock Your Potential</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the power of optimism and its impact on every aspect of your life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group card-hover bg-white rounded-2xl p-8 shadow-lg animate-slideInLeft floating-element" style={{animationDelay: '0.1s'}}>
              <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:animate-wiggle transition-all duration-300">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">Mental Resilience</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Discover your ability to bounce back from setbacks and maintain a positive mindset through life's challenges.
              </p>
            </div>

            <div className="text-center group card-hover bg-white rounded-2xl p-8 shadow-lg animate-slideInLeft floating-element" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:animate-wiggle transition-all duration-300">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">Goal Achievement</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Learn how your optimistic outlook impacts your ability to reach ambitious goals and create lasting success.
              </p>
            </div>

            <div className="text-center group card-hover bg-white rounded-2xl p-8 shadow-lg animate-slideInRight floating-element" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:animate-wiggle transition-all duration-300">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">Emotional Wellbeing</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Understand the deep connection between optimism and overall emotional health and life satisfaction.
              </p>
            </div>

            <div className="text-center group card-hover bg-white rounded-2xl p-8 shadow-lg animate-slideInRight floating-element" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:animate-wiggle transition-all duration-300">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">Personal Growth</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Get personalized insights and actionable strategies to develop a more optimistic and resilient perspective.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl animate-pulse-gentle"></div>
            <div className="relative glass-morphism rounded-3xl p-12 animate-scaleIn" style={{animationDelay: '0.5s'}}>
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-6 animate-bounceIn" style={{animationDelay: '0.6s'}}>
                  <span className="gradient-text-rainbow">Why Choose Our</span>
                  <br />
                  <span className="text-gray-900">Optimism Index?</span>
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.7s'}}>
                  Experience the most comprehensive and scientifically-backed optimism assessment available
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center group card-hover animate-slideInLeft floating-element" style={{animationDelay: '0.8s'}}>
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:animate-spin-slow transition-all duration-300 shadow-xl">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">Scientifically Validated</h4>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Our assessment is based on peer-reviewed research and proven psychological principles used by professionals worldwide.
                  </p>
                </div>

                <div className="text-center group card-hover animate-scaleIn floating-element" style={{animationDelay: '0.9s'}}>
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:animate-wiggle transition-all duration-300 shadow-xl">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">Professional Quality</h4>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Trusted by therapists, coaches, and organizations for accurate, reliable results you can count on.
                  </p>
                </div>

                <div className="text-center group card-hover animate-slideInRight floating-element" style={{animationDelay: '1.0s'}}>
                  <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:animate-pulse-gentle transition-all duration-300 shadow-xl">
                    <MessageSquare className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">Personalized Insights</h4>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Receive detailed reports with actionable recommendations tailored specifically to your unique profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="glass-morphism rounded-3xl p-12 card-hover animate-bounceIn" style={{animationDelay: '1.1s'}}>
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 animate-glow">
                <Star className="h-8 w-8 text-white animate-spin-slow" />
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-8 font-medium leading-relaxed text-shimmer">
              "The first psychometric tool designed to measure optimistic intelligence is viewed as a 
              combination of different abilities that mental tests could measure. With the help of the 
              Optimistic Index Tool, industries can benefit by selecting the right resources."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full animate-pulse-gentle"></div>
          </div>
        </div>
    </Layout>
  );
};

export default Home;
