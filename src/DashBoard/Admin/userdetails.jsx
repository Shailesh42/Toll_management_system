import React, { useState } from "react";
import "./widget.css"; // Ensure this file contains the styles for both CustomWidget and UserList components
import "../home.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const CustomWidget = ({ title, link, count, icon, onLinkClick }) => {
  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">{count}</span>
      </div>
      <div className="right">
        {icon}
        <span className="link" onClick={handleClick}>{link}</span>
      </div>
    </div>
  );
};

const Table = ({ columnHeaders }) => {
  return (
    <table>
      <thead>
        <tr>
          {columnHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Assuming you will fill in the rows dynamically */}
        {/* <tr><td>...</td></tr> */}
      </tbody>
    </table>
  );
};

const UserList = () => {
  const [tableComponent, setTableComponent] = useState(null);
  const columnHeaders = ['Tracking ID', 'Product', 'Customer', 'Date', 'Amount', 'Payment Method', 'Status'];

  const handleLinkClick = (componentProps) => {
    setTableComponent(componentProps);
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets" style={{ display: "flex" }}>
          <CustomWidget
            title="ALL USERS"
            link="users"
            count={100}
            icon={<PersonOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />}
            onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="ADMIN"
            link="orders"
            count={50}
            icon={<ShoppingCartOutlinedIcon className="icon" style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod" }} />}
            onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="EMPLOYEE"
            link="earnings"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
            onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="CUSTOMERS"
            link="balance"
            count={1000}
            icon={<AccountBalanceWalletOutlinedIcon className="icon" style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple" }} />}
            onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="ACTIVE USER"
            link="active"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
            onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="BLOCKED USER"
            link="blocked"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
            onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
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
