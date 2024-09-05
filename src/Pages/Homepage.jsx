import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Category from '../Components/Category';
import BookCard from '../Components/Bookcard';

const HomePage = ({ categories, books, onSelectBook, onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredBooks = books.filter(
    (book) =>
      book.category === selectedCategory &&
      (book.title.toLowerCase().includes(onSearch) ||
        book.writer.toLowerCase().includes(onSearch))
  );

  return (
    <div>
      <Navbar onSearch={onSearch} />
      <Category
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
