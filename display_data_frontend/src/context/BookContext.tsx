import React, { createContext, useState, useEffect, useContext } from 'react';
import Book from '../types/Book';

interface BookContextType {
    books: Book[];
}

const BookContext = createContext<BookContextType>({ books: [] });

export const useBookContext = () => useContext(BookContext);

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/books');
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <BookContext.Provider value={{ books }}>
            {children}
        </BookContext.Provider>
    );
};