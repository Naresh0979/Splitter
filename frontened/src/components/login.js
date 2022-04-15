import React from 'react';
import '../styles/signup.css';
import  {Header}  from './header';
import {useState} from 'react';

import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = (props)=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  axios.defaults.withCredentials = true;
  let navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {email,password };

  axios.post('http://localhost:2000/login',userData).then((response) => {
      
      //console.log(response);
      if(response.data.Status === "S"){
        const Data=response.data.data;
        console.log(Data);
        navigate('/Dashboard',{state:Data});
         
      }else if(response.data.Status === "F"){
         alert("Invalid credentials");
      }  
    
    })
   }


    return(
        <div>
            <Header/>
        <div className = "container signup">
      
        <div className = "signup-logo">
      <img  src={require("../images/logo.png")} alt="" />
      </div>


      <div className = "signup-form">
        <h3>WELCOME TO SPLITTER</h3>
        <label htmlFor="">Email address</label>
        <form  onSubmit={handleLogin}>
        <input id = "email" value={email}
                onChange={(e) => setEmail(e.target.value)} className = "form-control" type="text"/>

        <label htmlFor="">Password</label>
        <input id = "password" value={password}
                onChange={(e) => setPassword(e.target.value)} className = "form-control" type="text"/>

      {props.sts && <p style = {{color: "red"}}><i class="fas fa-exclamation-circle"></i> Invalid Username or Password</p>}
       <button  className = "btn">Log In</button>
       </form>
     </div>
     </div>
     </div>
    )
} 