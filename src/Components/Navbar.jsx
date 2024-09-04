import React from 'react';

function Navbar({ setSearchQuery }) {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Book Explorer</div>
        <input
          type="text"
          placeholder="Search by title, writer, or type..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
}

export default Navbar;
