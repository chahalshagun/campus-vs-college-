import React from 'react';

const ComparisonSection = ({ selectedColleges, setSelectedColleges }) => {
  const comparisonData = [
    {
      feature: "College Name",
      iitBombay: "IIT Bombay",
      iimAhmedabad: "IIM Ahmedabad",
      aiimsDelhi: "AIIMS Delhi"
    },
    {
      feature: "Location",
      iitBombay: "Mumbai, Maharashtra",
      iimAhmedabad: "Ahmedabad, Gujarat",
      aiimsDelhi: "New Delhi"
    },
    {
      feature: "Established",
      iitBombay: "1958",
      iimAhmedabad: "1961",
      aiimsDelhi: "1956"
    },
    {
      feature: "NIRF Ranking 2024",
      iitBombay: "3",
      iimAhmedabad: "1",
      aiimsDelhi: "1"
    },
    {
      feature: "Annual Fees",
      iitBombay: "₹2.5 Lakhs",
      iimAhmedabad: "₹23 Lakhs",
      aiimsDelhi: "₹1.5 Lakhs"
    },
    {
      feature: "Placement Rate",
      iitBombay: "85%",
      iimAhmedabad: "100%",
      aiimsDelhi: "95%"
    },
    {
      feature: "Average Package",
      iitBombay: "₹18 LPA",
      iimAhmedabad: "₹35 LPA",
      aiimsDelhi: "₹12 LPA"
    },
    {
      feature: "Popular Courses",
      iitBombay: "B.Tech, M.Tech",
      iimAhmedabad: "MBA, PGP",
      aiimsDelhi: "MBBS, MD, MS"
    }
  ];

  return (
    <div id="compare" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Compare Colleges
        </h2>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Select up to 3 colleges to compare
            </h3>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                Add College
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Start Comparison
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Features</th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">IIT</span>
                    </div>
                    IIT Bombay
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">IIM</span>
                    </div>
                    IIM Ahmedabad
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">AIIMS</span>
                    </div>
                    AIIMS Delhi
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{row.iitBombay}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{row.iimAhmedabad}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{row.aiimsDelhi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">📊 Detailed Analytics</h3>
            <p className="mb-4">Get in-depth analysis and statistics for each college including placement trends, faculty ratios, and more.</p>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100 transition">
              View Analytics
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🎯 Custom Comparison</h3>
            <p className="mb-4">Compare colleges based on your specific priorities like location, fees, courses, and placement records.</p>
            <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition">
              Customize
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">💾 Save Comparison</h3>
            <p className="mb-4">Save your college comparisons and access them later. Share with friends and family for better decisions.</p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100 transition">
              Save Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
