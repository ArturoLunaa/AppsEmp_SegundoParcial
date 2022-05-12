import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import CarsController from './service-layer/controllers/CarsController';
import SalesController from './service-layer/controllers/SalesController';

const app = express();
const port = 3001;

// agrego esta linea porque daba problemas con la seguridad CORS
app.use(cors());
app.use(json());

const carsController = new CarsController();
const salesController = new SalesController();

carsController.mount(app);
salesController.mount(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
