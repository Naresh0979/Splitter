import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SettleUp from "./popups/settleUp";
import AddExpense from "./popups/addExpense";
import "../../styles/Dashboard.css";
import axios from "axios";
var exp = 0;
var owe = [];
var owed = [];

function calculate(state) {
  exp = 0;

  owe = [];
  owed = [];

  console.log(state);
  if (state.expenses) {
    state.expenses.forEach((element) => {
      if (element.data) {
        exp += parseInt(element.data.ammount);
        if (element.data.ammount > 0) {
          owed.push(element);
        } else if (element.data.ammount < 0) {
          owe.push(element);
        }
      }
    });
  }
}

export const Middle = (props) => {
  const [showFriend, setShowFriend] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [settleUp, setSettleUp] = useState(false);

  const [user, setUser] = useState([]);
  var location = useLocation();
  useEffect(() => {
    axios
      .post("https://splitter-a.herokuapp.com/getData", location.state)
      .then((resp) => {
        setUser(resp.data.user);
      });
  }, [showExp, settleUp, showFriend]);

  function ShowFriend() {
    setShowFriend(!showFriend);
  }
  function ShowExpense() {
    setShowExp(!showExp);
  }

  function settle() {
    setSettleUp(!settleUp);
  }

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
        {settleUp && (
          <SettleUp
            friend={location.state}
            closebtn={settleUp}
            changestate={(settlestate) => setSettleUp(settlestate)}
          />
        )}
        {showExp && (
          <AddExpense
            friend={location.state}
            closebtn={showExp}
            changestate={(expstate) => setShowExp(expstate)}
          />
        )}

        <div className="total">
          <div className="fitting">
            <label htmlFor="">total balance</label>
            <p className="green">$ {exp}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you owe</label>
            <p style={{ color: "red" }}>$ {exp < 0 ? exp : 0}</p>
          </div>
          <div className="fitting">
            <label htmlFor="">you are owed</label>
            <p className="green">$ {exp > 0 ? exp : 0}</p>
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
      <div className="flex">
        <div className="float-left ml-3 borders">
          <ul>
            {owe.length == 0 ? (
              <li>You do not owe anything</li>
            ) : (
              owe.map((value) => (
                <li>
                  <img
                    className="imgs"
                    src={require("../../images/person-profile.png")}
                    alt=""
                    align="left"
                  />
                  <div className="inline">
                    <h5>{value.name}</h5>
                    <span>you owe ${-value.data.ammount}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <div>
          <ul>
            {owed.length === 0 ? (
              <li>You do not owe anything</li>
            ) : (
              owed.map((value) => (
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
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
