import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Dashboard from './dashboard';
import '../css/form.css'
import Swal from 'sweetalert2'
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
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'that name is in use,change for other!',
      })
}
else{
    Swal.fire({
        icon: 'success',
        title: 'category add',
        showConfirmButton: false,
        timer: 1500
      })
}


}catch(err){
console.log(err)
}

}
return (
<div>
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
