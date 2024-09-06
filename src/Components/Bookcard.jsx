import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function BookCard({ book }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/summary/${book.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_50px_rgba(255,105,135,0.5)] cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-3xl"></div>

      <h2 className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-400 drop-shadow-lg transition-transform duration-300 transform hover:translate-y-1">
        {book.title}
      </h2>

      <h3 className="relative text-lg text-white italic font-medium mb-4 drop-shadow-lg transition-transform duration-300 transform hover:translate-x-2 hover:text-yellow-300">
        by {book.writer}
      </h3>

      <div className="relative flex items-center space-x-2 text-white drop-shadow-lg">
        <FaStar className="text-yellow-400 text-xl" />
        <span className="text-2xl font-semibold text-white hover:text-yellow-300">
          {book.rating}
        </span>
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute inset-0 border-[3px] border-transparent hover:border-blue-300 rounded-3xl transition-all duration-500"></div>
    </div>
  );
}

export default BookCard;
