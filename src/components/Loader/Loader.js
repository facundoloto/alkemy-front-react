import React from "react";
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./loader.css";

export default function Loader() {
  return (
    <div>
      <div className="loader">
        <TailSpin ariaLabel="loading-indicator" color="#00CDAC" height={50} width={50} />
      </div>
    </div>
  );
}
