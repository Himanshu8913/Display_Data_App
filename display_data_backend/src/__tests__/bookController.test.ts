import { Request, Response } from 'express';
import { BookController } from '../controllers/bookController';
import { BookService } from '../services/bookService';

const mockRequest = {} as Request;
const mockResponse = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
} as unknown as Response;

jest.mock('../services/bookService');
const mockBookService = BookService as jest.MockedClass<typeof BookService>;
describe('BookController', () => {
    let bookController: BookController;
    beforeEach(() => {
        bookController = new BookController();
        jest.clearAllMocks();
    });
    describe('getAllBooks', () => {
        it('should return all books', () => {
            const mockBooks = [{ id: 1, title: 'Book 1', author: 'Test', country: 'india', language: 'English', pages: 200 }, { id: 2, title: 'Book 2', author: 'Test', country: 'india', language: 'English', pages: 200 }];
            mockBookService.prototype.getAllBooks.mockReturnValue(mockBooks);
            bookController.getAllBooks(mockRequest, mockResponse);
            expect(mockResponse.json).toHaveBeenCalledWith(mockBooks);
        });
        it('should handle errors', () => {
            const errorMessage = 'Internal server error';
            mockBookService.prototype.getAllBooks.mockImplementation(() => {
                throw new Error(errorMessage);
            });
            bookController.getAllBooks(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenCalledWith(500);
            expect(mockResponse.json).toHaveBeenCalledWith({ message: errorMessage });
        });
    });
    describe('getBookById', () => {
        it('should return a book by id', () => {
            const mockBook = { id: 1, title: 'Book 1', author: 'Test', country: 'india', language: 'English', pages: 200 };
            const mockId = 1;
            mockRequest.params = { id: mockId.toString() };
            mockBookService.prototype.getBookById.mockReturnValue(mockBook);
            bookController.getBookById(mockRequest, mockResponse);
            expect(mockResponse.json).toHaveBeenCalledWith(mockBook);
        });
        it('should handle book not found', () => {
            const mockId = 999;
            mockRequest.params = { id: mockId.toString() };
            mockBookService.prototype.getBookById.mockReturnValue(undefined);
            bookController.getBookById(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenCalledWith(404);
            expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Book not found' });
        });
        it('should handle errors', () => {
            const errorMessage = 'Internal server error';
            const mockId = 1;
            mockRequest.params = { id: mockId.toString() };
            mockBookService.prototype.getBookById.mockImplementation(() => {
                throw new Error(errorMessage);
            });
            bookController.getBookById(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenCalledWith(500);
            expect(mockResponse.json).toHaveBeenCalledWith({ message: errorMessage });
        });
    });
});