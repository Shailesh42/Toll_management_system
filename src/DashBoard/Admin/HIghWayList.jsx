// HighwayList.jsx
import React from "react";

const HighwayList = ({ highways, onHighwayClick }) => {
  return (
    <div>
      <h2>Highway List</h2>
      <div className="highway-list">
        {Object.entries(highways).map(([highwayName, highwayDetails]) => (
          <div key={highwayName} className="highway-item" onClick={() => onHighwayClick(highwayName)}>
            <h3>{highwayName}</h3>
            <p>{highwayDetails.route}</p>
            <ul>
              {highwayDetails.cities.map((city, index) => (
                <li key={index}>
                  {city.city}, {city.state} - {city.distance_km} km
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighwayList;
