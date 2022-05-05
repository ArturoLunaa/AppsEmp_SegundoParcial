import { useState, useEffect } from "react";
import axios from "axios";
import Car from "../models/Car";
import ShowCar from "./ShowCar";

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  async function LoadCars() {
      const response = await axios.get('http://localhost:3002/cars');
      setCars(
          response.data.map((c: Car) => new Car(c.id, c.model, c.brand, c.year))
      );
      setLoaded(true);
  }

  //aquí tenemos un loop infinito corregido con el if.
  useEffect(() => {
    if (!loaded) {
        LoadCars();
    }
  }, [cars, loaded]); // se va a ejecutar cuando people y loaded cambien

  // aquí necesitamos poner el atributo "key" para que react haga un render eficiente
  const renderCars = () =>
    cars.map(c => (
    <ShowCar 
    key={c.id} 
    model={c.model} 
    brand={c.brand}
    year={c.year} 
    />
    ));


  return(
       <div>
         {renderCars()}
       </div>
  );
}
