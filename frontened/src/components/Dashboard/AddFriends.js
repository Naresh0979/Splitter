import React from 'react';
import "../../styles/Dashboard.css";
import {FriendList} from './FriendList';
import {useState} from 'react';
export const AddFriend = (props)=>{
    const [showFriend,setShowFriend]=useState(false);
    function ShowFriend(){
        // this.setState({...this.state,showFriend: !this.state.showFriend});
         setShowFriend(!showFriend);
         //console.log(this.state.showFriend);
    }
    return(
        <div className = "AddFriend">
         
         <div className = "content">
         <div className = "friendHeader" >
            <label htmlFor="">FRIENDS</label>
            <button onClick = {ShowFriend} className = "AddFrnd float-right">+Add</button>
          
         </div>
         <div className = "Friend_List">
               <FriendList/>
         </div>
         </div>

        </div>
    )
}