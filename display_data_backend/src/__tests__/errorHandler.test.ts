import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../middleware/errorHandler';

describe('errorHandler', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;
    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
    });

    it('should handle errors and send 500 status with message', () => {
        const err = new Error('Test error');
        errorHandler(err, req as Request, res as Response, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
    });

    it('should log error stack to console', () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        const err = new Error('Test error');
        errorHandler(err, req as Request, res as Response, next);
        expect(consoleSpy).toHaveBeenCalledWith(err.stack);
    });

});