import React from "react";
import "../../../styles/frndPop.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Friend = (props) => {
  const [takeInp, setTakeInp] = useState({ defaultUser: "", username: " " });
  axios.defaults.withCredentials = true;
  const [show, setShow] = useState(true);
  let navigation = useNavigate();
  const handleclick = () => {
    setShow(!show);
    var Data = props.user;
    navigation("/Dashboard", { state: Data });
  };

  return (
    <div>
      {show ? (
        <div className="friendPopup">
          <div className="frnd-content">
            <div className="frnd-header">
              <span>Add a Friend</span>
            </div>

            <input
              id="username"
              onChange={(e) =>
                setTakeInp({
                  defaultUser: props.user.username,
                  username: e.target.value,
                })
              }
              placeholder="Type a username"
              className="frnd-name"
              type="text"
            />

            <div className="pop-btn">
              <button
                className="btn Add"
                onClick={() => {
                  if (takeInp.username === props.user.username) {
                    alert("you can't add yourself as your Friend");
                    return;
                  }
                  console.log(takeInp);
                  axios
                    .post("https://splitter-a.herokuapp.com/AddFriend", takeInp)
                    .then((resp) => {
                      if (resp.data.Status === "S") {
                        alert("Friend added to your list");
                      } else {
                        console.log("user not found");
                        alert(resp.data.msg);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Add Friend
              </button>

              <button className="btn cut" onClick={handleclick}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Friend;
