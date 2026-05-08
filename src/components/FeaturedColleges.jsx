import React, { useState } from 'react';

const FeaturedColleges = () => {
  const [colleges, setColleges] = useState([
    {
      id: 1,
      name: "Indian Institute of Technology Bombay",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      fees: "₹2.5 Lakhs",
      courses: ["B.Tech", "M.Tech", "PhD"],
      type: "Government",
      image: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=IIT+Bombay"
    },
    {
      id: 2,
      name: "Indian Institute of Management Ahmedabad",
      location: "Ahmedabad, Gujarat",
      rating: 4.9,
      fees: "₹23 Lakhs",
      courses: ["MBA", "PGP", "FPM"],
      type: "Government",
      image: "https://via.placeholder.com/300x200/059669/FFFFFF?text=IIM+Ahmedabad"
    },
    {
      id: 3,
      name: "All India Institute of Medical Sciences Delhi",
      location: "New Delhi",
      rating: 4.9,
      fees: "₹1.5 Lakhs",
      courses: ["MBBS", "MD", "MS"],
      type: "Government",
      image: "https://via.placeholder.com/300x200/DC2626/FFFFFF?text=AIIMS+Delhi"
    },
    {
      id: 4,
      name: "Birla Institute of Technology and Science Pilani",
      location: "Pilani, Rajasthan",
      rating: 4.7,
      fees: "₹3.5 Lakhs",
      courses: ["B.E", "M.E", "PhD"],
      type: "Private",
      image: "https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=BITS+Pilani"
    },
    {
      id: 5,
      name: "Christian Medical College Vellore",
      location: "Vellore, Tamil Nadu",
      rating: 4.8,
      fees: "₹2 Lakhs",
      courses: ["MBBS", "MD", "MS"],
      type: "Private",
      image: "https://via.placeholder.com/300x200/0891B2/FFFFFF?text=CMC+Vellore"
    },
    {
      id: 6,
      name: "National Institute of Technology Trichy",
      location: "Tiruchirappalli, Tamil Nadu",
      rating: 4.6,
      fees: "₹2 Lakhs",
      courses: ["B.Tech", "M.Tech", "PhD"],
      type: "Government",
      image: "https://via.placeholder.com/300x200/EA580C/FFFFFF?text=NIT+Trichy"
    }
  ]);

  const handleAddToCompare = (collegeId) => {
    console.log('Adding college to compare:', collegeId);
  };

  return (
    <div id="featured" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Featured Colleges
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <div key={college.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src={college.image} 
                alt={college.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{college.name}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                    {college.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3">{college.location}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(college.rating) ? "text-yellow-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{college.rating}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Fees:</span> {college.fees} per year
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Courses:</span> {college.courses.join(", ")}
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleAddToCompare(college.id)}
                    className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                  >
                    Compare
                  </button>
                  <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded hover:bg-indigo-50 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
            View All Colleges
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedColleges;
