import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import img from '../img/icon_login.png'
import '../css/form.css'

export default function Login() {
localStorage.clear()
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
  console.log(data)
  //config of requestOptions to fetch

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
      };
      //fecth
      try{
      console.log("hola")
      const response = await fetch(`http://localhost:8080/api/v1/login/`, requestOptions);
      const getResponse= await response.json();
      console.log(getResponse)
      //if the password and email is the same,data.lenth not is null
      if(getResponse.length===1){
      localStorage.setItem("userID",getResponse[0].id)
      localStorage.setItem("name",getResponse[0].name)
      localStorage.setItem("login",true)
      //rederirection to home if user is loggein
      navigate("/home/")
      }

  }catch(err){console.log(err)}
 
  }
  
return (
<div className='center-form'>
<Form onSubmit={handleSubmit(onSubmit)}>
<img src={img}/>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" {...register("email")}/>
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type={changeType} placeholder="Password" {...register("password")}/> 
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" onClick={changeInput} label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
<Link to={"/signup/"}>
Register new user
</Link>
</Form>
</div>
);
}