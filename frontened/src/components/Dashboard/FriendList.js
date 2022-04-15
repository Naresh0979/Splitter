import React from "react";
//mport { connect } from "react-redux";
import {useLocation}  from "react-router-dom";
export  const FriendList = props => {
  let location =useLocation();
  return (
    <ul>
      {/* {console.log(props.user.friends[5])} */}

      {location.state.friends.map(value =>  <li className="friendlist">
        <i class="fas fa-user" />
        <span>{value}</span>
      </li>)}
      
    </ul>
  );
}


