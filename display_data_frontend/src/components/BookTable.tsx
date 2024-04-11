import React from 'react';
import Book from '../types/Book';

interface Props {
    books: Book[];
}
const BookTable: React.FC<Props> = ({ books }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Country</th>
                    <th>Language</th>
                    <th>Pages</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.country}</td>
                        <td>{book.language}</td>
                        <td>{book.pages}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default BookTable;