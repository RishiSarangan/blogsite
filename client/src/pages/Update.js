import React from 'react';
import { useForm } from "react-hook-form";
import {ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Senddata} from './Post';

export default function Update(){

    //color schemes
    const theme = createTheme({
        palette: {
          primary: {
            main: '#144272',
          }
        },
      });

    //intialising the form
    const{
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    //getting the data from the forms
    function onSubmit(data){
        const path = "http://localhost:3001/update";
        Senddata(data,path);
        reset();
    }

    return(
        <div class='box0 box1'>
                <form onSubmit={handleSubmit(onSubmit)} class = "registerform">
                    <h1>Update</h1><br></br>
                    <div class="form-floating">
                        <input 
                            type="title" 
                            class="form-control" 
                            id="floatingInput"  
                            placeholder="Title" 
                            name="title" 
                            autoComplete='off'
                            {...register("title",{required: true})}
                        />
                        <label for="floatingInput">Title</label>
                    </div>
                    <div class="form-floating">
                        <textarea
                            type="post" 
                            class="form-control" 
                            id="floatingpost" 
                            placeholder="post" 
                            name="post" 
                            autoComplete='off'
                            {...register("post",{required: true})}
                        />
                        <label for="floatingpost">Post</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-outline-light" type="submit">Update</button>
                </form>
        </div>
    );
}