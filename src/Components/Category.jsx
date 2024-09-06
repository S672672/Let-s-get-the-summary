import React, { useState } from 'react';
import { FaAngleDown, FaBook } from 'react-icons/fa';

const categories = [
  'All',
  'Fiction',
  'Non-Fiction',
  'Science',
  'History',
  'Fantasy',
  'Biography',
  'Mystery',
  'Romance',
  'Thriller',
  'Adventure',
  // Add more categories as needed
];

function Category({ setSelectedCategory }) {
  const [visibleCategories, setVisibleCategories] = useState(categories.slice(0, 3));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg p-6 mt-6 rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
          <FaBook className="inline-block mr-3 text-yellow-400" />
          Explore Books by Category
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 items-center">
        {visibleCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="px-5 py-3 bg-white text-indigo-600 rounded-lg shadow-lg font-semibold hover:bg-indigo-500 hover:text-white transition-transform transform hover:scale-105 duration-300"
          >
            {category}
          </button>
        ))}

        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="px-5 py-3 bg-white text-indigo-600 rounded-lg shadow-lg font-semibold flex items-center justify-between hover:bg-indigo-500 hover:text-white transition-transform transform hover:scale-105 duration-300"
          >
            More Categories
            <FaAngleDown className="ml-2" />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 overflow-hidden">
              {categories.slice(3).map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition-colors duration-300 text-left"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
