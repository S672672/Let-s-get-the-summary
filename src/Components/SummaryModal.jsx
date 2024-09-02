import React from "react";
export default function SummaryModal({ book, isOpen, onClose }) {
    return (
        isOpen ? (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
                    <p>{book.summary}</p>
                    <button
                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        ) : null
    );
}
  