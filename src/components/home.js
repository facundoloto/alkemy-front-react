import React from 'react';
import Dashboard from "../components/dashboard";
import Balance from './balance';
import "../css/home.css"
import Latest from "../components/lastRecord"
export default function Home(){
return(
<div className='center-div'>
<Dashboard/>
<div className='center-balance'>
<Balance />
</div>
<div className="center-table" >
<Latest/>
</div>
</div>
)
}