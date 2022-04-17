import React from 'react';
// import {connect} from 'react-redux';
 import {DashHeader} from '../DashHeader';
 import { AddFriend } from '../Dashboard/AddFriends';
 import  Friend  from '../Dashboard/popups/Friend';
 import  {Middle}  from '../Dashboard/MiddleDashboard';

import {useLocation}  from "react-router-dom";
//import {useState} from 'react';
export const Dashboard =(props)=>{
       // this.state = {: false,showExp:false,settleUp: false}
        let location =useLocation();
//         const [showFriend,setShowFriend]=useState(false);
//         const [showExp,setShowExp]=useState(false);
//         const [settleUp,setSettleUp]=useState(false);
    


// function ShowFriend(){
//     // this.setState({...this.state,showFriend: !this.state.showFriend});
//      setShowFriend(!showFriend);
//      //console.log(this.state.showFriend);
// }
// function ShowExpense(){
//    // this.setState({...this.state,showExp: !this.state.showExp});
//     //console.log(this.state.showExp);
//     setShowExp(!showExp);
// }  

// function settle(){
//     // this.setState({...this.state,settleUp: !this.state.settleUp});
//     // console.log(this.state.settleUp);
//     setSettleUp(!settleUp);
// }

    
    return(
    <div >
           
         
         <DashHeader username={location.state.username} /> 
        
         {/* {this.state.showFriend && <Friend friend = {this.showFriend.bind(this)}/>}
        {this.state.showExp && <AddExpense friend = {this.showExpense.bind(this)}/>}
        {this.state.settleUp && <SettleUp friend = {this.settle.bind(this)}/>}
         */}
        <div className ="flex"> 
         <AddFriend username={location.state} />
         {/* <Friend username={location.state} /> */}
         <Middle />
         </div>   
    </div>
)
}


