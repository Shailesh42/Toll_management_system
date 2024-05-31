// // HighwayList.jsx
// import React from "react";

// const HighwayList = ({ highways, onHighwayClick }) => {
//   return (
//     <div>
//       <h2>Highway List</h2>
//       <div className="highway-list">
//         {Object.entries(highways).map(([highwayName, highwayDetails]) => (
//           <div key={highwayName} className="highway-item" onClick={() => onHighwayClick(highwayName)}>
//             <h3>{highwayName}</h3>
//             <p>{highwayDetails.route}</p>
//             <ul>
//               {highwayDetails.cities.map((city, index) => (
//                 <li key={index}>
//                   {city.city}, {city.state} - {city.distance_km} km
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HighwayList;




import React, { useState } from "react";
import "./widget.css"; // Ensure this file contains the styles for both CustomWidget and UserList components
import "../home.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Box, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const data = [
  {
    id: 1,
    title: 'NH-48',
    content: [
      { city: "Delhi", state: "Delhi", distance_km: 0 },
      { city: "Gurugram", state: "Haryana", distance_km: 32 },
      { city: "Rewari", state: "Haryana", distance_km: 82 },
      { city: "Behror", state: "Rajasthan", distance_km: 127 },
      { city: "Kotputli", state: "Rajasthan", distance_km: 155 },
      { city: "Shahpura", state: "Rajasthan", distance_km: 207 },
      { city: "Jaipur", state: "Rajasthan", distance_km: 270 },
      { city: "Ajmer", state: "Rajasthan", distance_km: 392 },
      { city: "Amet", state: "Rajasthan", distance_km: 472 },
      { city: "Udaipur", state: "Rajasthan", distance_km: 657 },
      { city: "Himatnagar", state: "Gujarat", distance_km: 770 },
      { city: "Gandhinagar", state: "Gujarat", distance_km: 815 },
      { city: "Ahmedabad", state: "Gujarat", distance_km: 831 },
      { city: "Kheda", state: "Gujarat", distance_km: 868 },
      { city: "Nadiad", state: "Gujarat", distance_km: 892 },
      { city: "Anand", state: "Gujarat", distance_km: 912 },
      { city: "Vadodara", state: "Gujarat", distance_km: 934 },
      { city: "Bharuch", state: "Gujarat", distance_km: 1010 },
      { city: "Ankleshwar", state: "Gujarat", distance_km: 1020 },
      { city: "Surat", state: "Gujarat", distance_km: 1095 },
      { city: "Navsari", state: "Gujarat", distance_km: 1129 },
      { city: "Valsad", state: "Gujarat", distance_km: 1165 },
      { city: "Pardi", state: "Gujarat", distance_km: 1182 },
      { city: "Vapi", state: "Gujarat", distance_km: 1196 },
      { city: "Palghar", state: "Maharashtra", distance_km: 1272 },
      { city: "Vasai-Virar", state: "Maharashtra", distance_km: 1335 },
      { city: "Mumbai", state: "Maharashtra", distance_km: 1384 },
      { city: "Thane", state: "Maharashtra", distance_km: 1404 },
      { city: "Navi Mumbai", state: "Maharashtra", distance_km: 1415 },
      { city: "Lonavala", state: "Maharashtra", distance_km: 1473 },
      { city: "Pimpri Chinchwad", state: "Maharashtra", distance_km: 1523 },
      { city: "Pune", state: "Maharashtra", distance_km: 1533 },
      { city: "Satara", state: "Maharashtra", distance_km: 1676 },
      { city: "Karad", state: "Maharashtra", distance_km: 1750 },
      { city: "Uran Islampur", state: "Maharashtra", distance_km: 1800 },
      { city: "Kolhapur", state: "Maharashtra", distance_km: 1845 },
      { city: "Kagal", state: "Maharashtra", distance_km: 1867 },
      { city: "Nipani", state: "Karnataka", distance_km: 1882 },
      { city: "Sankeshwar", state: "Karnataka", distance_km: 1904 },
      { city: "Belgaum", state: "Karnataka", distance_km: 1946 },
      { city: "Kittur", state: "Karnataka", distance_km: 1986 },
      { city: "Dharwad", state: "Karnataka", distance_km: 2028 },
      { city: "Hubli", state: "Karnataka", distance_km: 2046 },
      { city: "Haveri", state: "Karnataka", distance_km: 2096 },
      { city: "Ranebennuru", state: "Karnataka", distance_km: 2131 },
      { city: "Davanagere", state: "Karnataka", distance_km: 2175 },
      { city: "Chitradurga", state: "Karnataka", distance_km: 2240 },
      { city: "Hiriyur", state: "Karnataka", distance_km: 2264 },
      { city: "Sira", state: "Karnataka", distance_km: 2307 },
      { city: "Tumkur", state: "Karnataka", distance_km: 2360 },
      { city: "Dobbaspet", state: "Karnataka", distance_km: 2392 },
      { city: "Nelamangala", state: "Karnataka", distance_km: 2409 },
      { city: "Bangalore", state: "Karnataka", distance_km: 2429 },
      { city: "Electronic City", state: "Karnataka", distance_km: 2445 },
      { city: "Attibele", state: "Karnataka", distance_km: 2466 },
      { city: "Hosur", state: "Tamil Nadu", distance_km: 2474 },
      { city: "Krishnagiri", state: "Tamil Nadu", distance_km: 2524 },
      { city: "Vaniyambadi", state: "Tamil Nadu", distance_km: 2580 },
      { city: "Ambur", state: "Tamil Nadu", distance_km: 2596 },
      { city: "Pallikonda", state: "Tamil Nadu", distance_km: 2633 },
      { city: "Vellore", state: "Tamil Nadu", distance_km: 2647 },
      { city: "Arcot", state: "Tamil Nadu", distance_km: 2669 },
      { city: "Ranipet", state: "Tamil Nadu", distance_km: 2678 },
      { city: "Walajapet", state: "Tamil Nadu", distance_km: 2685 },
      { city: "Kanchipuram", state: "Tamil Nadu", distance_km: 2727 },
      { city: "Sriperumbudur", state: "Tamil Nadu", distance_km: 2750 },
      { city: "Chennai", state: "Tamil Nadu", distance_km: 2784 }
    ]
  },
  {
    id: 2, title: 'NH-44',
    content: [
      { "city": "Srinagar", "state": "Jammu and Kashmir", "distance_km": 0 },
      { "city": "Anantnag", "state": "Jammu and Kashmir", "distance_km": 60 },
      { "city": "Qazigund", "state": "Jammu and Kashmir", "distance_km": 74 },
      { "city": "Banihal", "state": "Jammu and Kashmir", "distance_km": 110 },
      { "city": "Ramban", "state": "Jammu and Kashmir", "distance_km": 152 },
      { "city": "Batote", "state": "Jammu and Kashmir", "distance_km": 181 },
      { "city": "Chenani", "state": "Jammu and Kashmir", "distance_km": 218 },
      { "city": "Udhampur", "state": "Jammu and Kashmir", "distance_km": 233 },
      { "city": "Jammu", "state": "Jammu and Kashmir", "distance_km": 303 },
      { "city": "Lakhanpur", "state": "Jammu and Kashmir", "distance_km": 360 },
      { "city": "Pathankot", "state": "Punjab", "distance_km": 380 },
      { "city": "Dasua", "state": "Punjab", "distance_km": 453 },
      { "city": "Jalandhar", "state": "Punjab", "distance_km": 491 },
      { "city": "Ludhiana", "state": "Punjab", "distance_km": 547 },
      { "city": "Rajpura", "state": "Punjab", "distance_km": 600 },
      { "city": "Ambala", "state": "Haryana", "distance_km": 623 },
      { "city": "Kurukshetra", "state": "Haryana", "distance_km": 665 },
      { "city": "Karnal", "state": "Haryana", "distance_km": 720 },
      { "city": "Panipat", "state": "Haryana", "distance_km": 775 },
      { "city": "Sonipat", "state": "Haryana", "distance_km": 825 },
      { "city": "Delhi", "state": "Delhi", "distance_km": 840 },
      { "city": "Faridabad", "state": "Haryana", "distance_km": 860 },
      { "city": "Palwal", "state": "Haryana", "distance_km": 890 },
      { "city": "Vrindavan", "state": "Uttar Pradesh", "distance_km": 930 },
      { "city": "Mathura", "state": "Uttar Pradesh", "distance_km": 945 },
      { "city": "Agra", "state": "Uttar Pradesh", "distance_km": 1010 },
      { "city": "Dholpur", "state": "Rajasthan", "distance_km": 1050 },
      { "city": "Gwalior", "state": "Madhya Pradesh", "distance_km": 1105 },
      { "city": "Jhansi", "state": "Uttar Pradesh", "distance_km": 1220 },
      { "city": "Lalitpur", "state": "Uttar Pradesh", "distance_km": 1290 },
      { "city": "Sagar", "state": "Madhya Pradesh", "distance_km": 1380 },
      { "city": "Narsinghpur", "state": "Madhya Pradesh", "distance_km": 1490 },
      { "city": "Lakhnadon", "state": "Madhya Pradesh", "distance_km": 1530 },
      { "city": "Seoni", "state": "Madhya Pradesh", "distance_km": 1600 },
      { "city": "Nagpur", "state": "Maharashtra", "distance_km": 1750 },
      { "city": "Hinganghat", "state": "Maharashtra", "distance_km": 1820 },
      { "city": "Adilabad", "state": "Telangana", "distance_km": 1880 },
      { "city": "Nirmal", "state": "Telangana", "distance_km": 1940 },
      { "city": "Nizamabad", "state": "Telangana", "distance_km": 2020 },
      { "city": "Kamareddy", "state": "Telangana", "distance_km": 2070 },
      { "city": "Hyderabad", "state": "Telangana", "distance_km": 2190 },
      { "city": "Jadcherla", "state": "Telangana", "distance_km": 2240 },
      { "city": "Kurnool", "state": "Andhra Pradesh", "distance_km": 2330 },
      { "city": "Dhone", "state": "Andhra Pradesh", "distance_km": 2400 },
      { "city": "Gooty", "state": "Andhra Pradesh", "distance_km": 2460 },
      { "city": "Anantapur", "state": "Andhra Pradesh", "distance_km": 2530 },
      { "city": "Chikkaballapur", "state": "Karnataka", "distance_km": 2610 },
      { "city": "Bangalore", "state": "Karnataka", "distance_km": 2690 },
      { "city": "Hosur", "state": "Tamil Nadu", "distance_km": 2730 },
      { "city": "Krishnagiri", "state": "Tamil Nadu", "distance_km": 2790 },
      { "city": "Dharmapuri", "state": "Tamil Nadu", "distance_km": 2830 },
      { "city": "Salem", "state": "Tamil Nadu", "distance_km": 2910 },
      { "city": "Namakkal", "state": "Tamil Nadu", "distance_km": 2960 },
      { "city": "Karur", "state": "Tamil Nadu", "distance_km": 3000 },
      { "city": "Dindigul", "state": "Tamil Nadu", "distance_km": 3080 },
      { "city": "Madurai", "state": "Tamil Nadu", "distance_km": 3150 },
      { "city": "Thirumangalam", "state": "Tamil Nadu", "distance_km": 3180 },
      { "city": "Virudhunagar", "state": "Tamil Nadu", "distance_km": 3230 },
      { "city": "Tirunelveli", "state": "Tamil Nadu", "distance_km": 3380 },
      { "city": "Nagercoil", "state": "Tamil Nadu", "distance_km": 3450 },
      { "city": "Kanyakumari", "state": "Tamil Nadu", "distance_km": 3470 }
    ]
  },
  {
    id: 3, title: 'NH-27',
    content: [
      { "city": "Porbandar", "state": "Gujarat", "distance_km": 0 },
      { "city": "Dhoraji", "state": "Gujarat", "distance_km": 108 },
      { "city": "Jetpur", "state": "Gujarat", "distance_km": 135 },
      { "city": "Bamanbore", "state": "Gujarat", "distance_km": 205 },
      { "city": "Samakhiali", "state": "Gujarat", "distance_km": 303 },
      { "city": "Radhanpur", "state": "Gujarat", "distance_km": 398 },
      { "city": "Deesa", "state": "Gujarat", "distance_km": 465 },
      { "city": "Swaroopganj", "state": "Rajasthan", "distance_km": 597 },
      { "city": "Pindwara", "state": "Rajasthan", "distance_km": 629 },
      { "city": "Udaipur", "state": "Rajasthan", "distance_km": 686 },
      { "city": "Bhatevar", "state": "Rajasthan", "distance_km": 709 },
      { "city": "Chittorgarh", "state": "Rajasthan", "distance_km": 754 },
      { "city": "Kota", "state": "Rajasthan", "distance_km": 868 },
      { "city": "Baran", "state": "Rajasthan", "distance_km": 938 },
      { "city": "Shivpuri", "state": "Madhya Pradesh", "distance_km": 1021 },
      { "city": "Jhansi", "state": "Uttar Pradesh", "distance_km": 1108 },
      { "city": "Chirgaon", "state": "Uttar Pradesh", "distance_km": 1148 },
      { "city": "Bhognipur", "state": "Uttar Pradesh", "distance_km": 1242 },
      { "city": "Kanpur", "state": "Uttar Pradesh", "distance_km": 1290 },
      { "city": "Unnao", "state": "Uttar Pradesh", "distance_km": 1320 },
      { "city": "Lucknow", "state": "Uttar Pradesh", "distance_km": 1370 },
      { "city": "Barabanki", "state": "Uttar Pradesh", "distance_km": 1410 },
      { "city": "Ayodhya", "state": "Uttar Pradesh", "distance_km": 1470 },
      { "city": "Basti", "state": "Uttar Pradesh", "distance_km": 1530 },
      { "city": "Gorakhpur", "state": "Uttar Pradesh", "distance_km": 1595 },
      { "city": "Kushinagar", "state": "Uttar Pradesh", "distance_km": 1650 },
      { "city": "Gopalganj", "state": "Bihar", "distance_km": 1705 },
      { "city": "Barauli", "state": "Bihar", "distance_km": 1730 },
      { "city": "Mohammadpur", "state": "Bihar", "distance_km": 1750 },
      { "city": "Pipra Kothi", "state": "Bihar", "distance_km": 1790 },
      { "city": "Mehsi", "state": "Bihar", "distance_km": 1810 },
      { "city": "Muzaffarpur", "state": "Bihar", "distance_km": 1855 },
      { "city": "Darbhanga", "state": "Bihar", "distance_km": 1910 },
      { "city": "Jhanjharpur", "state": "Bihar", "distance_km": 1940 },
      { "city": "Narahia", "state": "Bihar", "distance_km": 1980 },
      { "city": "Bhaptiahi", "state": "Bihar", "distance_km": 2020 },
      { "city": "Simrahi", "state": "Bihar", "distance_km": 2040 },
      { "city": "Forbesganj", "state": "Bihar", "distance_km": 2080 },
      { "city": "Araria", "state": "Bihar", "distance_km": 2100 },
      { "city": "Purnia", "state": "Bihar", "distance_km": 2140 },
      { "city": "Dalkhola", "state": "West Bengal", "distance_km": 2170 },
      { "city": "Ghoshpukur", "state": "West Bengal", "distance_km": 2230 },
      { "city": "Bagdogra", "state": "West Bengal", "distance_km": 2260 },
      { "city": "Siliguri", "state": "West Bengal", "distance_km": 2280 },
      { "city": "Mainaguri", "state": "West Bengal", "distance_km": 2340 },
      { "city": "Dhupguri", "state": "West Bengal", "distance_km": 2380 },
      { "city": "Falakata", "state": "West Bengal", "distance_km": 2420 },
      { "city": "Salsabari", "state": "West Bengal", "distance_km": 2450 },
      { "city": "Srirampur", "state": "Assam", "distance_km": 2490 },
      { "city": "Garubhasa", "state": "Assam", "distance_km": 2530 },
      { "city": "Shyamthai", "state": "Assam", "distance_km": 2570 },
      { "city": "Bijni", "state": "Assam", "distance_km": 2590 },
      { "city": "Howly", "state": "Assam", "distance_km": 2620 },
      { "city": "Pathsala", "state": "Assam", "distance_km": 2640 },
      { "city": "Barama", "state": "Assam", "distance_km": 2670 },
      { "city": "Rangia", "state": "Assam", "distance_km": 2690 },
      { "city": "Baihata", "state": "Assam", "distance_km": 2710 },
      { "city": "Jalukbari", "state": "Assam", "distance_km": 2740 },
      { "city": "Guwahati", "state": "Assam", "distance_km": 2750 },
      { "city": "Jorabat", "state": "Assam", "distance_km": 2770 },
      { "city": "Nakhola", "state": "Assam", "distance_km": 2785 },
      { "city": "Nelle", "state": "Assam", "distance_km": 2810 },
      { "city": "Nagaon", "state": "Assam", "distance_km": 2830 },
      { "city": "Dabaka", "state": "Assam", "distance_km": 2850 },
      { "city": "Lumding", "state": "Assam", "distance_km": 2890 },
      { "city": "Jatinga, Haflong", "state": "Assam", "distance_km": 2940 },
      { "c": "Silchar", "state": "Assam", "distance_km": 3020 }
    ]
  },
  {
    id: 4, title: 'NH-52',
    content: [
      {"city": "Sangrur", "state": "Punjab", "distance_km": "0 km"},
        {"city": "Dirba", "state": "Punjab", "distance_km": "25 km"},
        {"city": "Pattran", "state": "Punjab", "distance_km": "55 km"},
        {"city": "Narwana", "state": "Haryana", "distance_km": "105 km"},
        {"city": "Barwala", "state": "Haryana", "distance_km": "152 km"},
        {"city": "Uklana Mandi", "state": "Haryana", "distance_km": "172 km"},
        {"city": "Hisar", "state": "Haryana", "distance_km": "195 km"},
        {"city": "Siwani", "state": "Haryana", "distance_km": "240 km"},
        {"city": "Sadulpur/Rajgarh", "state": "Rajasthan", "distance_km": "275 km"},
        {"city": "Churu", "state": "Rajasthan", "distance_km": "315 km"},
        {"city": "Ramgarh", "state": "Rajasthan", "distance_km": "345 km"},
        {"city": "Fatehpur", "state": "Rajasthan", "distance_km": "370 km"},
        {"city": "Laxmangarh", "state": "Rajasthan", "distance_km": "410 km"},
        {"city": "Sikar", "state": "Rajasthan", "distance_km": "445 km"},
        {"city": "Ringas", "state": "Rajasthan", "distance_km": "500 km"},
        {"city": "Chomu", "state": "Rajasthan", "distance_km": "545 km"},
        {"city": "Jaipur", "state": "Rajasthan", "distance_km": "575 km"},
        {"city": "Tonk", "state": "Rajasthan", "distance_km": "655 km"},
        {"city": "Bundi", "state": "Rajasthan", "distance_km": "745 km"},
        {"city": "Kota", "state": "Rajasthan", "distance_km": "805 km"},
        {"city": "Jhalawar", "state": "Rajasthan", "distance_km": "885 km"},
        {"city": "Aklera", "state": "Rajasthan", "distance_km": "945 km"}, 
        {"city": "Rajgarh", "state": "Madhya Pradesh", "distance_km": "1015 km"},
        {"city": "Biora", "state": "Madhya Pradesh", "distance_km": "1060 km"},
        {"city": "Dewas", "state": "Madhya Pradesh", "distance_km": "1165 km"},
        {"city": "Indore", "state": "Madhya Pradesh", "distance_km": "1235 km"},
        {"city": "Sendhwa", "state": "Madhya Pradesh", "distance_km": "1340 km"}
    ]
  },
  {
    id: 5, title: 'NH-30',
    content: [{ "city": "Sitarganj", "state": "Uttarakhand", "distance": "0 km" },
    { "city": "Pilibhit", "state": "Uttar Pradesh", "distance": "65 km" },
    { "city": "Bareilly", "state": "Uttar Pradesh", "distance": "130 km" },
    { "city": "Miranpur Katra (Teh. Tilhar)", "state": "Uttar Pradesh", "distance": "185 km" },
    { "city": "Shahjahanpur", "state": "Uttar Pradesh", "distance": "210 km" },
    { "city": "Maigalganj", "state": "Uttar Pradesh", "distance": "275 km" },
    { "city": "Sitapur", "state": "Uttar Pradesh", "distance": "315 km" },
    { "city": "Bakshi-ka-Talab", "state": "Uttar Pradesh", "distance": "370 km" },
    { "city": "Lucknow", "state": "Uttar Pradesh", "distance": "400 km" },
    { "city": "Mohanlaganj", "state": "Uttar Pradesh", "distance": "425 km" },
    { "city": "Raebareli", "state": "Uttar Pradesh", "distance": "480 km" },
    { "city": "Nawabganj (Prayagraj)", "state": "Uttar Pradesh", "distance": "540 km" },
    { "city": "Prayagraj", "state": "Uttar Pradesh", "distance": "570 km" },
    { "city": "Jamira", "state": "Madhya Pradesh", "distance": "610 km" },
    { "city": "Mangawan", "state": "Madhya Pradesh", "distance": "660 km" },
    { "city": "Rewa", "state": "Madhya Pradesh", "distance": "720 km" },
    { "city": "Maihar", "state": "Madhya Pradesh", "distance": "780 km" },
    { "city": "Katni", "state": "Madhya Pradesh", "distance": "840 km" },
    { "city": "Jabalpur", "state": "Madhya Pradesh", "distance": "900 km" },
    { "city": "Mandla", "state": "Madhya Pradesh", "distance": "960 km" },
    { "city": "Pondi", "state": "Chhattisgarh", "distance": "1020 km" },
    { "city": "Simga", "state": "Chhattisgarh", "distance": "1080 km" },
    { "city": "Raipur", "state": "Chhattisgarh", "distance": "1150 km" },
    { "city": "Abhanpur", "state": "Chhattisgarh", "distance": "1170 km" },
    { "city": "Kurud", "state": "Chhattisgarh", "distance": "1190 km" },
    { "city": "Purur", "state": "Chhattisgarh", "distance": "1230 km" },
    { "city": "Kondagaon", "state": "Chhattisgarh", "distance": "1280 km" },
    { "city": "Jagdalpur", "state": "Chhattisgarh", "distance": "1350 km" },
    { "city": "Chintoor", "state": "Andhra Pradesh", "distance": "1420 km" },
    { "city": "Ibrahimpatnam, Vijayawada", "state": "Andhra Pradesh", "distance": "1500 km" },
    { "city": "Penuballi", "state": "Telangana", "distance": "1470 km" }
    ]
  },
  {
    id: 6, title: 'NH-06',
    content: 'Content for Item 4'
  },
  {
    id: 7, title: 'NH-53',
    content: 'Content for Item 4'
  },
  {
    id: 8, title: 'NH-16',
    content: 'Content for Item 4'
  },
  {
    id: 9, title: 'NH-66',
    content: 'Content for Item 4'
  },
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

