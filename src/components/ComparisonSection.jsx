import React from 'react';

const ComparisonSection = ({ selectedColleges, setSelectedColleges }) => {
  const comparisonData = [
    {
      feature: "College Name",
      getCollegeData: (college) => college.name
    },
    {
      feature: "Location",
      getCollegeData: (college) => college.location
    },
    {
      feature: "Rating",
      getCollegeData: (college) => `${college.rating} ⭐`
    },
    {
      feature: "Annual Fees",
      getCollegeData: (college) => college.fees
    },
    {
      feature: "Courses",
      getCollegeData: (college) => college.courses.join(", ")
    },
    {
      feature: "Type",
      getCollegeData: (college) => college.type
    }
  ];

  const removeFromComparison = (collegeId) => {
    setSelectedColleges(selectedColleges.filter(c => c.id !== collegeId));
  };

  return (
    <div id="compare" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Compare Colleges
        </h2>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Selected Colleges for Comparison ({selectedColleges.length}/3)
            </h3>
            {selectedColleges.length === 0 ? (
              <p className="text-gray-600 mb-4">No colleges selected. Add colleges from the Featured section to compare.</p>
            ) : (
              <div className="flex justify-center flex-wrap gap-4 mb-4">
                {selectedColleges.map((college) => (
                  <div key={college.id} className="bg-white px-4 py-2 rounded-lg border border-gray-300 flex items-center space-x-2">
                    <span className="font-medium">{college.name}</span>
                    <button
                      onClick={() => removeFromComparison(college.id)}
                      className="text-red-500 hover:text-red-700 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {selectedColleges.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Features</th>
                  {selectedColleges.map((college, index) => (
                    <th key={college.id} className="px-6 py-4 text-center font-semibold">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-lg mb-2 flex items-center justify-center">
                          <span className="text-indigo-600 font-bold text-xs">
                            {college.name.split(' ').map(word => word[0]).join('').substring(0, 3)}
                          </span>
                        </div>
                        {college.name.length > 20 ? college.name.substring(0, 20) + '...' : college.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    {selectedColleges.map((college) => (
                      <td key={college.id} className="px-6 py-4 text-center text-gray-700">
                        {row.getCollegeData(college)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

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
