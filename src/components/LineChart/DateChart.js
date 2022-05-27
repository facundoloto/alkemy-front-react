import React from "react";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import LineChart from "./LineChart";
import "bootstrap/dist/css/bootstrap.css";

function DateChart() {

  const [date, setDate] = useState([]);
  const [gain, setGain] = useState([]);
  const [loader, setLoader] = useState(false);

    const UserData = async () => {
      setLoader(true);
        try {

            let dateArray=[];
            let userID = localStorage.getItem("userID");
            const response = await fetch(`https://backend-kr53.onrender.com/balance/date/${userID}`)
            const data = await response.json();
            
            setDate(data.results);
            date.map(async (item)=>{
             // dateArray.push(item.date.slice(0, -14));
              const requestOptions = {
                method: `POST`,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({"id":`${userID}`,"date":`${item.date}`})
              };
              const response = await fetch(`https://backend-kr53.onrender.com/balance/date`,requestOptions);
              const balanceDate = await response.json();
              console.log(balanceDate.balanceDate.entry);
              dateArray.push({"date":item.date.slice(0, -14),"balance":balanceDate.balanceDate.entry});
            });

            setDate(dateArray);
          
           setGain({
              labels: date.map((item)=>{return item.date}),
              datasets: [
                {
                  label: "Users Gained",
                  data:date.map((item)=>{return item.balance}),
                  backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                  ],
                  borderColor: "black",
                  borderWidth: 2,
                },
              ],
            });
            setLoader(false);
        } catch (err) { console.log(err) }
    }
        useEffect(async () => {
            await UserData();
        }, []);
  return (
    <div className="Chart">
           {
        loader==true ? (
          <Loader />
        ) : ( 
          <div className="bg-light">
      
      </div>
        )
        }
    </div>
  );

};
export default DateChart;
