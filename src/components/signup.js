import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import img from '../img/icon_login.png'
import '../css/form.css'

export default function Signup() {
 
const [changeType,setChangeType] = useState('password');//this function like value when it will do click in show password
const [change,setChange] = useState(true);//it's to evalue when touch show password 
const changeInput=()=>{ //function for when the user will touch in show password 
if(change===true){ 
setChangeType('text')
setChange(false)
}else{
setChangeType('password')
setChange(true)
}
}
//it's a state to save the data of form in a json for send to apirest
const { register, handleSubmit } = useForm();
const navigate=useNavigate() 
const onSubmit= async function GetFecth(data){
  try{
    console.log(data)
    //config of requestOptions to fetch
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
    };
    //fecth
    const response = await fetch(`http://localhost:8080/api/v1/login/signup/`, requestOptions);
    console.log(response)
    //if the password and email is the same,data.lenth not is null
    if(response.status===200){
  alert("user create")
    //rederirection to home if user is loggein
    navigate("/")
    }
  }catch(err){
console.log(err)
  }
 
  }
  
  return (
    <div className='center-form'>
  
    <Form onSubmit={handleSubmit(onSubmit)}>
    <img src={img} />
      <Form.Text>
    Register new user!
    </Form.Text>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" {...register("name")}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" {...register("email")}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type={changeType} placeholder="Password" {...register("password")}/> 
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" onClick={changeInput} />
    </Form.Group>
    <Button variant="primary" type="submit">
    Save
    </Button>
    </Form>
    </div>
    );
}

