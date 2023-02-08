import React from 'react';
import { useForm } from "react-hook-form";
import {Senddata} from './Post';

export default function Register(props){

    //intialising the form
    const{
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();


    //getting the data from the forms
    function onSubmit(data){
        const path = "http://localhost:3001/register";
        Senddata(data,path);
        reset();
    }

    return(
            <div class='box0 box1'>
                <form onSubmit={handleSubmit(onSubmit)} class = "registerform">
                    <h1>Register</h1><br></br>
                    <div class="form-floating">
                        <input 
                            type="username" 
                            class="form-control" 
                            id="floatingInput"  
                            placeholder="Username" 
                            name="username" 
                            autoComplete='off'
                            {...register("username",{required: true})}
                        />
                        <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating">
                        <input 
                            type="password" 
                            class="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            name="password" 
                            autoComplete='off'
                            {...register("password",{required: true})}
                        />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-outline-light" type="submit">Register</button>
                </form>
            </div>
    );
}