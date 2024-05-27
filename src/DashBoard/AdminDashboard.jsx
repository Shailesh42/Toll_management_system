// Admindashboard.jsx
import React, { useState } from "react";
import Sidebar from "./sidebar/Admin_Sidebar";
import "./home.scss";
import UserList from "./Admin/userdetails";
import TollList from "./Admin/TollList";
import ChallanList from "./Admin/ChallanList";
import AddVehicle from "./Admin_Employee/Form/addVehicle";
import TollForm from "./Admin_Employee/Form/AddToll";
import ChallanForm from "./Admin_Employee/Form/AddChallan";
import VehicleList from "./Admin/VehicleList";
import UserManagement from "./Admin/change_user";
import HighwayList from "./Admin/HIghWayList"; // import the HighwayList component
import { highwayData } from "../data/HighwayData";

const Admindashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const [selectedHighway, setSelectedHighway] = useState(null);

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
    setSelectedHighway(null);
  };

  const handleHighwayClick = (highway) => {
    setSelectedHighway(highway);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "tollList":
        return <TollList />;
      case "userList":
        return <UserList />;
      case "vehicleList":
        return <VehicleList />;
      case "challanList":
        return <ChallanList />;
      case "Add Toll":
        return <TollForm />;
      case "Add challan":
        return <ChallanForm />;
      case "Add Vehicle":
        return <AddVehicle />;
      case "changeUserRole":
        return <UserManagement />;
      case "highways":
        return <HighwayList highways={highwayData} onHighwayClick={handleHighwayClick} />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
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

export default Admindashboard;
