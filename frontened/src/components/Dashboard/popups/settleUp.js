import React from "react";
import "../../../styles/frndPop.css";
import { PaidBy } from "./paidBy";
import { PaidTo } from "./paidTo";
//import { instance } from '../../../utils/AxiosConfig';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
export default function  SettleUp  (props)  {

  console.log(props.friend);
  let location = useLocation();
  let [val, setVal] = useState(0);
  const [paidBy, setPaidBy] = useState(false);
  const [paidTo, setPaidTo] = useState(false);
  const [byValue, setByValue] = useState("you");
  const [toValue, setToValue] = useState("to");
  const Paidby = () => {
    //this.setState({paidBy: !this.state.paidBy,paidTo:false});
    setPaidBy(!paidBy);
    setPaidTo(false);
  };
  const Paidto = () => {
    // this.setState({paidBy:false,paidTo: !this.state.paidTo});
    setPaidBy(false);
    setPaidTo(!paidTo);
    console.log("paidTo");
  };
  const Save = () => {
    if (toValue === "select") {
      alert("please select the reciver");
      return;
    } else if (val == "") {
      alert("you must enter an amount");
      return;
    } else if (toValue != location.state.username && byValue != location.state.username) {
      alert("you cannot add an Expense that does not involve yourself");
    } else if (toValue == byValue) {
      alert("you can't add money to yourself");
    } else {
      var sender;
      if (toValue == location.state.username) {
        val = "-" + val;
        sender = byValue;
      } else sender = toValue;

      console.log(parseInt(val), byValue, toValue);
      axios
        .post("http://localhost:2000/settle", {
          username: location.state.username,
          user: sender,
          val: parseInt(val),
        })
        .then((resp) => {
          console.log(resp.data.doc);
          //   var action = userActionCreator(resp.data.doc,'AddUser');
          //   store.dispatch(action);
          props.changestate(!props.closebtn);
          //   this.props.friend();
        });
    }
  };
  // const ByValue = (event) => {
  //   if (event === location.state.username) event = "you";
  //   //  else {
  //   //     event = event.slice(0,6);
  //   //     event = event+"..."
  //   //  }

  //   // this.setState({...this.state,byValue: event});
  //   setByValue(event);
  // };
  // const ToValue = (event) => {
  //   if (event === location.state.username) event = "you";

  //   // this.setState({...this.state,toValue: event});
  //   setToValue(event);
  // };
  // let people= props.friend.friends;
  // people.push(location.state.username);
  return (
    <div className="friendPopup">
      <div className="flx">
        <div className="frnd-content">
          <div className="frnd-header">
            <span>Settle up</span>
            <button className="float-right" onClick={props.friend}>
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div className="frnd-set">
            <button onClick={Paidby}>
              {byValue == "you" ? "you" : byValue.slice(0, 6) + "..."}
            </button>{" "}
            paid{" "}
            <button onClick={ Paidto}>
              {toValue == "you" || toValue == "select"
                ? toValue
                : toValue.slice(0, 6) + "..."}
            </button>
          </div>

          <input
            className="money"
            onChange={(event) => {
              val = event.target.value;
            }}
            placeholder="$ 0.0"
            type="number"
            name=""
            id=""
          />
          <div className="pop-btn bt-mr">
            <button className="btn Add" onClick={Save}>
              Save
            </button>

            <button className="btn cut" onClick={()=>props.changestate(!props.closebtn)}>
              Close
            </button>
          </div>
        </div>

        {paidBy && <PaidBy list={props.friend.friends}  closebtn={paidBy} changestate={ state=>setPaidBy(state)} byValue={ value=>setByValue(value)} />}
        {paidTo && <PaidTo list={props.friend.friends} closebtn={paidTo} changestate={ state=>setPaidTo(state)} toValue={ value=>setToValue(value)} />}
      </div>
    </div>
  )
}



