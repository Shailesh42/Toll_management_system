import React, { useState } from "react";
import "./widget.css"; // Ensure this file contains the styles for both CustomWidget and UserList components
import "../home.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
//mystart
import { Box, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const data = [
    { id: 1, title: 'Item 1', content: 'Content for Item 1' },
    { id: 2, title: 'Item 2', content: 'Content for Item 2' },
    { id: 3, title: 'Item 3', content: 'Content for Item 3' },
    { id: 4, title: 'Item 4', content: 'Content for Item 4' },
];

const ListView = ({ setSelectedItem }) => (
    <List sx={{ backgroundColor: '#ffffff' }}>
        {data.map(item => (
            <ListItem button key={item.id} onClick={() => setSelectedItem(item)}>
                <ListItemText primary={item.title} />
            </ListItem>
        ))}
    </List>
);

const DetailsView = ({ selectedItem }) => (
    <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6">{selectedItem.title}</Typography>
        <Typography variant="body1">{selectedItem.content}</Typography>
    </Paper>
);//my end


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
  const [selectedItem, setSelectedItem] = useState(null);
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
            // link="users"
            count={100}
            icon={<PersonOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />}
            // onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="ADMIN"
            // link="orders"
            count={50}
            icon={<ShoppingCartOutlinedIcon className="icon" style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod" }} />}
            // onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="EMPLOYEE"
            // link="earnings"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
            // onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="CUSTOMERS"
            // link="balance"
            count={1000}
            icon={<AccountBalanceWalletOutlinedIcon className="icon" style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple" }} />}
            // onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="ACTIVE USER"
            // link="active"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
            // onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
          <CustomWidget
            title="BLOCKED USER"
            // link="blocked"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
            // onLinkClick={() => handleLinkClick({ component: Table, columnHeaders })}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">User List</div>
          {/* {tableComponent && <tableComponent.component columnHeaders={tableComponent.columnHeaders} />} */}
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ minWidth: 200 }}>
                <ListView setSelectedItem={setSelectedItem} />
            </Box>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                {selectedItem ? (
                    <DetailsView selectedItem={selectedItem} />
                ) : (
                    <Typography variant="body1">Select an item from the list</Typography>
                )}
            </Box>
        </Box>
        </div>
      </div>
    </div>
  );
};

export default UserList;
