import React from 'react'
import { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from "../components/dashboard";
import { useNavigate} from "react-router-dom";
import { Button } from 'react-bootstrap';
import "../css/table.css"
import Swal from 'sweetalert2';

export default function Show(){

const [getData,setData] =useState([])
const [getType,setType] =useState("entry")
let userID=localStorage.getItem("userID")
const navigate=useNavigate() 

const getRecord=async (type)=>{
try{
setType(type)
let Data={"userID":userID,"type":type}
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(Data)
    };
const response=await fetch(`http://localhost:8080/api/v1/record/type/`,requestOptions)
const data=await response.json()
setData(data)
}catch(err){console.log(err)}
}

const deleteRecord= async function (id){
try{
  console.log(id)
const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"id":id,"userID":userID,"type":"ingreso"})
    };
if(window.confirm("do you want delete this record?")){
    const response=await fetch(`http://localhost:8080/api/v1/record/delete/`,requestOptions)
    const get=await response.json()
    setData(get)}
    getRecord(getType)
    Swal.fire({
      icon: 'success',
      title: 'success',
      showConfirmButton: false,
      timer: 1500
    })
}catch(err){console.log(err)}}

const update=(id)=>{
  localStorage.setItem("recordID",id)
  navigate("/update/")
}

useEffect(()=>{
  getRecord()
  },[]) 

return (
<div>
<Dashboard/>
<div className="center-button">
<Button variant="outline-success" size="sm" onClick={()=>getRecord("entry")} >
      entry
    </Button>
    <Button variant='outline-danger' size="sm" onClick={()=>getRecord("egress")}>
      egress
    </Button>
  </div>
<div className='center-form'>
<div className="table-responsive">
<table className="table">
  <thead>
    <tr>
      <th scope="col">Category</th>
      <th scope="col">Concept</th>
      <th scope="col">Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   
    {
getData.map(function(Data){
return(
<tr key={Data.id}>
<td>{Data.category}</td>
<td>{Data.concept}</td>
<td>{Data.type}</td>
<td>{Data.amount}</td>
<td>{Data.date}</td>
<td><button onClick={()=>update(Data.id)}>Edit</button></td>
<td><Button onClick={()=>deleteRecord(Data.id)}>delete</Button></td>
</tr>)})}
</tbody>
</table>
</div>
</div>
</div>
)
}