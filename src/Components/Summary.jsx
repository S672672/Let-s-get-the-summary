import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function Summary({ books }) {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
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
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="relative">
          <div className="bg-cover bg-center h-40" style={{ backgroundImage: `url(${book.backgroundImage})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        </div>
        <div className="p-8 bg-white rounded-t-2xl">
          <h2 className="text-4xl font-extrabold text-amber-500">{book.title}</h2>
          <h3 className="text-xl text-gray-600">by {book.writer}</h3>
          <div className="flex items-center space-x-2 mb-6">
            <FaStar className="text-yellow-400 text-2xl" />
            <span className="text-xl font-bold text-gray-800">{book.rating}</span>
            <span className="text-gray-600 text-xl ml-2"></span>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200">
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Summary</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              {book.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
