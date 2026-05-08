import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import FeaturedColleges from "./components/FeaturedColleges";
import ComparisonSection from "./components/ComparisonSection";
import Footer from "./components/Footer";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    stream: "all",
    location: "all",
    fees: "all"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <SearchSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      <FeaturedColleges 
        selectedColleges={selectedColleges}
        setSelectedColleges={setSelectedColleges}
      />
      <ComparisonSection 
        selectedColleges={selectedColleges}
        setSelectedColleges={setSelectedColleges}
      />
      <Footer />
    </div>
  );
}
