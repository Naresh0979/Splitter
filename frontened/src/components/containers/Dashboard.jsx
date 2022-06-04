import React from "react";

import { DashHeader } from "../DashHeader";
import { AddFriend } from "../Dashboard/AddFriends";
import Friend from "../Dashboard/popups/Friend";
import { Middle } from "../Dashboard/MiddleDashboard";

import { useLocation } from "react-router-dom";

export const Dashboard = (props) => {
  let location = useLocation();
  return (
    <div>
      <DashHeader username={location.state.username} />

      <div className="flex">
        <AddFriend username={location.state} />
        <Middle />
      </div>
    </div>
  );
};
