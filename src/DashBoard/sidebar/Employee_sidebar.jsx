import React, { useContext } from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StoreIcon from "@mui/icons-material/Store";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";


const Sidebar = ({ handleSidebarItemClick }) => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="logo"><h2>Hello, Admin</h2></span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li onClick={() => handleSidebarItemClick("User")}>
            <span className="link">
              <AdminPanelSettingsIcon className="icon" />
              <span>Dashboard</span>
            </span>
          </li>
          <p className="title">LISTS</p>
          <li onClick={() => handleSidebarItemClick("tollList")}>
            <span className="link">
              <StoreIcon className="icon" />
              <span>Toll List</span>
            </span>
          </li>
          <li onClick={() => handleSidebarItemClick("userList")}>
            <span className="link">
              <PersonOutlineIcon className="icon" />
              <span>User List</span>
            </span>
          </li>
          <li onClick={() => handleSidebarItemClick("vehicleList")}>
            <span className="link">
              <LocalShippingIcon className="icon" />
              <span>Vehicle List</span>
            </span>
          </li>
        
          <p className="title">SERVICES</p>
         
          <li onClick={() => handleSidebarItemClick("challan")}>
            <span className="link">
              <NotificationsNoneIcon className="icon" />
              <span>Challan</span>
            </span>
          </li>
          <li onClick={() => handleSidebarItemClick("settings")}>
            <span className="link">
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </span>
          </li>
          <p className="title">USER</p>
         
          <li onClick={() => handleSidebarItemClick("logout")}>
            <span className="link">
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
