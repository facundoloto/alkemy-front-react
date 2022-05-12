import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./balance.css";

export default function Balance() {

  const [getEntry, setEntry] = useState(0);
  const [getEgress, setEgress] = useState(0);
  const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    try {

      let userId = localStorage.getItem("userID");
      const response = await fetch(`http://localhost:3080/balance/${userId}`);
      const dataServe = await response.json();

      setEgress(dataServe.balance.egress);
      setEntry(dataServe.balance.entry);
      setBalance(dataServe.balance.balance);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className="center-card balance ">
      <div className="card text-white bg-balance mb-3 ">
        <div className="card-header">Balance</div>
        <div className="card-body">
          <h5 className="card-title">${balance}</h5>
        </div>
      </div>
      <div className="card text-white bg-entry mb-3">
        <div className="card-header">ingresos total</div>
        <div className="card-body">
          <h5 className="card-title">${getEntry}</h5>
        </div>
      </div>
      <div className="card text-white bg-egress mb-3">
        <div className="card-header">egresos total</div>
        <div className="card-body">
          <h5 className="card-title">${"-" + getEgress}</h5>
        </div>
      </div>
    </div>
  );
};
