import React from "react";
import { useLocation } from "react-router-dom";
export const PaidTo = (props) => {
  let location=useLocation();
  //  console.log("inside paid to");
  return (
    <div className="secondBox">
      <div className="frnd-header">
        <span>Paid To</span>
      </div>
      <ul className="myList">
        {props.list.map((value) => {
          return (
            <li
              onClick={(event) => {
                props.toValue(event.target.id);
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
                props.toValue(event.target.id);
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
