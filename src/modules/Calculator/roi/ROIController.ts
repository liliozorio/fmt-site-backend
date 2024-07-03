import { Request, Response } from 'express';

export class ROICalculatorController {
    public async handle(request: Request, response: Response): Promise<Response> {
        return response.status(201).json({ status: "success"});
    }
}