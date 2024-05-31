import React, { useState } from "react";
import Sidebar from "./sidebar/Employee_sidebar";

import "./home.scss";
import Userdetails from "./Admin/User";
import TollList  from "./Admin/TollList";
import ChallanList from "./Admin/ChallanList";
import AddVehicle from "../contracts/Form/addVehicle";
import TollForm from "../contracts/Form/AddToll";
import ChallanForm from "../contracts/Form/AddChallan";
import UserDetailsForm from "../contracts/Form/AddUserDetails";


const EmployeeDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "User":
        return <Userdetails />;
      case "tollList":
        return <TollList />;
      case "ChallanList":
        return <ChallanList/> ; 
      case "userList":
        return <UserDetailsForm/>;
      case "vehicleList":
        return <AddVehicle />;
      case "Add Toll ":
        return <TollForm />;
      case "Add challan":
        return <ChallanForm />;
      case "Add Vehicle":
          return <AddVehicle/> ;
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

export default EmployeeDashboard;
 