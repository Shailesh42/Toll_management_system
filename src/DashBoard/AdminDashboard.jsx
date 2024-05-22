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
const Admindashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "tollList":
        return <TollList />;
      case "userList":
        return <UserList/>;
      case "vehicleList":
        return <VehicleList />;
      case "challanList" :
        return <ChallanList/> ;
      case "Add Toll ":
        return <TollForm />;
      case "Add challan":
        return <ChallanForm />;
      case "Add Vehicle":
          return <AddVehicle/> ;
      // case "profile":
      //   return <Profile />;
      // case "logout":
      //   return <Logout />;
      default:
        return null;
    }
  };

  return (
    <div  className="home">
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
 