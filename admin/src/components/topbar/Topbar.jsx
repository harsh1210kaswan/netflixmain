import React from "react";
import "./topbar.scss";
import { NotificationsNone, Language, Settings,AccountCircleOutlined ,ArrowDropDown }from "@material-ui/icons";
import {AuthContext} from '../../context/authContext/AuthContext';
import { useContext } from "react";
import {logout} from "../../context/authContext/AuthActions";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Netflix Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <AccountCircleOutlined className="topAvatar" />
        
        <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}
