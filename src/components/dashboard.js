import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import img_logout from '../img/box-arrow-in-left.svg'
import img from '../img/icon_login.png'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/dashboard.css'
import '../css/nav.css'
function Dashboard(){
const navigate=useNavigate() //this function to logout user
const logout=()=>{
localStorage.clear()
navigate("/")
}
return(
<div>
<Navbar className="displayNav bg-nav" collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand className='text-light'><img className='img' src={img}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link to={"/"} className="nav-link text-white" >
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
    <button className='btn bg-egress' onClick={logout}> <img src={img_logout} alt="Bootstrap" width="30" height="30" /><span className="ms-2">logout</span></button>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white dashboard" > 
<Navbar.Brand ><img className='img' src={img}/></Navbar.Brand>
    <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item"> 
       <Link to={"/"} className="nav-link text-white" >
        <span className="ms-2">Home</span>
        </Link>
       </li>
        <li className="nav-item"> 
        <Link to={"/category/"} className="nav-link text-white">
        <span className="ms-2">Category</span>
        </Link> 
        </li>
        <li className="nav-item"> 
        <Link to={"/show/"} className="nav-link text-white">
        <span className="ms-2">Show Record</span>
        </Link> 
        </li>
        <li className="nav-item">
        <Link to={"/record/"} className="nav-link text-white">
        <span className="ms-2"></span>Create Record</Link> 
        </li>
    </ul>
   <button className='btn bg-egress' onClick={logout}> <img src={img_logout} alt="Bootstrap" width="30" height="30" /><span className="ms-2">logout</span></button>
</div>
</div>

)
}

export default Dashboard;