import { Request, Response } from 'express';
import { BookService } from '../services/bookService';
import { Books } from '../mockdata/mockdata';

const bookService = new BookService();

export class BookController {

    getAllBooks(req: Request, res: Response): void {
        try {
            const books: Books[] = bookService.getAllBooks();
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    getBookById(req: Request, res: Response): void {
        const id: number = parseInt(req.params.id);
        try {
            const book: Books | undefined = bookService.getBookById(id);
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: "Book not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

}
