import React from 'react';

const BookCard = ({ title, author, genre, rating, summary }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-1"><strong>Author:</strong> {author}</p>
      <p className="text-gray-700 mb-1"><strong>Genre:</strong> {genre}</p>
      <p className="text-gray-700 mb-1"><strong>Rating:</strong> {rating} ⭐</p>
      <p className="text-gray-800 mt-2"><strong>Summary:</strong></p>
      <p className="text-gray-600">{summary}</p>
    </div>
  );
};

export default BookCard;
