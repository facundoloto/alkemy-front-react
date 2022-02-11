import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/lastRecord.css'

export default function Latest(){

const [getData,setData] =useState([])
const getBalance=async ()=>{
try{
  let userID=localStorage.getItem("userID")
console.log(userID)
const response=await fetch(`http://localhost:8080/api/v1/home/latest/${userID}`)
const dataServe= await response.json()
return setData(dataServe)
}catch(err){console.log(err)}

}
useEffect(()=>{
getBalance()
},[]) 

const formatDate = (dateNew)=>{
  let date=new Date(dateNew)
  let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
   return formatted_date;
  }
    
return (
<div>
<h5 className='text-center'>Lasted Records</h5>
<div className='center-table'>

<table className="table">
  <thead>
  
    <tr>
      <th scope="col" >Category</th>
      <th scope="col">Concept</th>
      <th scope="col">Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>

    {
    getData.map(function(Data){

    return(
        <tr className='text-secondary'>
        <td>{Data.category}</td>
        <td>{Data.concept}</td>
        <td>{Data.type}</td>
        <td>{Data.amount}</td>
        <td>{formatDate(Data.date)}</td>
      </tr>
    )
    }
)
    }
  </tbody>
</table>
</div>
</div>


)

}