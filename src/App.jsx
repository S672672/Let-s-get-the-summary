import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Category from './Components/Category';
import BookCard from './Components/Bookcard'
import Summary from './Components/Summary';

const booksData = [
  {
    id: 1,
    title: 'Book 1',
    category: 'Fiction',
    writer: 'Author A',
    summary: 'This is the summary of Book 1.',
    rating: `4.5/5`
  },
  // Add more books here
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = booksData.filter(
    (book) =>
      (selectedCategory === 'All' || book.category === selectedCategory) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.writer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Router>
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white">
      <Navbar setSearchQuery={setSearchQuery} />
      <Category setSelectedCategory={setSelectedCategory} />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Explore Books by Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        {filteredBooks.length === 0 && (
          <div className="text-center text-2xl mt-8">
            No books found in this category.
          </div>
        )}
      </div>
      <Routes>
        <Route path="/summary/:id" element={<Summary books={booksData} />} />
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
