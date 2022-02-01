import React from 'react'
import showCategory from './showCategory'
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Form} from 'react-bootstrap';
import { useForm,Controller } from "react-hook-form";
import '../css/form.css'
import Dashboard from "../components/dashboard";
import {useNavigate} from "react-router-dom";
import NavBar from './navBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/record.css"
export default function Record() {
//it's a state to save the data of form in a json for send to apirest
const {register, handleSubmit,control } = useForm();
const getData=showCategory()
const navigate=useNavigate()
if(getData==null){ //if there aren't category the form to do records 'it will not be render
alert("add category before of create records")
return(
  navigate("/")
)
}
else{
  const formatDate = (date)=>{
    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
     return formatted_date;
    }

const onSubmit= async function GetFecth(data){
  try{
    console.log(data.amount)
   
      
      const userID=localStorage.getItem('userID')
      const date=formatDate(data.date);
      const Data={
      "userID":userID ,"category":data.categoryID,"concept":data.concept,"type":data.type,"amount":data.amount,"date":date
      }
      console.log(Data)
    //config of requestOptions to fetch
    const requestOptions = {
    method:`POST`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Data)
    };
    //fecth
    const response = await fetch(`http://localhost:8080/api/v1/record/`, requestOptions);
    console.log(response)
    alert("record save")
    }catch(err){console.log(err)}
   
   }
return (
<div>
<Dashboard/>
<NavBar />
<div className='center-form'>
<Form onSubmit={handleSubmit(onSubmit)}>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Category</Form.Label>
<Form.Select aria-label="Default select example" {...register("categoryID")}>
{getData.map(function(Data){return(<option value={Data.id}>{Data.category}</option>)})}
</Form.Select>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Concept</Form.Label>
<Form.Control type="text" placeholder="Normal text" {...register("concept")} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Type</Form.Label>
<Form.Select aria-label="Default select example" {...register("type")}>
<option value="entry">entry</option>
<option value="egress">egress</option>
</Form.Select>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Amount</Form.Label>
<Form.Control type="text" placeholder="Normal text" {...register("amount")}/> 
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Date:</Form.Label>
<Controller
name="date"
     control={control}
     rules={{ required: true }}
     defaultValue={null}
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

}