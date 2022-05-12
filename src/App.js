import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Signup from "./components/Login/signup";
import Home from "./components/Home/home";
import Record from "./components/Record/record";
import ShowRecord from "./components/Record/showRecord";
import ProtectedRoutes from "./components/protected";
import ProtectedLogin from "./components/protectedLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLogin />}>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup/" element={<Signup />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route exact path="/home/" element={<Home />}></Route>
            <Route exact path="/record/" element={<Record />}></Route>
            <Route exact path="/show/" element={<ShowRecord />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
