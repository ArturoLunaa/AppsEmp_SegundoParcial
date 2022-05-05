import { ChangeEvent, MouseEvent, useState } from "react";
import Car from "../models/Car";
import axios from "axios";
import { resolveModuleNameFromCache } from "typescript";

export default function FormOfCars(){
    const [id, setId] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState(0);

    function handleIdChange(event: ChangeEvent<HTMLInputElement>){
        const newValueForId = event.target.value;
        setId(newValueForId);
    }
    
    function handleModelChange(event: ChangeEvent<HTMLInputElement>){
        const newValueForModel = event.target.value;
        setModel(newValueForModel);
    }

    function handleBrandChange(event: ChangeEvent<HTMLInputElement>){
        const newValueForBrand = event.target.value;
        setBrand(newValueForBrand);
    }
    
    function handleYearChange(event: ChangeEvent<HTMLInputElement>){
        const newValueForYear = event.target.value;
        setYear(parseInt(newValueForYear));
    }

   async function handleSave(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault(); //con esto evitamos que el form haga PostBack

        const carToCreate = new Car(id, model, brand, year);

        await CreateCar(carToCreate);

        clearForm();

        window.alert('Car created');

        window.location.reload()
    }

    async function CreateCar(carToCreate: Car){
        await axios.post('http://localhost:3002/cars', carToCreate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function clearForm(){
        setId('');
        setModel('');
        setBrand('');
        setYear(0);
    }

    return (
        <form>
            <p>Create a new car</p>
            <input type="text" placeholder="ID" value={id} onChange={handleIdChange}/>
            <br />
            <input type="text" placeholder="Model" value={model} onChange={handleModelChange} />
            <br />
            <input type="text" placeholder="Brand" value={brand} onChange={handleBrandChange} />
            <br />
            <input type="number" placeholder="Year" value={year} onChange={handleYearChange}/>
            <br />
            <button onClick={handleSave}>Save</button>
        </form>
    );
}
