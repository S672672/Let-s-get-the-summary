import React from "react";
export default function Sidebar({ categories, onSelectCategory }) {
    return (
        <aside className="w-1/4 bg-gray-200 p-4">
            <h2 className="font-bold text-lg mb-4">Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li
                        key={category}
                        className="cursor-pointer py-2 hover:bg-gray-300"
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
  