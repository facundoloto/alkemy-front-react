import React from 'react'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/balance.css'
import '../css/form.css'

export default function Balance(){
const [getData,setData] =useState([])
let entry
let egress
let balance

const getBalance=async ()=>{
try{
  let userID=localStorage.getItem("userID")
  console.log(userID)
  const response=await fetch(`http://localhost:8080/api/v1/home/balance/${userID}`)
  const dataServe= await response.json()
  return setData(dataServe)}
catch(err){console.log(err)}

}

useEffect(()=>{
getBalance()
},[]) 

getData.map(function(Data){
entry=Data.entry
egress=Data.egress
balance=Data.balance
}
)

return (
<div className="center-card">
<div className="card text-white bg-info mb-3">
  <div className="card-header">Balance</div>
  <div className="card-body">
    <h5 className="card-title">{balance}</h5>
  </div>
</div>
<div className="card text-white bg-success mb-3">
  <div className="card-header">ingresos total</div>
  <div className="card-body">
    <h5 className="card-title">{entry}</h5>
  </div>
</div>
<div className="card text-white bg-danger mb-3">
  <div className="card-header">egresos total</div>
  <div className="card-body">
    <h5 className="card-title">{"-"+egress}</h5>
  </div>
</div>
</div>
)

}