import React from 'react';
import "../../styles/Dashboard.css";
import {FriendList} from './FriendList';
import {useState,useEffect} from 'react';
import Friend from "../Dashboard/popups/Friend";
export const AddFriend = (props)=>{
var [showFriend,setShowFriend]=useState(false);
//console.log(showFriend);
// useEffect(() => {
       
//  });
//console.log(props.username.username);
 
    return(
        <div className = "AddFriend">
         
         <div className = "content">
         <div className = "friendHeader" >
            <label htmlFor="">FRIENDS</label>
            <button onClick = {()=>setShowFriend(!showFriend) } className = "AddFrnd float-right">+Add</button>
          
         </div>
         {
             
             showFriend ?<Friend user={props.username}   />:<span></span>

         }
      
         <div className = "Friend_List">
               <FriendList/>
         </div>
         </div>

        </div>
    )
}