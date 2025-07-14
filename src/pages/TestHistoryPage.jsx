import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';


const TestHistoryPage = () => {
  
  const navigate = useNavigate();
  const [testHistory, setTestHistory] = useState([]);

  useEffect(() => {
    // Example sample data — replace this with real data later
    const sampleData = [
      {
        id: '1',
        testName: 'Optimism Index',
        date: '2025-07-10T10:30:00',
        score: 82,
      },
      {
        id: '2',
        testName: 'LEAPS Wellbeing',
        date: '2025-07-01T14:00:00',
        score: 75,
      },
      {
        id: '3',
        testName: 'Nutrition Wellbeing',
        date: '2025-06-28T09:15:00',
        score: 68,
      },
    ];

    setTestHistory(sampleData);
  }, []);

  const handleViewResults = (testId) => {
    navigate(`/results/${testId}`);
  };

  // Helper to get color classes based on test name
  const getColorClasses = (testName) => {
    if (testName === 'Nutrition Wellbeing') {
      return {
        border: 'border-red-500',
        button: 'bg-red-600 hover:bg-red-700',
      };
    } else if (testName === 'LEAPS Wellbeing') {
      return {
        border: 'border-green-500',
        button: 'bg-green-600 hover:bg-green-700',
      };
    } else {
      return {
        border: 'border-blue-500',
        button: 'bg-blue-600 hover:bg-blue-700',
      };
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Test History</h1>

        {testHistory.length > 0 ? (
          <div className="space-y-4">
            {testHistory.map((test) => {
              const { border, button } = getColorClasses(test.testName);
              return (
                <div
                  key={test.id}
                  className={`bg-white shadow-md rounded-lg p-4 border-l-4 ${border}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-700 font-semibold">{test.testName}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(test.date).toLocaleString()}
                      </p>
                      <p className="text-gray-900 font-bold mt-1">
                        Marks Obtained: {test.score} / 100
                      </p>
                    </div>
                    <button
                      onClick={() => handleViewResults(test.id)}
                      className={`px-4 py-2 text-white rounded transition ${button}`}
                    >
                      View Results
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-10">
            No test history found. Take your first test now!
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TestHistoryPage;
