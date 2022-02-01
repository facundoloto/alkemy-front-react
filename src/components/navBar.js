import React from 'react'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/nav.css'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"


export default function NavBar(){
    const navigate=useNavigate() //this function to logout user
    const logout=()=>{
    localStorage.clear()
    navigate("/")
    }
return(
  <Navbar className="display "collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Alkemy</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link to={"/"} className="nav-link" aria-current="page">
        <span className="ms-2">Home</span>
        </Link>
        <Link to={"/category/"} className="nav-link text-white">
        <span className="ms-2">Category</span>
        </Link> 
        <Link to={"/show/"} className="nav-link text-white">
        <span className="ms-2">Show Record</span>
        </Link> 
        <Link to={"/record/"} className="nav-link text-white">
        <span className="ms-2"></span>Create Record</Link> 
    </Nav>
    <button className='btn btn-danger' onClick={logout}><span className="ms-2">logout</span></button>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
  }
