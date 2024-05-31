import React, { useState } from "react";
import Sidebar from "./sidebar/Employee_sidebar";
import "./home.scss";
import AddVehicle from "../contracts/Form/addVehicle";
import TollForm from "../contracts/Form/AddToll";
import Userdetails from "./Admin/User";
import PaymentList from "./Admin/PaymentList";
const CustomerDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "User":
        return <Userdetails />;
      case "tollList":
        return <TollForm />;
      case "ChallanList":
        return <Challan /> ;
      case "vehicleList":
        return <AddVehicle />;
      default:
        return null;
    }
  };

  return (
    <div >
      <Sidebar handleSidebarItemClick={handleSidebarItemClick} />
      <div className="homeContainer">
        
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

export default CustomerDashboard;
 