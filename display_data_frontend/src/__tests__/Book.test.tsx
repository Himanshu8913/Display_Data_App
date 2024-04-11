import Book from "../types/Book";

describe('Book interface', () => {
    it('should have id property of type number', () => {
        const book: Book = {
            id: 1,
            author: 'Author Name',
            country: 'Country',
            language: 'Language',
            pages: 200,
            title: 'Book Title',
        };
        expect(book.id).toEqual(expect.any(Number));
    });
    it('should have author property of type string', () => {
        const book: Book = {
            id: 1,
            author: 'Author Name',
            country: 'Country',
            language: 'Language',
            pages: 200,
            title: 'Book Title',
        };
        expect(book.author).toEqual(expect.any(String));
    });
    it('should have country property of type string', () => {
        const book: Book = {
            id: 1,
            author: 'Author Name',
            country: 'Country',
            language: 'Language',
            pages: 200,
            title: 'Book Title',
        };
        expect(book.country).toEqual(expect.any(String));
    });
    it('should have language property of type string', () => {
        const book: Book = {
            id: 1,
            author: 'Author Name',
            country: 'Country',
            language: 'Language',
            pages: 200,
            title: 'Book Title',
        };
        expect(book.language).toEqual(expect.any(String));
    });
    it('should have pages property of type number', () => {
        const book: Book = {
            id: 1,
            author: 'Author Name',
            country: 'Country',
            language: 'Language',
            pages: 200,
            title: 'Book Title',
        };
        expect(book.pages).toEqual(expect.any(Number));
    });
    it('should have title property of type string', () => {
        const book: Book = {
            id: 1,
            author: 'Author Name',
            country: 'Country',
            language: 'Language',
            pages: 200,
            title: 'Book Title',
        };
        expect(book.title).toEqual(expect.any(String));
    });
});
