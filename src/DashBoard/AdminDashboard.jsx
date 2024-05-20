import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Dashboard from "./dashboard"; 
import AddVehicle from "../Form/addVehicle";
import TollForm from "../Form/AddToll";
import HighwayPointForm from "../Form/AddHighwaypoint";
import UserDetailsForm from "../Form/AddUserDetails";
import HighwayForm from "../Form/AddHighway";
import ChallanForm from "../Form/AddChallan";
const Admindashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "dashboard":
        return <Dashboard />;
      case "tollList":
        return <TollForm />;
      case "userList":
        return <UserDetailsForm/>;
      case "vehicleList":
        return <AddVehicle />;
      case "highwayList":
        return <AddHighway />;
      case "tollTransaction":
        return <TollTransaction />;
      case "challan":
        return <HighwayPointForm />;
      case "addHighway":
        return <AddHighway />;
      case "changeUserRole":
        return <ChangeUserRole />;
      case "blockUnblockUser":
        return <BlockUnblockUser />;
      case "settings":
        return <Settings />;
      case "profile":
        return <Profile />;
      case "logout":
        return <Logout />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      <Sidebar handleSidebarItemClick={handleSidebarItemClick} />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">
          {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const TollList = () => <h2>Toll List</h2>;
const UserList = () => <h2>User List</h2>;
const VehicleList = () => <h2>Vehicle List</h2>;
const HighwayList = () => <h2>Highway List</h2>;
const TollTransaction = () => <h2>Toll Transaction</h2>;
const Challan = () => <h2>Challan</h2>;
const AddHighway = () => <h2>Add/Remove Highway</h2>;
const ChangeUserRole = () => <h2>Change User Role</h2>;
const BlockUnblockUser = () => <h2>Block/Unblock User</h2>;
const Settings = () => <h2>Settings</h2>;
const Profile = () => <h2>Profile</h2>;
const Logout = () => <h2>Logout</h2>;

export default Admindashboard;
