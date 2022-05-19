import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
import "./loader.css";

export default function Loader(){
  return(
   <div>
    <div className=" center-loader ">
       <Oval
          height="100" 
          width="100" 
          color="#DB5752" 
          ariaLabel="loading"
       />
    </div>
   </div>
  );
}
