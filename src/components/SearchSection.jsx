import React, { useState } from 'react';

const SearchSection = ({ searchQuery, setSearchQuery, filterOptions, setFilterOptions }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert('Please enter a search term');
      return;
    }
    
    setIsSearching(true);
    
    // Simulate search API call
    setTimeout(() => {
      const mockResults = [
        { id: 1, name: "Indian Institute of Technology", location: "Multiple Locations" },
        { id: 2, name: "National Institute of Technology", location: "Multiple Locations" },
        { id: 3, name: "Delhi University", location: "Delhi" }
      ].filter(college => 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div id="search" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Search Colleges
        </h2>
        
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by college name, course, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition font-semibold disabled:opacity-50"
              disabled={isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="bg-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stream
                  </label>
                  <select
                    value={filterOptions.stream}
                    onChange={(e) => setFilterOptions({...filterOptions, stream: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Streams</option>
                    <option value="engineering">Engineering</option>
                    <option value="medical">Medical</option>
                    <option value="management">Management</option>
                    <option value="arts">Arts</option>
                    <option value="science">Science</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={filterOptions.location}
                    onChange={(e) => setFilterOptions({...filterOptions, location: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Locations</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="pune">Pune</option>
                    <option value="chennai">Chennai</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fees Range
                  </label>
                  <select
                    value={filterOptions.fees}
                    onChange={(e) => setFilterOptions({...filterOptions, fees: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Fees</option>
                    <option value="0-1lakh">Below 1 Lakh</option>
                    <option value="1-5lakh">1-5 Lakhs</option>
                    <option value="5-10lakh">5-10 Lakhs</option>
                    <option value="10+lakh">Above 10 Lakhs</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </form>

        {searchResults.length > 0 && (
          <div className="mt-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Search Results</h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {searchResults.map((result) => (
                <div key={result.id} className="p-4 border-b border-gray-200 hover:bg-gray-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-800">{result.name}</h4>
                      <p className="text-sm text-gray-600">{result.location}</p>
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-semibold text-gray-800">Top Colleges</h3>
            <p className="text-sm text-gray-600 mt-2">IITs, IIMs, NITs & more</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold text-gray-800">Popular Courses</h3>
            <p className="text-sm text-gray-600 mt-2">Engineering, MBA, Medical</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-semibold text-gray-800">Entrance Exams</h3>
            <p className="text-sm text-gray-600 mt-2">JEE, NEET, CAT, GATE</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-semibold text-gray-800">By Location</h3>
            <p className="text-sm text-gray-600 mt-2">Mumbai, Delhi, Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
