import React from 'react';
import { useParams } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
import BookTable from '../components/BookTable';

const BookDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { books } = useBookContext();
    const book = books.find((book) => book.id === Number(id));
    if (!book) {
        return <div>Loading...</div>;
    }
    return (
        <div className='container'>
            <h1>Book Detail</h1>
            <BookTable books={[book]} />
        </div>
    );
};

export default BookDetailPage;