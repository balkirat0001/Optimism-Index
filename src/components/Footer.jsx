import { Link } from 'react-router-dom';
import { Sparkles, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-full p-2 animate-pulse-gentle">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text-rainbow">
                Optimism Index
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Measuring global optimism through comprehensive data analysis and real-time sentiment monitoring. 
              Empowering individuals to discover their true potential.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center hover:scale-110 hover:animate-wiggle transition-all duration-300 cursor-pointer floating-element">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 hover:animate-wiggle transition-all duration-300 cursor-pointer floating-element">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 hover:animate-wiggle transition-all duration-300 cursor-pointer floating-element">
                <span className="text-white font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="mr-2">🚀</span> Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tests" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive">
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="mr-2">📚</span> Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/methodology" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive">
                  API
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="mr-2">🏢</span> Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive group">
                  <Mail className="inline w-4 h-4 mr-1 group-hover:animate-wiggle" />
                  Contact
                </Link>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block btn-interactive">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 animate-fadeInUp">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 flex items-center">
              <Heart className="w-4 h-4 mr-2 text-red-400 animate-pulse-gentle" />
              <p>© 2025 Optimism Index. All rights reserved. Made with love for a better world.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors btn-interactive">Terms</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors btn-interactive">Privacy</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors btn-interactive">Cookies</a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">Global Platform</span>
              </div>
            </div>
          </div>
          
          {/* Additional Interactive Elements */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer floating-element">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse-gentle" />
              <span>Start Your Optimism Journey</span>
              <Phone className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

