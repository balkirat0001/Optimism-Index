import Layout from '../components/Layout';
import { Beaker, BarChart3, Users, Target, Brain, CheckCircle } from 'lucide-react';

const Methodology = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-500">Methodology</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive, scientifically rigorous approach to measuring optimistic intelligence.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Foundation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Optimism Index methodology is built upon decades of research in positive psychology, 
            cognitive science, and psychometric theory. Our approach integrates multiple theoretical 
            frameworks to provide a comprehensive assessment of optimistic intelligence across 
            various dimensions of human experience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We employ validated psychological instruments, statistical analysis, and cross-cultural 
            validation to ensure our assessments are reliable, valid, and applicable across diverse populations.
          </p>
        </div>

        {/* Assessment Dimensions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Assessment Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Cognitive Optimism</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Future expectation patterns</li>
                <li>• Attribution styles</li>
                <li>• Problem-solving orientation</li>
                <li>• Cognitive flexibility</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Behavioral Optimism</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Goal-setting behaviors</li>
                <li>• Persistence patterns</li>
                <li>• Risk-taking propensity</li>
                <li>• Action orientation</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Social Optimism</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Interpersonal trust</li>
                <li>• Social support seeking</li>
                <li>• Communication patterns</li>
                <li>• Collaborative tendencies</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Emotional Optimism</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Emotional regulation</li>
                <li>• Resilience factors</li>
                <li>• Stress responses</li>
                <li>• Mood patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Process */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Beaker className="h-8 w-8 text-indigo-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Research Process</h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-indigo-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Literature Review & Theory Development</h4>
                <p className="text-gray-700 text-sm">
                  Comprehensive analysis of existing research on optimism, positive psychology, 
                  and related constructs to establish theoretical foundations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-indigo-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Item Development & Expert Review</h4>
                <p className="text-gray-700 text-sm">
                  Creation of assessment items based on theoretical framework, followed by 
                  expert review and refinement by leading researchers in the field.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-indigo-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pilot Testing & Validation</h4>
                <p className="text-gray-700 text-sm">
                  Extensive pilot testing with diverse populations to assess reliability, 
                  validity, and cultural appropriateness of the assessment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-indigo-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Statistical Analysis & Refinement</h4>
                <p className="text-gray-700 text-sm">
                  Advanced statistical techniques including factor analysis, item response theory, 
                  and differential item functioning to optimize assessment quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Validation Studies */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Validation Studies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Reliability Metrics</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Internal consistency (Cronbach's α &gt; 0.85)</li>
                <li>• Test-retest reliability (r &gt; 0.80)</li>
                <li>• Inter-rater reliability (ICC &gt; 0.90)</li>
                <li>• Split-half reliability (r &gt; 0.82)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Validity Evidence</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Content validity (Expert panel review)</li>
                <li>• Construct validity (Factor analysis)</li>
                <li>• Criterion validity (External correlations)</li>
                <li>• Convergent & discriminant validity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our commitment to quality extends beyond initial development. We continuously 
              monitor assessment performance, gather user feedback, and conduct ongoing research 
              to ensure our tools remain accurate, relevant, and effective.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="bg-indigo-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Cross-Cultural Validation</h4>
              </div>
              <div className="text-center p-4">
                <div className="bg-indigo-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Continuous Monitoring</h4>
              </div>
              <div className="text-center p-4">
                <div className="bg-indigo-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Regular Updates</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Methodology;

