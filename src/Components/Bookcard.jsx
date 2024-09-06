import React from "react";
import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/summary/${book.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <h2 className="text-2xl font-bold mb-2 text-blue-400">{book.title}</h2>
      <h3 className="text-lg mb-2 text-gray-700">by {book.writer}</h3>

      <div className="mt-4">
        <span className="text-yellow-500 font-bold">{book.rating}</span> / 5
      </div>
    </div>
  );
}

export default BookCard;
