import React from 'react';
import SummaryPage from '../Components/Summary';

const BookSummaryPage = ({ selectedBook }) => {
  return (
    <div>
      <SummaryPage book={selectedBook} />
    </div>
  );
};

export default BookSummaryPage;
