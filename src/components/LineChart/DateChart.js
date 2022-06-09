import React from "react";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import "./DateChart.css";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";

export default function DateChart() {
  const [loader, setLoader] = useState(false);
  const [date, setDate] = useState([]);

  const getDate = async () => {
    try {
      setLoader(true);
      let userId = localStorage.getItem("userID");
      const responseDate = await fetch(
        `https://backend-kr53.onrender.com/balance/date/${userId}`
      );
      const data = await responseDate.json();
      setDate(data.balanceDate);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    getDate();
  }, []);

  let gain = {
    labels: date.map((item) => item.date.slice(0, -14)),
    datasets: [
      {
        label: "Gain per Date",
        data: date.map((item) => item.balance),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      {loader == true ? (
        <Loader />
      ) : (
        <div className="bg-chart text-light animate__animated animate__fadeInUp">
          <BarChart chartData={gain} />
        </div>
      )}
    </div>
  );
}
