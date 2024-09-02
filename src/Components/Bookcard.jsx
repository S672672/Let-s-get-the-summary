import React from "react";
export default function BookCard({ book, onSummaryClick }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={book.coverImage} alt={book.title} className="w-full h-64 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-4">{book.title}</h3>
            <p className="text-gray-600">by {book.writer}</p>
            <div className="flex items-center mt-2">
                <span className="bg-yellow-400 text-white px-2 py-1 rounded-md">{book.rating}</span>
            </div>
            <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => onSummaryClick(book)}
            >
                View Summary
            </button>
        </div>
    );
}
  