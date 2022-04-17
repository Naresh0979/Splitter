import React from 'react';
import '../styles/signup.css';
//import { withRouter } from "react-router-dom";
import  {Header}  from './header';
import {useState} from 'react';  

import { useNavigate } from "react-router-dom";
import axios from "axios";

// import {instance} from '../utils/AxiosConfig';
 
 export const SignUp = (props)=>{
   axios.defaults.withCredentials = true;
   let navigate=useNavigate();
   const [username,setUsername]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   return(
      <div>
      <Header/>
      <div className = "container signup">
      
      <div className = "signup-logo">
    <img  src={require("../images/logo.png")} alt=""/>
    </div>


    <div className = "signup-form">
      <h3>INTRODUCE YOURSELF</h3>
      <label htmlFor="">Hi there! My name is</label>

      <input id = "username" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className = "form-control" type="text" required/>

      <label htmlFor="">Here’s my email address: </label>

      <input id = "email" value={email}
      onChange={(e) => setEmail(e.target.value)}
      className = "form-control" type="text" required/>

      <label htmlFor="">And here’s my password:  </label>

      <input id = "password"  value={password}
      onChange={(e) => setPassword(e.target.value)}
      className = "form-control" type="text" required/>

     <button onClick = {()=>{
      
       if(password == undefined || email == undefined || username == undefined){
          alert("form is Incomplete");
       }
   else{
         const userData = { username, email, password };
     
         axios
           .post("http://localhost:2000/signup", userData)
           .then((response) => {
             
          console.log(response.data.Status);
          if(response.data.Status == "S"){
             alert("successful Registerd");
             const Data=response.data.data;
        console.log(Data);
        navigate('/Dashboard',{state:Data});
             
          }else if(response.data.Status == "F"){
             alert("username or Email Id Already exist");
          }
       })}
     }} className = "btn">Sign me up!</button>
     
   </div>



   </div>

   </div>
   )
} 


