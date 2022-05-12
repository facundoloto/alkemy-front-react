import React from "react";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Swal from "sweetalert2";
import img from "./../../img/icon_login.png";
import "bootstrap/dist/css/bootstrap.css";
import "./form.css";

export default function Login() {
  const [getDisplay, setDisplay] = useState(true);
  const [changeType, setChangeType] = useState("password"); //this function like value when it will do click in show password
  const [change, setChange] = useState(true); //it's to evalue when touch show password
  const { register, handleSubmit } = useForm();
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
  //it's a state to save the data of form in a json for send to apirest

  const onSubmit = async function GetFecth(data) {
    console.log(data);
    setDisplay(false);
    //config of requestOptions to fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    //fecth
    try {
      console.log("hola");
      const response = await fetch(
        `http://localhost:3080/auth/login/`,
        requestOptions
      );
      console.log(response.status);
      //if the password and email is the same,data.lenth not is null
      if (response.status === 200) {
        const getResponse = await response.json();
        console.log(getResponse);
        localStorage.setItem("userID", getResponse[0].id);
        localStorage.setItem("name", getResponse[0].name);
        localStorage.setItem("login", true);
        setDisplay(true);

        Swal.fire({
          icon: "success",
          title: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        //rederirection to home if user is loggein
        navigate("/home/");
      } else {
        console.log(response);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email or Password wrong,Try again!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="div-first">
      <div className="center-form">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <img src={img} />{" "}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Email address </Form.Label>{" "}
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />{" "}
            <Form.Text className="text-muted">
              We 'll never share your email with anyone else.{" "}
            </Form.Text>{" "}
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Password </Form.Label>{" "}
            <Form.Control
              type={changeType}
              placeholder="Password"
              {...register("password")}
            />{" "}
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onClick={changeInput}
              label="Check me out"
            />
          </Form.Group>{" "}
          <Button variant="primary" type="submit">
            Submit{" "}
          </Button>{" "}
          <Link to={"/signup/"}>Register new user </Link>{" "}
        </Form>{" "}
      </div>{" "}
    </div>
  );
}
