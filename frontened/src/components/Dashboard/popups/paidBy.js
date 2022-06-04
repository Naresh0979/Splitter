import React from "react";
import { useLocation } from "react-router-dom";
export const PaidBy = (props) => {
  let location=useLocation();
  return (
    <div className="secondBox">
      <div className="frnd-header">
        <span>Paid By</span>
      </div>
      {console.log(props.list)}
      <ul className="myList">
        {props.list.map((value) => {
          return (
            <li
              onClick={(event) => {
                props.byValue(event.target.id);
                props.changestate(!props.closebtn);
              }}
              id={value}
            >
              <img
                className="pro-img"
                src={require("../../../images/person-profile.png")}
                alt=""
                srcset=""
              />
              {value}
            </li>
          );
        })}
        <li
              onClick={(event) => {
                props.byValue(event.target.id);
                props.changestate(!props.closebtn);
              }}
              id={location.state.username}
            >
              <img
                className="pro-img"
                src={require("../../../images/person-profile.png")}
                alt=""
                srcset=""
              />
              {location.state.username}
            </li>
      </ul>
    </div>
  );
};
