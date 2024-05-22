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
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BlockIcon from '@mui/icons-material/Block';
import ChangeRoleIcon from '@mui/icons-material/ChangeCircle';
import AddRoadIcon from '@mui/icons-material/AddRoad';

const Sidebar = ({ handleSidebarItemClick }) => {
 
  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="logo"><h5>Hello, Admin</h5></span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
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
          <li onClick={() => handleSidebarItemClick("ChallanList")}>
            <span className="link">
              <AddRoadIcon className="icon" />
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
          <li onClick={() => handleSidebarItemClick("changeUserRole")}>
            <span className="link">
              <ChangeRoleIcon className="icon" />
              <span>Change User Role</span>
            </span>
          </li>
          <li onClick={() => handleSidebarItemClick("blockUnblockUser")}>
            <span className="link">
              <BlockIcon className="icon" />
              <span>Block/Unblock User</span>
            </span>
          </li>
          <li onClick={() => handleSidebarItemClick("settings")}>
            <span className="link">
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </span>
          </li>
          <p className="title">USER</p>
          <li onClick={() => handleSidebarItemClick("profile")}>
            <span className="link">
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </span>
          </li>
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
