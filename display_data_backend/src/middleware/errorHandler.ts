import { Response, Request, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {

    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
}