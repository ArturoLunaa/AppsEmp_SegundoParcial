import { ChangeEvent, MouseEvent, useState } from "react";
import Sale from "../models/Sale";
import axios from "axios";

export default function FormOfSales(){
    const [id, setId] = useState('');
    const [amount, setAmount] = useState(0);

    function handleIdChange(event: ChangeEvent<HTMLInputElement>){
        const newValueForId = event.target.value;
        setId(newValueForId);
    }
    
    function handleAmountChange(event: ChangeEvent<HTMLInputElement>){
        const newValueForAmount = event.target.value;
        setAmount(parseInt(newValueForAmount));
    }

   async function handleSave(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault(); //con esto evitamos que el form haga PostBack

        const saleToCreate = new Sale(id, amount);

        await CreateSale(saleToCreate);

        clearForm();

        window.alert('Car created');

        window.location.reload()
    }

    async function CreateSale(saleToCreate: Sale){
        await axios.post('http://localhost:3001/sales', saleToCreate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function clearForm(){
        setId('');
        setAmount(0);
    }

    return (
        <div className="container-fluid mt-5">
        <div className="row align-items-center justify-content-center fullheight">
            <div className="col-10 col-sm-8 col-md-6 col-lg-5">
                <div className="card shadow-lg card--bg-gray card--customized">
                    <div className="card-body">
                        <h1 className="card-title">Create a new Sale</h1>
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
                                    <label htmlFor="amount" className="form-label">Amount</label>
                                </div>
                                <input id="amount" type="number" placeholder="" value={amount} onChange={handleAmountChange} className="form-control"/>
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
