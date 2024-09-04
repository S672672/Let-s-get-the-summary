import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Summary({ books }) {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-500 text-2xl">
          Book not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <Link to="/" className="text-white hover:text-gray-200 text-lg font-semibold mb-4 inline-block">
        &larr; Back to Books
      </Link>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url('https://source.unsplash.com/random/800x600?book')` }}></div>
        <div className="p-8">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-800">{book.title}</h2>
          <h3 className="text-3xl text-gray-600 mb-4">by {book.writer}</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{book.summary}</p>
          <div className="flex items-center">
            <span className="text-yellow-400 text-2xl font-bold">{book.rating}</span>
            <span className="text-gray-600 text-xl ml-2">/ 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
