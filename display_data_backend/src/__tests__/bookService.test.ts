import { BookService } from '../services/bookService';
import { mockData } from '../mockdata/mockdata';

describe('BookService', () => {
    let bookService: BookService;
    beforeEach(() => {
        bookService = new BookService();
    });

    it('should return all books', () => {
        const books = bookService.getAllBooks();
        expect(books).toEqual(mockData);
    });

    it('should return a book by id', () => {
        const id = 1;
        const expectedBook = mockData.find(book => book.id === id);
        const book = bookService.getBookById(id);
        expect(book).toEqual(expectedBook);
    });

    it('should return undefined for non-existing book id', () => {
        const id = 1000;
        const book = bookService.getBookById(id);
        expect(book).toBeUndefined();
    });

});