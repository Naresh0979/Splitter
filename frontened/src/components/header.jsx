import React from 'react'
import {NavLink} from 'react-router-dom';
import {Navbar , Nav} from 'react-bootstrap';

import '../styles/landing.css'
export   const Header = (props)=>{
    {console.log(props.user)}
    return (
    //     <nav className = "landingNav fixed-top">
    //     <NavLink to = "/"><h3 className = "landing-name">S P L I T W I S E</h3></NavLink> 
     
     

    // </nav>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <h3 className = "landing-name">S P L I T T E R</h3>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <div className = "float">
      <NavLink to = "/login"><button className = "loginBtn">Log In</button></NavLink>
         <span style={{color:"white"}} >or</span>
         <NavLink to = "/signup"><button className = "SignUp">Sign Up</button></NavLink>
      </div>
  </Navbar.Collapse>
</Navbar>
    )
}


