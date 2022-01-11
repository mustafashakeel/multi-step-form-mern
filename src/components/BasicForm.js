import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

//  Create a form 
// Email & password as inputs 
//  Submit Event 
// HandleChange event 



const BasicForm = () => {

    // const { register, handleSubmit, error } = useForm(); 
    const { register, formState: { errors }, handleSubmit } = useForm();



    const handleSubmitOne = (data) => {


        console.log(" data  ", data);






    }

    return (
        <form onSubmit={handleSubmit(handleSubmitOne)}>
            <div className='row'>
                <div className='col-sm'>
                    <h4>Basic Form</h4>
                </div>
            </div>
            <div className="row">
                <div className='col-sm'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id="email" name="email" className='form-control' {...register("email", { required: true, maxLength: 20 })} />
                    {errors.email?.type === 'required' && "First name is required"}

                </div>
                <div className='col-sm'>
                    <label htmlFor='password'>Password</label>
                    <input type="text" id="password" name="password" className='form-control' {...register("password", { required: true, maxLength: 20 })} />
                    {errors.password?.type === 'required' && "First name is required"}
                </div>
                <div className='col-sm'>
                    <button type="submit" className='btn btn-primary mt-3'>CreateUser</button>
                </div>
            </div>
        </form>
    );
}
export default BasicForm;