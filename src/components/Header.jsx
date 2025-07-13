import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-full p-2 group-hover:animate-spin-slow transition-all duration-300">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text-rainbow hover:animate-wiggle transition-all duration-300">
                Optimism Index
              </span>
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-red-50 relative group btn-interactive"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/authors" 
              className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-red-50 relative group btn-interactive"
            >
              Authors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/tests" 
              className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-red-50 relative group btn-interactive"
            >
              Tests
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/methodology" 
              className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-red-50 relative group btn-interactive"
            >
              Methodology
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-red-50 relative group btn-interactive"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-red-50 relative group btn-interactive"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-red-500 focus:outline-none focus:text-red-500 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Login/User Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 glass-morphism rounded-full px-4 py-2 animate-scaleIn">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-1 animate-pulse-gentle">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{user?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-interactive"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-pink-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-interactive floating-element"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-morphism rounded-lg mb-4 animate-slideInLeft">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/authors"
                className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Authors
              </Link>
              <Link
                to="/tests"
                className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tests
              </Link>
              <Link
                to="/methodology"
                className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Methodology
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Login/User Section */}
              <div className="border-t border-gray-200 pt-4">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 px-3 py-2">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-1">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{user?.name}</span>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full text-left bg-gradient-to-r from-gray-500 to-gray-600 text-white px-3 py-2 rounded-md hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-medium"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="bg-gradient-to-r from-red-500 to-pink-600 text-white block w-full text-center px-3 py-2 rounded-md hover:from-red-600 hover:to-pink-700 transition-all duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

