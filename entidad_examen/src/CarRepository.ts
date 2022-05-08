import fs from 'fs';
import path from 'path';
import IRepository from './IRepository';
import Car from './domain-layer/entities/Car';

export default class CarRepository implements IRepository<Car> {
  private cars: Car[] = [];

  private static readonly CARS_FILE_PATH = path.join(
    __dirname,
    'data/cars.json'
  );

  public constructor() {
    this.Load();
  }

  public list(): Car[] {
    return this.cars;
  }

  public get(id: string): Car {
    return <Car>this.cars.find((car) => car.id === id);
  }

  public add(entity: Car): Car {
    this.cars.push(entity);
    this.save();
    return entity;
  }

  public update(entity: Car): Car {
    this.cars = this.cars.reduce(
      (accumulation: Car[], currentCar) => {
        if (currentCar.id === entity.id) {
          accumulation.push(entity);
        } else {
          accumulation.push(currentCar);
        }

        return accumulation;
      },
      []
    );

    this.save();

    return entity;
  }

  public delete(id: string): void {
    this.cars = this.cars.reduce(
      (accumulation: Car[], currentCar) => {
        if (currentCar.id !== id) {
          accumulation.push(currentCar);
        }
        return accumulation;
      },
      []
    );
    this.save();
  }

  private Load(): void {
    const carsJson = fs.readFileSync(CarRepository.CARS_FILE_PATH);
    this.cars = <Car[]>JSON.parse(carsJson.toString());
  }

  private save(): void {
    const carsJson = JSON.stringify(this.cars);
    fs.writeFileSync(CarRepository.CARS_FILE_PATH, carsJson);
  }
}
