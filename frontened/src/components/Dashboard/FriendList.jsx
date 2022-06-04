import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const FriendList = (props) => {
  let location = useLocation();
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    axios
      .post("https://splitter-a.herokuapp.com/getData", location.state)
      .then((resp) => {
        setFriend(resp.data.user.friends);
      });
  }, [location.state.friends]);

  return (
    <ul>
      {friend.map((value, index) => (
        <li key={index} className="friendlist">
          <i class="fas fa-user" />
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};
