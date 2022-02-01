import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import img_logout from '../img/box-arrow-in-left.svg'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/dashboard.css'
function Dashboard(){
const navigate=useNavigate() //this function to logout user
const logout=()=>{
localStorage.clear()
navigate("/")
}
return(
<div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white dashboard" > 
<h1 className='text-left text-light'>Alkemy</h1>
    <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item"> 
       <Link to={"/"} className="nav-link" aria-current="page">
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
   <button className='btn btn-danger' onClick={logout}> <img src={img_logout} alt="Bootstrap" width="30" height="30" /><span className="ms-2">logout</span></button>
</div>
)
}

export default Dashboard;