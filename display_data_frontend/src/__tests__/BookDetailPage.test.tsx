import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
import BookDetailPage from '../pages/BookDetailPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

jest.mock('../context/BookContext', () => ({
    useBookContext: jest.fn(),
}));

describe('BookDetailPage', () => {
    test('renders loading when book is not found', () => {
        (useParams as jest.Mock).mockReturnValue({ id: '1' });
        (useBookContext as jest.Mock).mockReturnValue({ books: [] });
        render(<BookDetailPage />);
        const loadingElement = screen.getByText(/Loading.../i);
        expect(loadingElement).toBeInTheDocument();
    });

    test('renders book details when book is found', () => {
        (useParams as jest.Mock).mockReturnValue({ id: '1' });
        (useBookContext as jest.Mock).mockReturnValue({
            books: [
                {
                    id: 1,
                    title: 'Book Title',
                    author: 'Author Name',
                    country: 'Country Name',
                    language: 'Language',
                    pages: 200,
                },
            ],
        });
        render(<BookDetailPage />);
        const titleElement = screen.getByText(/Book Title/i);
        expect(titleElement).toBeInTheDocument();
        const authorElement = screen.getByText(/Author Name/i);
        expect(authorElement).toBeInTheDocument();
    });
});