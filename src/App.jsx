import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Authors from './pages/Authors';
import Methodology from './pages/Methodology';
import Tests from './pages/Tests';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OptimismInstructions from './pages/tests/optimism/OptimismInstructions';
import LeapsInstructions from './pages/tests/leaps/LeapsInstructions';
import NutritionInstructions from './pages/tests/nutrition/NutritionInstructions';
import OptimismTest from './pages/tests/optimism/OptimismTest';
import LeapsTest from './pages/tests/leaps/LeapsTest';
import NutritionTest from './pages/tests/nutrition/NutritionTest';
import TestResults from './pages/TestResults';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/tests" element={
              <ProtectedRoute>
                <Tests />
              </ProtectedRoute>
            } />
            <Route path="/tests/optimism/instructions" element={
              <ProtectedRoute>
                <OptimismInstructions />
              </ProtectedRoute>
            } />
            <Route path="/tests/leaps/instructions" element={
              <ProtectedRoute>
                <LeapsInstructions />
              </ProtectedRoute>
            } />
            <Route path="/tests/nutrition/instructions" element={
              <ProtectedRoute>
                <NutritionInstructions />
              </ProtectedRoute>
            } />
            <Route path="/tests/optimism/questions" element={
              <ProtectedRoute>
                <OptimismTest />
              </ProtectedRoute>
            } />
            <Route path="/tests/leaps/questions" element={
              <ProtectedRoute>
                <LeapsTest />
              </ProtectedRoute>
            } />
            <Route path="/tests/nutrition/questions" element={
              <ProtectedRoute>
                <NutritionTest />
              </ProtectedRoute>
            } />
            <Route path="/tests/results" element={
              <ProtectedRoute>
                <TestResults />
              </ProtectedRoute>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

