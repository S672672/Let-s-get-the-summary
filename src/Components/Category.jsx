import React, { useState } from 'react';

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
    <div className="bg-white shadow-md p-4 mt-2">
    <div className='flex items-center justify-center'>
    <h1 className="text-4xl font-bold text-center mb-6 text-black">Explore Books by Category</h1>
      <div className="max-w-7xl mx-auto flex justify-around gap-2 items-center">
        {visibleCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-200 transition duration-300"
          >
            {category}
          </button>
        ))}

        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            More Categories
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
              {categories.slice(3).map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300 text-left"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category;