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
        <div className="container-fluid mt-5">
        <div className="row align-items-center justify-content-center fullheight">
            <div className="col-10 col-sm-8 col-md-6 col-lg-5">
                <div className="card shadow-lg card--bg-gray card--customized">
                    <div className="card-body">
                        <h1 className="card-title">Create a new car</h1>
                        <form id="myform">
                            <div className="mb-2 control-wrapper">
                                <div className="label-container">
                                    <label htmlFor="ID" className="form-label">ID</label>
                                </div>
                                <input id="ID" type="text" className="form-control" placeholder="ID" value={id} onChange={handleIdChange}/>
                                <div className="display-msg"></div>
                            </div>
                            <div className="mb-2 control-wrapper">
                                <div className="label-container">
                                    <label htmlFor="model" className="form-label">Model</label>
                                </div>
                                <input id="model" type="text" className="form-control" value={model} onChange={handleModelChange} />
                                <div className="display-msg"></div>
                            </div>
                            <div className="mb-2 control-wrapper">
                                <div className="label-container">
                                    <label htmlFor="brand" className="form-label">Brand</label>
                                </div>
                                <input id="brand" className="form-control" type="text" value={brand} onChange={handleBrandChange} />
                                <div className="display-msg"></div>
                            </div>
                            <div className="mb-2 control-wrapper">
                                <div className="label-container">
                                    <label htmlFor="year" className="form-label">Year</label>
                                </div>
                                <input id="year" type="number" placeholder="" value={year} onChange={handleYearChange} className="form-control"/>
                                <div className="display-msg"></div>
                            </div>
                            <button onClick={handleSave} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
