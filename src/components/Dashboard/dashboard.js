import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap";
import img_logout from './../../img/box-arrow-in-left.svg';
import img from './../../img/icon_login.png';
import 'bootstrap/dist/css/bootstrap.css';
import './dashboard.css';
import './nav.css';

function Dashboard() {
  const navigate = useNavigate() //this function to logout user
  const name = localStorage.getItem("name");
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>

      <Navbar className="displayNav bg-nav" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand className='text-light'><img className='img' src={img} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <h3 className="nav-link text-white" id="name">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg> {name}
            </h3>
              <Link to={"/"} className="nav-link text-white" >
                <span className="ms-2">Home</span>
              </Link>
              <Link to={"/show/"} className="nav-link text-white">
                <span className="ms-2">Show Record</span>
              </Link>
              <Link to={"/record/"} className="nav-link text-white">
                <span className="ms-2">Create Record</span></Link>
            </Nav>
            <button className='btn btn-egress' onClick={logout}> <img src={img_logout} alt="Bootstrap" width="30" height="30" /><span className="ms-2">logout</span></button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white dashboard" >
        <Navbar.Brand ><img className='img' src={img} /></Navbar.Brand>
        <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <h3 className="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg> {name}
            </h3>
          </li>
          <hr/>
          <li className="nav-item">
            <Link to={"/"} className="nav-link text-white" >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
                <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
              <span className="ms-2">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/show/"} className="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
              <span className="ms-2">Show Record</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/record/"} className="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
              <span className="ms-2"></span>Create Record</Link>
          </li>
        </ul>
        <button className="btn btn-egress" onClick={logout}> <img src={img_logout} alt="Bootstrap" width="30" height="30" /><span className="ms-2">logout</span></button>
      </div>
    </div>
  )
};

export default Dashboard;
