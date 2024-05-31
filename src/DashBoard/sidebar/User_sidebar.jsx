import React, { useContext } from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StoreIcon from "@mui/icons-material/Store";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";

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
          <li onClick={() => handleSidebarItemClick("ChallanList")}>
            <span className="link">
              <PersonOutlineIcon className="icon" />
              <span>Challan List</span>
            </span>
          </li>
          <li onClick={() => handleSidebarItemClick("vehicleList")}>
            <span className="link">
              <LocalShippingIcon className="icon" />
              <span>Vehicle List</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
