import React, { useContext } from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StoreIcon from "@mui/icons-material/Store";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChangeRoleIcon from '@mui/icons-material/ChangeCircle';


const Sidebar = ({ handleSidebarItemClick }) => {
  

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="logo"><h2>Hello, Employee </h2></span>
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
          <li onClick={() => handleSidebarItemClick("ChallanList")}>
            <span className="link">
              <NotificationsNoneIcon className="icon" />
              <span>Challan List</span>
            </span>
          </li>
          <p className="title">SERVICES</p>
          <li onClick={() => handleSidebarItemClick("Add Toll")}>
            <span className="link">
              <CreditCardIcon className="icon" />
              <span>Add Toll</span>
            </span>
          </li>
          <li onClick={() => handleSidebarItemClick("Add challan")}>
            <span className="link">
              <NotificationsNoneIcon className="icon" />
              <span>Add Challan</span>
            </span>
          </li>        
          <li onClick={() => handleSidebarItemClick("Add Vehicle")}>
            <span className="link">
              <NotificationsNoneIcon className="icon" />
              <span>Add Vehicle </span>
            </span>
          </li>   
          <li onClick={() => handleSidebarItemClick("highways")}>
            <span className="link">
              <ChangeRoleIcon className="icon" />
              <span>highway list </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
