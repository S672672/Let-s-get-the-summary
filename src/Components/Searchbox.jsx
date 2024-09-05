import React, { useState } from 'react';

const SearchBox = ({ Search }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    Search(query);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="p-2 border rounded-l"
        placeholder="Search by book or writer..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-500 p-2 rounded-r text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
