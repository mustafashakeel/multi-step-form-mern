import React, { useState } from 'react';

//  Create a form 
// Email & password as inputs 
//  Submit Event 
// HandleChange event 



const BasicForm = () => {
    const [state, setState] = useState({ email: "", password: "" });

    const handleInputChange = (event) => {
        setState(
            { [event.target.name]: event.target.value }
        );

    };
    const handleSubmit = (event) => {


        console.log(" submit ", state);


        event.preventDefault();



    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <h4>Basic Form</h4>
                </div>
            </div>
            <div className="row">
                <div className='col-sm'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id="email" name="email" className='form-control' onChange={handleInputChange} />
                </div>
                <div className='col-sm'>
                    <label htmlFor='password'>Password</label>
                    <input type="text" id="password" name="password" className='form-control' onChange={handleInputChange} />
                </div>
                <div className='col-sm'>
                    <button type="submit" className='btn btn-primary mt-3'>CreateUser</button>
                </div>
            </div>
        </form>
    );
}
export default BasicForm;