import React from 'react'
import showCategory from './showCategory'
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Form} from 'react-bootstrap';
import { useForm,Controller } from "react-hook-form";
import { useState,useEffect } from 'react';
import '../css/form.css'
import Dashboard from "../components/dashboard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Update() {
const userID=localStorage.getItem('userID')
const recordID=localStorage.getItem('recordID')
const {register, handleSubmit,control } = useForm();
const getCategory=showCategory()
const [getData,setData] =useState([])
const getServe=async ()=>{
  try{
  const requestOptions = {
    method:`POST`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"id":recordID,"userID":userID})
  };
const response=await fetch(`http://localhost:8080/api/v1/record/get`,requestOptions)
const dataServe= await response.json()
setData(dataServe)
  }
  catch(err){console.log(err)}
}
useEffect(()=>{
  getServe()
  },[])
const formatDate = (date)=>{
  let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
   return formatted_date;
  }
const onSubmit= async function GetFecth(data){
  try{
    console.log(data.categoryID)
    const date=formatDate(data.date);
  
    const Data={
     "id":recordID,"userID":userID ,"categoryID":data.categoryID,"concept":data.concept,"amount":data.amount,"date":date
    }
    console.log(Data)
  //config of requestOptions to fetch
  const requestOptions = {
  method:`PUT`,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Data)
  };
  //fecth
  const response = await fetch(`http://localhost:8080/api/v1/record/update`, requestOptions);
  console.log(response)
  alert("record save")

  }
catch(err){console.log(err)}
   
   }
  
return (
<div>
<Dashboard/>
<div className='center-form'>
<Form onSubmit={handleSubmit(onSubmit)}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Category</Form.Label>
<Form.Select aria-label="Default select example" {...register("categoryID")}>
{getCategory.map(function(Data){
  return(<option value={Data.id}>{Data.category}</option>)})
  }
</Form.Select>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Concept</Form.Label>
<Form.Control type="text" placeholder="Normal text"  {...register("concept")} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Amount</Form.Label>
<Form.Control type="text" placeholder="Normal text"  {...register("amount")}/> 
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Date:</Form.Label>
<Controller
name="date"
     control={control}
     rules={{ required: true }}
     defualtValue={false}
     render={({ field }) => (<DatePicker onChange={(e)=>field.onChange(e)}
     selected={field.value}
     dateFormat='yyyy/MM/dd'
     maxDate={new Date()}
     placeholderText='enter date'
     />)}
/>
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
</div>
</div>
);
}
