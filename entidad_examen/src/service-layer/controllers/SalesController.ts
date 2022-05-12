import { Request, Response } from 'express';
import AddSalesTask, {AddSaleData} from '../tasks/AddSaleTask';
import BaseController from './BaseController';

export default class InventoryInsController extends BaseController {
  public constructor() {
    super('/sales');
  }

  protected configureRouter(): void {
    this.router.post('/', this.addSale.bind(this));
  }

  private async addSale(req: Request, res: Response): Promise<void> {
    try {
      const addSaleData = <AddSaleData>req.body;

      const addSalesTask = new AddSalesTask(addSaleData);
      const sales = await addSalesTask.execute();
  
      this.respond(res, 200, sales);
    } catch (e) {
      if((<Error>e).message === 'Car not found.') {
        this.respond(res, 404);
      }else {
        this.respond(res, 500);
      }
    }
  }
}
