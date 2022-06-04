import React from "react";
import "../../../styles/frndPop.css";

import Chips, { Chip } from "react-chips";

import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddExpense(props) {
  let input = {};
  const [chips, setChips] = useState([]);
  let navigate = useNavigate();
  const getdate = () => {
    var today = new Date();

    return (
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2)
    );
  };
  const onChange = (chips) => {
    console.log(chips);
    setChips(chips);
  };
  const save = () => {
    input.amount = Math.round(parseInt(input.amount) / (chips.length + 1));

    for (let value of chips) {
      axios
        .post("https://splitter-a.herokuapp.com/addExp", {
          username: props.friend.username,
          user: value,
          inp: input,
        })
        .then((resp) => {
          props.changestate(!props.closebtn);
        });
    }
  };

  return (
    <div className="friendPopup">
      <div className="frnd-content">
        <div className="frnd-header">
          <span>Add an expense</span>
          <button className="float-right" /*onClick={props.friend}*/>
            <i class="fas fa-times" />
          </button>
        </div>
        <div className="exp-inp">
          <label htmlFor="">With you and</label>
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
            onChange={(e) => {
              input[e.target.id] = e.target.value;
            }}
          />
          <input
            id="amount"
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => {
              input[e.target.id] = e.target.value;
            }}
          />
          <br />
          <input
            id="date"
            type="date"
            onChange={(e) => {
              input[e.target.id] = e.target.value;
            }}
          />
        </div>

        <div className="pop-btn pop-btns">
          <button className="btn Add" onClick={() => save()}>
            Save
          </button>

          <button
            className="btn cut"
            onClick={() => props.changestate(!props.closebtn)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
