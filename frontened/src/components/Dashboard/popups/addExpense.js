import React from "react";
import "../../../styles/frndPop.css";
//import { connect } from "react-redux";
import Chips, { Chip } from "react-chips";
//import {instance} from "../../../utils/AxiosConfig";
// // import { store } from "../../../redux/store";
// // import { userActionCreator } from "../../../redux/actionCreator/userAction";
 
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddExpense(props) {
  let input={};
//   let chips= [];
const [chips,setChips]=useState([]);
//const [input,setInput]=useState({}); 
// console.log(props.friend.username);
// console.log(props.closebtn);
//let location = useLocation();
//axios.defaults.withCredentials = true;
  let navigate=useNavigate();
   const getdate=()=> {
    var today = new Date();

    return (
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2)
    );
  }
  const onChange = (chips) => {
    console.log(chips);
    //this.setState({ ...this.state, chips });
    setChips(chips);  
  };
  const save=  ()=> {
    // console.log("clicked...", chips, input);
     input.amount = Math.round(parseInt(input.amount)/(chips.length + 1));
  
    for(let value of chips){
    //console.log({username:props.friend.username,user:value,inp:input});
       axios.post('http://localhost:2000/addExp',{username:props.friend.username,user:value,inp:input}).then((resp)=>{
      //  console.log("*****************************00",resp.data.doc);
    //     var action = userActionCreator(resp.data.doc,'AddUser');
    //    store.dispatch(action);
    //     props.friend();
        props.changestate(!props.closebtn);
      })

      
     }
  }
  
  return (
    <div className="friendPopup">
    <div className="frnd-content">
      <div className="frnd-header">
        <span>Add an expense</span>
        <button className="float-right" /*onClick={props.friend}*/ >
          <i class="fas fa-times" />
        </button>
      </div>
      <div className="exp-inp">
        <label htmlFor="">With you and</label>
        {/* <input id = "username"  placeholder = "Enter friend name" className = "exp-name" type="text"/> */}
        <div className="exp-name">
          <Chips
            value={chips}
            onChange={onChange}
            suggestions={props.friend.friends}
          />
        </div>
      </div>
      <div className="exp-inp2">
        <input
          id="description"
          type="text"
          placeholder="Enter Description"
          onChange={e => {
            input[e.target.id] = e.target.value;
          }
        }
        />
        <input
          id="amount"
          type="number"
          placeholder="Enter Amount"
          onChange={e => {
            input[e.target.id] = e.target.value;
          }}
        />
       <br/>
       {/* value={getdate()} */}
        <input
          
          id="date"
          type="date"
          onChange={e => {
            input[e.target.id] = e.target.value;
          }}
        />
      </div>

      <div className="pop-btn pop-btns">
        <button className="btn Add" onClick={()=>save()}>
          Save
        </button>

        <button className="btn cut" onClick={()=>props.changestate(!props.closebtn)}>
          Close
        </button>
      </div>
    </div>
   
  </div>

  )
}

  

