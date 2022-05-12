
import { Response, Request, application, json } from 'express';
import GetCarListTask from '../tasks/GetCarListTask';
import FindCarTask from '../tasks/FindCarTask';
import UpdateCarTask, { UpdateCarData } from '../tasks/UpdateCarTask';
import BaseController from "./BaseController"
import AddCarTask, { AddCarData } from '../tasks/AddCarTask';
import DeleteCarTask from '../tasks/DeleteCarTask';


export default class CarsController extends BaseController{
  public constructor(){
    super('/cars');
  }

  protected configureRouter(): void {
    this.router.get('/', this.getCarsList);
    this.router.get('/:id', this.findCar);
    this.router.post('/', this.addCar);
    this.router.put('/', this.updateCar);
    this.router.delete('/:id', this.deleteCar);
  }

  private async getCarsList(req: Request, res: Response): Promise<void>{
    const getCarListTask = new GetCarListTask();
    const carsList = await getCarListTask.execute();

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(carsList))
  }

  private async findCar(req: Request, res: Response): Promise<void> {
    try{
      const carId = parseInt(req.params.id);
      const getCarListTask = new FindCarTask(carId);

      const car = await getCarListTask.execute();

      res.writeHead(200, {'Content-Type': 'aplication/json'});
      res.end(JSON.stringify(car));
    }catch (e){
      if((<Error>e).message === 'Car not found'){
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end();
      }else{
        res.writeHead(500, { 'Content-Type': 'aplication/json'});
        res.end();
      }
    }

  }

  private async addCar(req: Request, res: Response): Promise<void> {
    const carData = <AddCarData>req.body;

    const addCarTask = new AddCarTask(carData);


    const car = await addCarTask.execute();

    res.writeHead(200, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify(car));

  }

  private async updateCar(req: Request, res: Response): Promise<void> {
    
    try{
    const carData = <UpdateCarData>req.body;

    const updateCarTask = new UpdateCarTask(carData);


    const updatedCar = await updateCarTask.execute();

    res.writeHead(200, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify(updatedCar));
    }catch (e) {
      if ((<Error>e).message === 'Car not found'){
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end();
      }else{
        res.writeHead(500, { 'Content-Type': 'aplication/json'});
        res.end();
      }
    }

  }

  private async deleteCar(req: Request, res: Response): Promise<void> {
    try {
      const carId = parseInt(req.params.id);
      const deleteCarTask = new DeleteCarTask(carId);

      await deleteCarTask.execute();

      this.respond(res, 200);
    } catch (e) {
      this.respond(res, 500);
    }
  }

}