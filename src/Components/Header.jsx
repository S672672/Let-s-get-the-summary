import React from "react";
export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Book Summary App</h1>
            <input
                type="text"
                placeholder="Search books..."
                className="px-4 py-2 rounded-md focus:outline-none" />
        </header>
    );
}
  