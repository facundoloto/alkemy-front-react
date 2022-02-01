import React from 'react';
import Dashboard from "../components/dashboard";
import Balance from './balance';
import "../css/home.css"
import Latest from "../components/lastRecord"
import NavBar from './navBar';
export default function Home(){
return(
<div className='center-div'>
<div className='display'>
<NavBar />
</div>

<div >
<Dashboard/>
<div className='balance'>
<Balance />
</div>
<div className="table">
<Latest />
</div>
</div>
</div>
)
}