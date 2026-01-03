import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchData } from '../assets/data/searchData';

const SearchBar = ({ isMobile = false }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    
    if (searchQuery.length < 2) {
      setResults([]);
      setIsVisible(false);
      return;
    }

    const filteredResults = searchData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).slice(0, 6);

    setResults(filteredResults);
    setIsVisible(true);
  };

  const handleResultClick = (result) => {
    navigate(result.route);
    setQuery('');
    setResults([]);
    setIsVisible(false);
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.length >= 2 && setIsVisible(true)}
          placeholder="Search products, equipment..."
          className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Search Results */}
      {isVisible && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {results.map((result, index) => (
            <div
              key={index}
              onClick={() => handleResultClick(result)}
              className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <div className="font-semibold text-sm text-gray-900">{result.name}</div>
              <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                {result.description}
              </div>
              <div className="text-xs text-blue-600 mt-1 capitalize">
                {result.type} • {result.category}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {isVisible && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
          <div className="text-center text-gray-500">
            <i className="fas fa-search text-2xl mb-2"></i>
            <p>No results found for "{query}"</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;