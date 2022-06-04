import React from "react";
import {useLocation}  from "react-router-dom";
import {useState,useEffect} from 'react';
import SettleUp from "./popups/settleUp";
import AddExpense from "./popups/addExpense";
import "../../styles/Dashboard.css";
import axios from "axios";
var exp = 0;
var owe = [];
var owed = [];

 function calculate(state){
   exp = 0;
  
   owe = []; 
   owed = [];
//    var state;
//     axios.post('http://localhost:2000/getData',user).then((resp)=>{
//     //console.log(resp.data.user,"abc");
//     state= resp.data.user;
// })
console.log(state);
   if(state.expenses){
     console.log("****************************m kitni barri hu *********************************");
     state.expenses.forEach(element => {
if(element.data){
  console.log(element.data);
  exp += parseInt(element.data.ammount);
      if(element.data.ammount>0){
        
        // console.log("element.data.ammount>0")
        owed.push(element);
        // console.log(owed);
      }else if(element.data.ammount<0){
        // console.log("element.data.ammount<0");
        // element.data.ammount = -(element.data.ammount);
        owe.push(element);
        // owe[owe.length].data.ammount = -( owe[owe.length].data.ammount );
        // console.log(owe);
      }
    }
   });
  }
  // return exp;
}

export  const Middle = (props) => {


  const [showFriend,setShowFriend]=useState(false);
  const [showExp,setShowExp]=useState(false);
  const [settleUp,setSettleUp]=useState(false);

  // const [tempexp,setTempexp]=useState(exp);
  // const [tempowe,setTempowe]=useState(owe);
  // const [tempowed,setTempowed]=useState(owed);
  
  const[user,setUser]=useState([]);
  var location =useLocation();
//var user=location.state;

//   async function getuser (){
//     await axios.post('http://localhost:2000/getData',location.state).then((resp)=>{
//       //console.log(resp.data.user,"abc");
//       return resp.data.user;
//   })
// }
 useEffect(() => {
    
  axios.post('http://localhost:2000/getData',location.state).then((resp)=>{
    console.log(resp.data.user,"abc");
          setUser(resp.data.user);
       })
   },[showExp,settleUp,showFriend])
  

function ShowFriend(){
// this.setState({...this.state,showFriend: !this.state.showFriend});
setShowFriend(!showFriend);
//console.log(this.state.showFriend);
}
function ShowExpense(){
// this.setState({...this.state,showExp: !this.state.showExp});
//console.log(this.state.showExp);
console.log("expense");
setShowExp(!showExp);
console.log(showExp);
}  

function settle(){
// this.setState({...this.state,settleUp: !this.state.settleUp});
// console.log(this.state.settleUp);
console.log(settleUp);
setSettleUp(!settleUp);
}


//const[user,setUser]=useState(location.state);
 

//console.log(user);
//console.log(props.username,"user");
  return (
    <div className="Middle">
      {calculate(user)}  
      
      <div className="MidDash"> 
        <div className="DashHeader">
          <h3>Dashboard</h3>
          <button className="btn float-right settle" onClick={settle}>
            Settle up
          </button>
          <button className="btn float-right expense" onClick={ShowExpense}>
            Add an expense
          </button>
        </div>
          {/* {this.state.showFriend && <Friend friend = {this.showFriend.bind(this)}/>} */}
        {/* {this.state.showExp && <AddExpense friend = {this.showExpense.bind(this)}/>} */}
        {settleUp && <SettleUp friend = {location.state} closebtn={settleUp} changestate={ settlestate=>setSettleUp(settlestate)}/>}
        {showExp && <AddExpense friend = {location.state} closebtn={showExp} changestate={ expstate=>setShowExp(expstate)} />}
         
      
        <div className="total">
          <div className="fitting">
            <label htmlFor="">total balance</label>
            <p className="green">$ {exp}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you owe</label>
            <p style = {{color:"red"}}>$ {(exp<0)?exp:0}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you are owed</label>
            <p className="green">$ {(exp>0)?exp:0}</p>
          </div>
        </div>
      </div>

      <div className="totalCollection">
        <div>
          <label htmlFor="">YOU OWE</label>
        </div>
        <div>
          <label htmlFor="" className="float-right mr-4">
            YOU ARE OWED
          </label>
        </div>
      </div>
      <div className = "flex">
        <div className="float-left ml-3 borders">
          <ul>
            {(owe.length == 0)?<li>You do not owe anything</li>:owe.map(value=>
             <li>
             <img
               className="imgs"
               src={require("../../images/person-profile.png")}
               alt="" align="left"
             />
             <div className="inline">
               <h5>{value.name}</h5>
               <span>you owe ${-(value.data.ammount)}</span>
             </div>
           </li>
            )}
            {/* <li>
              <img
                className="imgs"
                src={require("../../images/person-profile.png")}
                alt="" align="left"
              />
              <div className="inline">
                <h5>Ram</h5>
                <span>you owe $500</span>
              </div>
            </li> */}
          </ul>
        </div>



        <div>
          <ul>
          {(owed.length === 0)?<li>You do not owe anything</li>:owed.map(value=>
            <li>
            <img
              className="imgs"
              src={require("../../images/person-profile.png")}
              alt=""
              align="left"
            />
            <div className="inline">
              <h5>{value.name}</h5>
              <span>owes you ${value.data.ammount}</span>
            </div>
          </li>
            )}

             {/* <li>
              <img
                className="imgs"
                src={require("../../images/person-profile.png")}
                alt=""
                align="left"
              />
              <div className="inline">
                <h5>Ram</h5>
                <span>you owe $500</span>
              </div>
            </li> 
            */}
            
          </ul>
        </div>
      </div>
    </div>
  );
}


