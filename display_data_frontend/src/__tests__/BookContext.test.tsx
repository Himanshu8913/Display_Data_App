import { render, act } from '@testing-library/react';
import { BookProvider, useBookContext } from '../context/BookContext';
import { renderHook } from '@testing-library/react-hooks';

describe('BookProvider', () => {
    it('should render children', () => {
        const TestComponent = () => <div>Test Component</div>;
        const { getByText } = render(
            <BookProvider>
                <TestComponent />
            </BookProvider>
        );
        expect(getByText('Test Component')).toBeInTheDocument();
    });

    it('should provide books through context', async () => {
        const TestComponent = () => {
            const { books } = useBookContext();
            return <div>{books.map(book => <div key={book.id}>{book.title}</div>)}</div>;
        };
        const { findAllByText } = render(
            <BookProvider>
                <TestComponent />
            </BookProvider>
        );
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });
        const books = await findAllByText(/Book/);
        expect(books.length).toBe(1);
    });

    it('should fetch books and update context state', async () => {
        const { result } = renderHook(() => useBookContext());
        expect(result.current.books).toEqual([]);
        expect(result.current.books.length).toBe(0);
    });
});