// const DetailsView = ({ selectedItem }) => (
//   <Paper elevation={3} sx={{ padding: 2 }}>
//     <Typography variant="h6">{selectedItem.title}</Typography>
//     {Array.isArray(selectedItem.content) ? (
//       <ul>
//         {selectedItem.content.map((city, index) => (
//           <li key={index}>
//             {city.city}, {city.state} - {city.distance_km} km
//           </li>
//         ))}
//       </ul>
//     ) : (
//       <Typography variant="body1">{selectedItem.content}</Typography>
//     )}
//   </Paper>
// );

const DetailsView = ({ selectedItem }) => (
  <Paper elevation={3} sx={{ padding: 2 }}>
    <Typography variant="h6">{selectedItem.title}</Typography>
    <table>
      <thead>
        <tr>
          <th>City</th>
          <th>State</th>
          <th>Distance (km)</th>
        </tr>
      </thead>
      <tbody>
        {selectedItem.content.map((cityInfo, index) => (
          <tr key={index}>
            <td>{cityInfo.city}</td>
            <td>{cityInfo.state}</td>
            <td>{cityInfo.distance_km}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Paper>
);


const CustomWidget = ({ title, count, icon }) => (
  <div className="widget">
    <div className="left">
      <span className="title">{title}</span>
      <span className="counter">{count}</span>
    </div>
    <div className="right">
      {icon}
    </div>
  </div>
);

const UserList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets" style={{ display: "flex" }}>
          <CustomWidget
            title="ALL USERS"
            count={100}
            icon={<PersonOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />}
          />
          <CustomWidget
            title="ADMIN"
            count={50}
            icon={<ShoppingCartOutlinedIcon className="icon" style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod" }} />}
          />
          <CustomWidget
            title="EMPLOYEE"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
          />
          <CustomWidget
            title="CUSTOMERS"
            count={1000}
            icon={<AccountBalanceWalletOutlinedIcon className="icon" style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple" }} />}
          />
          <CustomWidget
            title="ACTIVE USER"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
          />
          <CustomWidget
            title="BLOCKED USER"
            count={500}
            icon={<MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">User List</div>
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
