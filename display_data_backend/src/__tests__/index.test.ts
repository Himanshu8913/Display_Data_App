import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors = require("cors");
import { errorHandler } from '../middleware/errorHandler';
import bookRoutes from '../routes/bookRoutes';

jest.mock('cors');
jest.mock('../middleware/errorHandler');
jest.mock('../routes/bookRoutes', () => jest.fn());

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/books', bookRoutes);
app.use(errorHandler as express.ErrorRequestHandler);
describe('Express App', () => {
    it('should use bodyParser.json() middleware', () => {
        const jsonParser = app._router.stack.find((layer: any) => layer.name === 'jsonParser');
        expect(jsonParser).toBeDefined();
    });
    it('should use CORS middleware', () => {
        expect(cors).toBe(0);
    });
    it('should use bookRoutes for /api/v1/books', () => {
        expect(bookRoutes).toHaveBeenCalledWith(express.Router());
    });
    it('should use errorHandler middleware', () => {
        expect(errorHandler).toHaveBeenCalled();
    });
    it('should start the server', () => {
        const mockListen = jest.fn();
        const server: any = {
            listen: mockListen,
            close: jest.fn(),
        };
        const originalConsoleLog = console.log;
        console.log = jest.fn();
        const originalAppListen = app.listen;
        app.listen = jest.fn(() => server);
        require('../index');
        expect(app.listen).toHaveBeenCalledWith(3000, expect.any(Function));
        expect(mockListen).toHaveBeenCalled();
    });
});