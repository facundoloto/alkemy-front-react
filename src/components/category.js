import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Dashboard from './dashboard';
import NavBar from './navBar'
import '../css/form.css'

export default function Category() {
const { register, handleSubmit } = useForm();
//it's a state to save the data of form in a json for send to apirest
const onSubmit= async function(data){
    console.log(data)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(data)
        };
        console.log(data)
  //fecth
  try{
    //config of requestOptions to fetch
    const response = await fetch("http://localhost:8080/api/v1/category/", requestOptions);
    console.log(response)
    if (response.status!=200){
        alert("name is in use,please change name")
    }
    else{
        alert("category add")
    }
   
    
  }catch(err){
   console.log(err)
  }

  }
  return (
    <div>
    <NavBar />
    <Dashboard/>
    <div className='center-form'>
    <Form onSubmit={handleSubmit(onSubmit)}>
    <h4 className='text-secondary text-center'>Add Category</h4>
<Form.Group className="mb-3" controlId="formBasicEmail">

<Form.Control type="text" placeholder="enter category" {...register("name")}/>
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
    </div>
    </div>

    );
  }
  