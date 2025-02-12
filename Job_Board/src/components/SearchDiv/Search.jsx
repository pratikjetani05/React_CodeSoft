import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="w-[90%] mx-auto mt-8 mb-4">
      <form onSubmit={handleSearch}>
        <div className="relative flex items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Search Icon */}
          <div className="absolute left-4 text-gray-400">
            <AiOutlineSearch className="w-6 h-6" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-4 pl-14 pr-32 text-gray-700 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base placeholder:text-gray-400"
            placeholder="Search for jobs, companies, or locations..."
          />

          {/* Search Button */}
          <button
            type="submit"
            className="absolute right-3 px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium text-sm shadow-sm hover:shadow-md"
          >
            Search
          </button>
        </div>

        {/* Optional: Search Suggestions */}
        <div className="flex flex-wrap gap-2 mt-3 px-4">
          <span className="text-sm text-gray-500">Popular:</span>
          <button 
            type="button"
            onClick={() => setSearchTerm('Developer')}
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Developer
          </button>
          <button 
            type="button"
            onClick={() => setSearchTerm('Designer')}
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Designer
          </button>
          <button 
            type="button"
            onClick={() => setSearchTerm('Manager')}
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Manager
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;