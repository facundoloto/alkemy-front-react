import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./components/login";
import Signup from "./components/signup";
import Home from './components/home';
import Category from './components/category'
import Record from "./components/record"
import Update from "./components/update"
import ShowRecord from "./components/ShowRecord"
import ProtectedRoutes from "./components/protected";
import ProtectedLogin from "./components/protectedLogin"
    function App() {
      return (
        <div>
          <BrowserRouter>
      
            <Routes>
            <Route  element={<ProtectedLogin/>}>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/signup/" element={<Signup/>} />
            </Route>
           
            <Route element={<ProtectedRoutes/>}>
             <Route exact path="/home/" element={<Home/>}></Route>
             <Route exact path="/category/" element={<Category/>}></Route>
             <Route exact path="/record/" element={<Record/>}></Route>
             <Route exact path="/show/" element={<ShowRecord/>}></Route>
             <Route exact path="/update/" element={<Update/>}></Route>
            </Route>
            </Routes>

          </BrowserRouter>
   
           
        </div>
      );
    }
    
    export default App;


