import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import Dashboard from "../Dashboard/dashboard";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";
import "./record.css";

export default function Record() {
  //it's a state to save the data of form in a json for send to apirest
  const { register, handleSubmit, control } = useForm();
  const [Category, setCategories] = useState([]);
  const [Types, setTypes] = useState([]);

  const Categories = async () => {
    try {
      const response = await fetch(`https://backend-kr53.onrender.com/categories`);
      const dataServe = await response.json();
      setCategories(dataServe.result);
    } catch (err) {
      console.log(err);
    }
  };

  const Type = async () => {
    try {
      const response = await fetch(`https://backend-kr53.onrender.com/type`);
      const dataServe = await response.json();
      setTypes(dataServe.result);
    } catch (err) {
      console.log(err);
    }
  };

  //it's a state to save the data of form in a json for send to apirest
  const formatDate = (date) => {
    let formatted_date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return formatted_date;
  };

  const onSubmit = async function GetFecth(data) {
    try {

      const userId = localStorage.getItem("userID");
      const date = formatDate(data.date);
      const Data = {
        userId: userId,
        categoriesId: parseInt(data.categoryId),
        concept: data.concept,
        typeId: parseInt(data.typeId),
        amount: data.amount,
        date: date,
      };
      //config of requestOptions to fetch
      const requestOptions = {
        method: `POST`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Data),
      };
      //fecth
      const response = await fetch(
        `https://backend-kr53.onrender.com/record/add/`,
        requestOptions
      );
      if (response.status != 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "try again!",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "record save",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Type();
    Categories();
  }, []);

  const resultCategories = Category;
  const resultTypes = Types;

  return (
    <div>
      <Dashboard />
      <div className="div-first text-secondary animate__animated animate__fadeInUp">
      <div className="center-form">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              {...register("categoryId")}
            >
              {resultCategories.map(function (Data) {
                return <option value={Data.id}>{Data.name}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Concept</Form.Label>
            <Form.Control
              type="text"
              placeholder="Normal text"
              required
              {...register("concept")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              {...register("typeId")}
            >
              {resultTypes.map(function (Data) {
                return <option value={Data.id}>{Data.name}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Normal text"
              {...register("amount")}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date:</Form.Label>
            <Controller
              name="date"
              control={control}
              rules={{ required: true }}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  id="date"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  dateFormat="yyyy/MM/dd"
                  maxDate={new Date()}
                  placeholderText="enter date"
                  required
                />
              )}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
    </div>
  );
}
