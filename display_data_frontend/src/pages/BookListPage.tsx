import React from 'react';
import { useBookContext } from '../context/BookContext';
import BookTable from '../components/BookTable';

const BookListPage: React.FC = () => {
    const { books } = useBookContext();
    return (
        <div className='container'>
            <h1>Book List</h1>
            <BookTable books={books} />
        </div>
    );
};

export default BookListPage;