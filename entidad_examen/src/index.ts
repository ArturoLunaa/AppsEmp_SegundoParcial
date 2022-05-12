import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import CarsController from './service-layer/controllers/CarsController';
import InventoryInsController from './service-layer/controllers/InventoryInsController';
// import CarRepository from './service-layer/tasks/CarRepository';
// import respond from './service-layer/tasks/respond';
// import Car from './domain-layer/entities/Car';

//  const app = express();

// app.use(json());
//  app.use(cors());

// // // Listar personas
//  app.get('/cars', (req, res) => {
// const carRepository = new CarsController();

//   const cars = carRepository.g

//    respond(res, 200, cars);
//  });

// // // Obtener una persona por id
//  app.get('/cars/:id', (req, res) => {
//    const id = req.params.id;

//    const carRepository = new CarsController();

//    const car = CarsController.getCarList(id);

//    if (!car) {
//      respond(res, 404);

//     return;
//    }

//   respond(res, 200, car);
//  });

// app.delete('/cars/:id', (req, res) => {
//   const id = req.params.id;

//   const carRepository = new CarRepository();
//   carRepository.delete(id);

//   respond(res, 200);
// });

// app.post('/cars', (req, res) => {
//   const car = new Car(req.body.id, req.body.model, req.body.brand, req.body.year);

//   const carRepository = new CarRepository();
//   carRepository.add(car);

//   respond(res, 200, car);
// });

// app.put('/cars', (req, res) => {
//   const car = new Car(req.body.id, req.body.model, req.body.brand, req.body.year);

//   const carRepository = new CarRepository();
//   carRepository.update(car);

//   respond(res, 200);
// });

// app.listen(3002, () => {
//   console.log('App started on port 3002');
// });
const app = express();
const port = 3001;

app.use(json());

const carsController = new CarsController();
const inventoryInsController = new InventoryInsController();

carsController.mount(app);
inventoryInsController.mount(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
