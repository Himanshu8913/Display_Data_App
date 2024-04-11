import { render } from '@testing-library/react';
import BookTable from '../components/BookTable';

describe('BookTable component', () => {

    it('renders table with correct data', () => {
        const books = [
            { id: 1, title: 'Book 1', author: 'Author 1', country: 'Country 1', language: 'Language 1', pages: 100 },
            { id: 2, title: 'Book 2', author: 'Author 2', country: 'Country 2', language: 'Language 2', pages: 150 }
        ];
        const { getByText } = render(<BookTable books={books} />);
        books.forEach((book) => {
            expect(getByText(book.id.toString())).toBeInTheDocument();
            expect(getByText(book.title)).toBeInTheDocument();
            expect(getByText(book.author)).toBeInTheDocument();
            expect(getByText(book.country)).toBeInTheDocument();
            expect(getByText(book.language)).toBeInTheDocument();
            expect(getByText(book.pages.toString())).toBeInTheDocument();
        });
    });
});