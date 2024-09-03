import React from "react";
import { useState,useEffect } from "react";
import BookCard from "./Components/Bookcard";
import SummaryModal from "./Components/SummaryModal";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

export default function App() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  useEffect(() => {
    // Fetch books from API
  }, []);

  const handleSummaryClick = (book) => {
    setSelectedBook(book);
    setIsSummaryOpen(true);
  };

  const closeSummary = () => {
    setIsSummaryOpen(false);
  };

  const filteredBooks = selectedCategory
    ? books.filter(book => book.category === selectedCategory)
    : books;

  return (
    <div className="flex">
    <Header />
      <Sidebar categories='smith' onSelectCategory={setSelectedCategory} />
      <main className="w-3/4 p-8 grid grid-cols-3 gap-8">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} onSummaryClick={handleSummaryClick} />
        ))}
      </main>
      <SummaryModal book={selectedBook} isOpen={isSummaryOpen} onClose={closeSummary} />
    </div>
  );
}
