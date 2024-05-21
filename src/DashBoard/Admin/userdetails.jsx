import React, { useState } from "react";
import "./home.scss";
import Table from "../../components/table/Table";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import CustomWidget from "../../components/widget/Widget";

const UserList = () => {
  const [tableComponent, setTableComponent] = useState(null);
  const columnHeaders = ['Tracking ID', 'Product', 'Customer', 'Date', 'Amount', 'Payment Method', 'Status'];

  const handleLinkClick = (componentProps) => {
    setTableComponent(componentProps);
  };

  return (
    <div className="home">
      <div className="homeContainer">
      <div className="widgets">
        <CustomWidget
          title="USERS"
          link="users"
          count={100}
          icon={<PersonOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />}
          onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })} // Pass the Table component and column headers as a single prop object
        />
        <CustomWidget
          title="ORDERS"
          link="orders"
          count={50}
          icon={<ShoppingCartOutlinedIcon className="icon" style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod" }} />}
          onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })} // Pass the Table component and column headers as a single prop object
        />
        <CustomWidget
          title="EARNINGS"
          link="earnings"
          count={500}
          icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
          onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })} // Pass the Table component and column headers as a single prop object
        />
        <CustomWidget
          title="BALANCE"
          link="balance"
          count={1000}
          icon={<AccountBalanceWalletOutlinedIcon className="icon" style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple" }} />}
          onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })} // Pass the Table component and column headers as a single prop object
        /> 
        <CustomWidget
        title="EARNINGS"
        link="earnings"
        count={500}
        icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
        onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })} // Pass the Table component and column headers as a single prop object
      />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        
        {tableComponent && <tableComponent.component columnHeaders={tableComponent.columnHeaders} />}
      </div>
    </div>
    </div>
  );
};

export default UserList;
