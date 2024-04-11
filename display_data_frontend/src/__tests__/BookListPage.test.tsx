import { render, screen } from '@testing-library/react';
import { useBookContext } from '../context/BookContext';
import BookListPage from '../pages/BookListPage';

jest.mock('../context/BookContext', () => ({
    useBookContext: jest.fn(),
}));
describe('BookListPage', () => {

    test('renders book list', () => {
        (useBookContext as jest.Mock).mockReturnValue({
            books: [
                {
                    id: 1,
                    title: 'Book Title 1',
                    author: 'Author Name 1',
                    country: 'Country Name 1',
                    language: 'Language 1',
                    pages: 200,
                },
                {
                    id: 2,
                    title: 'Book Title 2',
                    author: 'Author Name 2',
                    country: 'Country Name 2',
                    language: 'Language 2',
                    pages: 250,
                },
            ],
        });
        render(<BookListPage />);
        const headingElement = screen.getByText(/Book List/i);
        expect(headingElement).toBeInTheDocument();
        const bookTitle1Element = screen.getByText(/Book Title 1/i);
        expect(bookTitle1Element).toBeInTheDocument();
        const bookTitle2Element = screen.getByText(/Book Title 2/i);
        expect(bookTitle2Element).toBeInTheDocument();
    });
});