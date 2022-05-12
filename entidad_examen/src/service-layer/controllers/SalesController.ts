import { Request, Response } from 'express';
import BaseController from './BaseController';

export default class SalesController extends BaseController {
    public constructor() {
        super('/inventory-ins');
    }

    protected configureRouter(): void {
        this.router.post('/', this.addSales);
    }

    private async addSales(req: Request, res: Response): Promise<void> {}
}
