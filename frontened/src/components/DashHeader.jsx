import React from 'react'
import {NavLink} from 'react-router-dom';

import '../styles/dashHeader.css'
export  const DashHeader = (props)=>{
    
    return (
        <nav className = "DashboardNav fixed-top">
        <h3 className = "landing-name">S P L I T T E R</h3>
     
     <div className = "Dashfloat">
     <NavLink to = "/login"><button className = "logoutbtn"
    //   onClick = {()=>{
    //    localStorage.removeItem('jwtToken');
    //  }}
     >Log Out</button></NavLink>
      
      {console.log("inside DashHeader")}
     
      <img className = "profile" src={require('../images/person-profile.png')} alt="" srcset=""/>
       <label htmlFor="">{props.username}</label> 
      
     </div>
        

    </nav>
    )
}



