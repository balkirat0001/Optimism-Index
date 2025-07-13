import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Download, BarChart3 } from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TestHistoryPage = () => {
  const [allResults, setAllResults] = useState([]);
  const [expandedIndexes, setExpandedIndexes] = useState({});
  const [chartToggles, setChartToggles] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const userResultsKey = `testResults_${currentUser.id}`;
    const storedResults = JSON.parse(localStorage.getItem(userResultsKey)) || [];
    const sortedResults = storedResults.sort(
      (a, b) => new Date(b.completedAt) - new Date(a.completedAt)
    );
    setAllResults(sortedResults);
  }, [navigate]);

  const groupedResults = allResults.reduce((acc, result) => {
    if (!acc[result.testType]) acc[result.testType] = [];
    acc[result.testType].push(result);
    return acc;
  }, {});

  const getTestTitle = (type) => {
    switch (type) {
      case 'optimism': return 'Optimism Index';
      case 'leaps': return 'LEAPS Wellbeing';
      case 'nutrition': return 'Nutrition Wellbeing';
      default: return 'Test';
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'optimism': return 'border-red-500';
      case 'leaps': return 'border-green-500';
      case 'nutrition': return 'border-orange-500';
      default: return 'border-gray-300';
    }
  };

  const toggleExpand = (testType, idx) => {
    setExpandedIndexes((prev) => ({
      ...prev,
      [`${testType}-${idx}`]: !prev[`${testType}-${idx}`],
    }));
  };

  const toggleChart = (testType, idx) => {
    setChartToggles((prev) => ({
      ...prev,
      [`${testType}-${idx}`]: !prev[`${testType}-${idx}`],
    }));
  };

  const downloadPDF = async (result, idx) => {
    const elementId = `result-${result.testType}-${idx}`;
    const element = document.getElementById(elementId);
    if (element) {
      const canvas = await html2canvas(element);
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save(`${result.testType}_result_${new Date(result.completedAt).toLocaleDateString()}.pdf`);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Test History</h1>

        {Object.entries(groupedResults).map(([testType, results]) => (
          <div key={testType} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{getTestTitle(testType)}</h2>

            {results.map((result, idx) => {
              const isExpanded = expandedIndexes[`${testType}-${idx}`];
              const isChartVisible = chartToggles[`${testType}-${idx}`];

              return (
                <div
                  key={idx}
                  id={`result-${result.testType}-${idx}`}
                  className={`border-l-4 ${getColor(testType)} bg-white shadow rounded-lg mb-4 transition-all duration-300`}
                >
                  <div className="flex justify-between items-center p-4">
                    <div>
                      <p className="font-medium text-gray-700">
                        {new Date(result.completedAt).toLocaleString()}
                      </p>
                      <p className="text-gray-900 font-bold">
                        Score: {result.compositeScore || result.totalScore}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Level: {result.optimismLevel || result.wellbeingLevel || result.nutritionLevel}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="p-2 text-gray-600 hover:text-gray-900"
                        onClick={() => toggleExpand(testType, idx)}
                      >
                        {isExpanded ? <ChevronUp /> : <ChevronDown />}
                      </button>
                      <button
                        className="p-2 text-blue-600 hover:text-blue-800"
                        onClick={() => downloadPDF(result, idx)}
                      >
                        <Download />
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-4 border-t bg-gray-50 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Detailed Breakdown</h4>
                        {result.components &&
                          Object.entries(result.components).map(([key, comp]) => (
                            <div key={key}>
                              <p className="font-medium text-gray-800">{comp.name}</p>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-500 h-2 rounded-full"
                                  style={{ width: `${Math.round(comp.score)}%` }}
                                ></div>
                              </div>
                              <p className="text-sm text-gray-500">
                                {Math.round(comp.score)} / 100
                              </p>
                            </div>
                          ))}
                      </div>

                      {/* Toggle Button for Chart */}
                      <button
                        onClick={() => toggleChart(testType, idx)}
                        className="flex items-center gap-2 text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
                      >
                        <BarChart3 size={16} />
                        {isChartVisible ? 'Hide Chart' : 'Show Chart'}
                      </button>

                      {/* Radar Chart */}
                      {isChartVisible && (
                        <div className="mt-2">
                          <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={Object.entries(result.components).map(([key, comp]) => ({
                              subject: comp.name,
                              score: comp.score
                            }))}>
                              <PolarGrid />
                              <PolarAngleAxis dataKey="subject" />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} />
                              <Radar name="Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                              <Tooltip />
                            </RadarChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {allResults.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No test results yet. Start your journey now.</p>
            <button
              onClick={() => navigate('/tests')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Take a Test
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TestHistoryPage;
