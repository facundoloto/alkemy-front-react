import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
import img from "./../../img/icon_login.png";
import "bootstrap/dist/css/bootstrap.css";
import "../Loader/loader.css";
import "./form.css";

export default function Signup() {

  const [changeType, setChangeType] = useState("password"); //this function like value when it will do click in show password
  const [change, setChange] = useState(true); //it's to evalue when touch show password
  const { register, handleSubmit } = useForm();
  const [loader, setLoader] = useState("none");
  const navigate = useNavigate();

  const changeInput = () => {
    //function for when the user will touch in show password
    if (change === true) {
      setChangeType("text");
      setChange(false);
    } else {
      setChangeType("password");
      setChange(true);
    }
  };
 

  const onSubmit = async function GetFecth(data) {
    try {
      setLoader("block");
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      //fecth
      const response = await fetch(
       `https://backend-kr53.onrender.com/auth/register/`,
        requestOptions
      );
      console.log(response);
      //if the password and email is the same,data.lenth not is null
      if (response.status === 200) {
        setLoader("none");
        Swal.fire({
          icon: "success",
          title: "User create",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Try again!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="div-first text-secondary animate__animated animate__fadeInUp">
    <div className="center-form">
    <div className={loader}>
        <Loader  />
        </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <img src={img} />
        <Form.Text>Register new user!</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            {...register("name")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            {...register("email")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={changeType}
            required
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onClick={changeInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
    </div>
  );
}
