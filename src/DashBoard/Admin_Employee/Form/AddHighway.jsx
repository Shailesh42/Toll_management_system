import React, { useState } from 'react';
import './Form.css'; // Import the common CSS

function HighwayForm() {
  const [highwayData, setHighwayData] = useState({
    highwayName: '',
    rate: '', // Assuming rate is a string for this example
  });

  const handleChange = (event) => {
    setHighwayData({
      ...highwayData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Highway submitted:', highwayData);
    setHighwayData({
      highwayName: '',
      rate: '',
    });
  };

  return (
    <div className="vehicle-form">
      <h2>Add Highway</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="highwayName">Highway Name:</label>
        <input
          type="text"
          id="highwayName"
          name="highwayName"
          value={highwayData.highwayName}
          onChange={handleChange}
          required
        />
        <label htmlFor="rate">Rate per km (₹):</label>
        <input
          type="text"
          id="rate"
          name="rate"
          value={highwayData.rate}
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

export default HighwayForm;
