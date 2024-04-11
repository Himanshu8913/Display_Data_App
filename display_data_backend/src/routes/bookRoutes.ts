import express, { Router } from 'express';
import { BookController } from '../controllers/bookController';

const router: Router = express.Router();
const bookController = new BookController();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

export default router;