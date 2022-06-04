import React from "react";
import axios from "axios";
//mport { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
export const FriendList = (props) => {
  let location = useLocation();
  const [friend,setFriend]=useState([]);
  useEffect(() => {

    //setFriend(location.state.friends);
    axios.post('http://localhost:2000/getData',location.state).then((resp)=>{
    console.log(resp.data.user,"abc");
          setFriend(resp.data.user.friends);
       })
  },[location.state.friends] )
  
 // console.log(location.state.friends[0]);
  return (
    <ul>
      {/* {console.log(props.user.friends[5])} */}
      {/* <li className="friendlist">{location.state.friends[0]}</li> */}
      {friend.map((value, index) => (
        <li key={index} className="friendlist">
          <i class="fas fa-user" />
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};
