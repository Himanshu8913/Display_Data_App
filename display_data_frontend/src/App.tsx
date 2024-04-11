import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import { BookProvider } from './context/BookContext';
import './style.css';

const App: React.FC = () => {
  return (
    <Router>
      <BookProvider>
        <Routes>
          <Route path="/books" element={<BookListPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
        </Routes>
      </BookProvider>
    </Router>
  );
};

export default App;