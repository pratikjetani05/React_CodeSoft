

import React from 'react';
import { AiOutlineSearch} from 'react-icons/ai';


const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="searchDiv grid  bg-gray-200 rounded-[10px] mt-10 p-[3rem]">
      <form onSubmit={handleSearch} className="">
        <div className="firstDiv w-full h-[95%] flex flex-wrap justify-between items-center rounded-[8px]  bg-white p-5 shadow-lg shadow-gray-400">
          <div className="flex gap-5 items-end">
            <AiOutlineSearch className="text-[25px] cursor-pointer" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-blue-600 text-xl focus:outline-none"
              placeholder="Search Job Here..."
            />
           
          </div>
         
          <button
            type="submit"
            className="bg-blue-500 h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;

