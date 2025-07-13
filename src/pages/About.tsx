import Layout from '../components/Layout';
import { Brain, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-red-500">Optimism Index</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The world's first scientifically validated tool for measuring optimistic intelligence 
            and its impact on personal and professional success.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Optimism-index is a predictive tool for success. It's a proactive therapeutic tool which helps the individuals to achieve the optimum level of cognitive functioning, performance and enables one to handle any stressful situation with enhanced resilience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            It is a platform for the youth, leaders, entrepreneurs, multinational organizations, mental health practitioners, doctors, sports personnel, home makers and representing senior citizens in their quest for leading a more fulfilling and enriched life by developing incremental doses of optimism within oneself.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            One can't just talk of preventive health care without first improving the mental health of the individual which empowers him for more innovative strides. People high on optimism will have high self worth.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The major objective is to create happier life for people on this planet, build better world where contentment and peace prevails.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Using <strong>OAM (Optimism Attitude Model)</strong> one is able to self manage, self monitor their own life for a holistic living.
          </p>
        </div>

        {/* What We Measure */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Cognitive Optimism</h3>
              </div>
              <p className="text-gray-700 text-sm">
                How you process information, interpret events, and form expectations about the future.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Goal-Oriented Thinking</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Your ability to set realistic goals, maintain motivation, and persist through challenges.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Social Optimism</h3>
              </div>
              <p className="text-gray-700 text-sm">
                How optimism influences your relationships, communication, and social interactions.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Resilience Factors</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Your capacity to bounce back from setbacks and maintain positive outlook during adversity.
              </p>
            </div>
          </div>
        </div>

        {/* Scientific Foundation */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scientific Foundation</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our assessment tools are grounded in decades of psychological research on optimism, 
              positive psychology, and cognitive behavioral science. We draw from the work of 
              leading researchers in the field and continuously validate our instruments through 
              rigorous testing and peer review.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Optimism Index has been validated across diverse populations and cultures, 
              ensuring that our measurements are reliable, accurate, and culturally sensitive. 
              Our ongoing research continues to refine and improve the assessment to provide 
              the most accurate picture of optimistic intelligence.
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Development</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Self-awareness and personal growth</li>
                <li>• Career planning and decision making</li>
                <li>• Relationship improvement</li>
                <li>• Stress management and resilience building</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Organizational Use</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Recruitment and selection</li>
                <li>• Team composition and dynamics</li>
                <li>• Leadership development</li>
                <li>• Workplace wellbeing programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
