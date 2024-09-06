import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Navbar({ setSearchQuery }) {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl p-6 rounded-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center space-x-6">
        <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out">
          Book Explorer
        </div>
        <div className="relative flex items-center w-full max-w-lg">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
          <input
            type="text"
            placeholder="Search for books, authors..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-lg text-white bg-white bg-opacity-20 rounded-full shadow-lg placeholder-white focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300 backdrop-blur-lg"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
