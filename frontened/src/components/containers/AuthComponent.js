import React from 'react';
import {instance} from '../utils/AxiosConfig';
// import { withRouter } from "react-router-dom";
// import {userActionCreator} from "../redux/actionCreator/userAction";
// import { store } from "../redux/store";
// import { mathActionCreator } from '../models/actionCreators/mathactioncreator';
// import { store } from '../models/store';
import {useNavigate} from 'react-router';
import { useState,useEffect } from 'react';

export default function AuthComponent() {
    let navigation =useNavigate();
    const [user,setUser]=useState();
    const jwt = localStorage.getItem('jwtToken');
    //  if(!jwt){
    //      navigation('/login');
     
    useEffect(()=>{
        instance.get('/getUser', {headers : {Authorization: `Bearer ${jwt}`}}).then(res => {
            console.log("and here Iam");
           console.log(res) ;
           setUser(res.data.userdata.doc);
           localStorage.username = res.data.userdata.doc.username;
           // user = res.data.userdata.doc;
           
            
           
        }).catch(err =>{
            localStorage.removeItem('jwtToken');
            navigation('/login');
        });
        
       }
    )
     

  return (
    <div>
         {console.log("hello",user)}
         {
             user ===undefined ?<div>
             <h1>loading..........</h1>
         </div>: <div>
                {this.props.children}
            </div>
         }
      
    
    </div>
  )
}

 