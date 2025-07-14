import Layout from '../components/Layout';
import { Award, BookOpen, Users, GraduationCap } from 'lucide-react';

const Authors = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-red-500">Author</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Eminent Management Professional, Thought Leader, Institution Builder, Leadership Coach, Celebrated Author, and Influencer.
          </p>
        </div>

        {/* Author Profile */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
              <img src="https://iilm.edu.in/uploads/all/720/conversions/Dr-Padmakali-Banerjee-full.webp" alt="Author's Profile Image" className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center"></img>
             {/*<Users className="h-16 w-16 text-gray-400" />*/}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Prof(Dr) Padmakali Banerjee
              </h2>
              <p className="text-lg text-red-600 font-medium mb-4">
                Fellow of Somatic Inkblot Society (FSIS–US) | Lead Researcher & Author
              </p>
              <p className="text-gray-700 leading-relaxed">
                Padmakali Banerjee is an Eminent Management Professional, a thought leader, an Institution Builder, 
                a Leadership Coach, a Celebrated Author, and an influencer. She is the Fellow of the prestigious 
                Somatic Inkblot Society (FSIS–US). Her current research interests include Leadership Studies, 
                Optimism and Wellbeing, Psychometric Assessment, Entrepreneurship and Sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Education</h3>
            </div>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>Ph.D.</strong> from the University of Delhi</li>
              <li>• <strong>M.Phil</strong> from Department of Psychology, University of Delhi</li>
              <li>• <strong>Specialization</strong> in Organizational Behavior (Psychology)</li>
              <li>• <strong>PGD</strong> in Human Resource Management</li>
              <li>• <strong>UGC-NET</strong> qualified (National Eligibility for Teaching)</li>
              <li>• Several Research papers in national/international refereed journals</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Awards & Recognition</h3>
            </div>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>Award of Excellence</strong> from InSPA (Indian School Psychology Association) for contribution in psychology</li>
              <li>• <strong>2018 Greenbuild Leadership Award</strong> from US GBC for contribution towards sustainability</li>
              <li>• <strong>PEROMA©</strong> Research model developed and registered</li>
              <li>• Fellow of prestigious <strong>Somatic Inkblot Society (FSIS–US)</strong></li>
            </ul>
          </div>
        </div>

        {/* Research & Publications */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Research & Publications</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Prof(Dr) Banerjee has <strong>26 years of experience</strong> in Research, Teaching and Training and Academic Administration. 
              She is a Member of the editorial board of the SIS Journal of projective psychology and mental health. 
              She developed the psychometric test <strong>'Optimism Index'</strong>, a tool to measure optimism quotient, 
              extensively used by the corporate sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Authored Books</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Project One</li>
                  <li>• Project Two</li>
                  <li>• Project Three</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Research Areas</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Leadership Studies</li>
                  <li>• Optimism and Wellbeing</li>
                  <li>• Psychometric Assessment</li>
                  <li>• Entrepreneurship and Sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900">Research, Teaching & Academic Administration</h4>
              <p className="text-red-600 font-medium">26 Years of Experience</p>
              <p className="text-gray-700 text-sm mt-2">
                Extensive experience in research, teaching, training, and academic administration with 
                focus on psychological assessment and optimism research.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900">Editorial Board Member</h4>
              <p className="text-blue-600 font-medium">SIS Journal of Projective Psychology and Mental Health</p>
              <p className="text-gray-700 text-sm mt-2">
                Contributing to the advancement of psychological research through editorial oversight 
                and peer review of research publications.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900">Optimism Index Developer</h4>
              <p className="text-green-600 font-medium">Psychometric Test Creator</p>
              <p className="text-gray-700 text-sm mt-2">
                Developed the 'Optimism Index', a psychometric tool to measure optimism quotient, 
                extensively used by corporate organizations for assessment and development.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900">PEROMA© Model</h4>
              <p className="text-purple-600 font-medium">Trademark Registration</p>
              <p className="text-gray-700 text-sm mt-2">
                Developed and trademarked the PEROMA© research model for imparting counseling, 
                education and training to organizations and general public to improve life and abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Authors;

