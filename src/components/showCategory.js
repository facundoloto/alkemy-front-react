import React from 'react'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Category(){
const [getData,setData] =useState([])
try{
    const getCategory=async ()=>{
        const response=await fetch(`http://localhost:8080/api/v1/category`)
        const dataServe= await response.json()
        setData(dataServe)}
        useEffect(()=>{
            getCategory()
            },[]) 
        return(getData)
}catch(err){console.log(err)}

}

