import Sales from '../../domain-layer/entities/Sales';
import DatabaseConnection from '../../persistence-layer/DatabaseConnection';
import IAsyncTask from './IAsyncTask';

export default class GetCarListTask implements IAsyncTask<Sales[]> {
  public async execute(): Promise<Sales[]> {
    const databaseConnection = await DatabaseConnection.getInstance();
    const carRepository = databaseConnection.getRepository(Sales);
    return carRepository.find();
  }
}
