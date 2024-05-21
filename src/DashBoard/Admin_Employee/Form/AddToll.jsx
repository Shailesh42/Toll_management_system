import React, { useState } from 'react';
import './Form.css'; // Import the common CSS

function TollForm() {
  const [tripData, setTripData] = useState({
    vehicleNo: '',
    startingPoint: '',
    endingPoint: '',
    totalDistance: '', // Assuming totalDistance is a string for this example
    highwayNo: '',
  });

  const handleChange = (event) => {
    setTripData({
      ...tripData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Trip submitted:', tripData);
    setTripData({
      vehicleNo: '',
      startingPoint: '',
      endingPoint: '',
      totalDistance: '',
      highwayNo: '',
    });
  };

  return (
    <div className="vehicle-form">
      <h2>Add Trip</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vehicleNo">Vehicle No:</label>
        <input
          type="text"
          id="vehicleNo"
          name="vehicleNo"
          value={tripData.vehicleNo}
          onChange={handleChange}
          required
        />
        <label htmlFor="startingPoint">Starting Point:</label>
        <input
          type="text"
          id="startingPoint"
          name="startingPoint"
          value={tripData.startingPoint}
          onChange={handleChange}
          required
        />
        <label htmlFor="endingPoint">Ending Point:</label>
        <input
          type="text"
          id="endingPoint"
          name="endingPoint"
          value={tripData.endingPoint}
          onChange={handleChange}
          required
        />
        <label htmlFor="totalDistance">Total Distance (km):</label>
        <input
          type="text"
          id="totalDistance"
          name="totalDistance"
          value={tripData.totalDistance}
          onChange={handleChange}
          required
        />
        <label htmlFor="highwayNo">Highway No:</label>
        <input
          type="text"
          id="highwayNo"
          name="highwayNo"
          value={tripData.highwayNo}
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

export default TollForm;
