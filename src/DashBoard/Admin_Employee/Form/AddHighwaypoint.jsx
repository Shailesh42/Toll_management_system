import React, { useState } from 'react';
import './Form.css'; // Import the common CSS

function HighwayPointForm() {
  const [waypointData, setWaypointData] = useState({
    highwayName: '',
    pointName: '',
    pointDistance: '', // Assuming pointDistance is a string for this example
  });

  const handleChange = (event) => {
    setWaypointData({
      ...waypointData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Highway Waypoint submitted:', waypointData);
    setWaypointData({
      highwayName: '',
      pointName: '',
      pointDistance: '',
    });
  };

  return (
    <div className="vehicle-form">
      <h2>Add Highway Waypoint</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="highwayName">Highway Name:</label>
        <input
          type="text"
          id="highwayName"
          name="highwayName"
          value={waypointData.highwayName}
          onChange={handleChange}
          required
        />
        <label htmlFor="pointName">Waypoint Name:</label>
        <input
          type="text"
          id="pointName"
          name="pointName"
          value={waypointData.pointName}
          onChange={handleChange}
          required
        />
        <label htmlFor="pointDistance">Distance from Start (km):</label>
        <input
          type="text"
          id="pointDistance"
          name="pointDistance"
          value={waypointData.pointDistance}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit">
          Submit
        </button>
        <button type="button" className="cancel">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default HighwayPointForm;
