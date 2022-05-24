import React from "react";
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./loader.css";

export default function Loader(display){
  return(
   <div>
    <div className="loader">
    <TailSpin ariaLabel="loading-indicator" color="black" />
    </div>
   </div>
  );
}
