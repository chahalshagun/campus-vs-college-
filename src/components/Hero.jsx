import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Find Your Perfect College
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Compare colleges, explore courses, and make informed decisions about your future education. 
          Search from thousands of colleges across India.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Searching
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
            Compare Colleges
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold">50,000+</div>
            <div className="text-lg">Colleges</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">1,000+</div>
            <div className="text-lg">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">500+</div>
            <div className="text-lg">Exams</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
