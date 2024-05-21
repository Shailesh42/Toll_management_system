import React, { useState } from 'react';
import './Form.css'; // Import the common CSS

function ChallanForm() {
  const [challanData, setChallanData] = useState({
    vehicleNo: '',
    challanPrice: '', // Assuming challanPrice is a string for this example
    reason: '',
  });

  const handleChange = (event) => {
    setChallanData({
      ...challanData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Challan submitted:', challanData);
    setChallanData({
      vehicleNo: '',
      challanPrice: '',
      reason: '',
    });
  };

  return (
    <div className="vehicle-form">
      <h2>Add Challan</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vehicleNo">Vehicle No:</label>
        <input
          type="text"
          id="vehicleNo"
          name="vehicleNo"
          value={challanData.vehicleNo}
          onChange={handleChange}
          required
        />
        <label htmlFor="challanPrice">Challan Price (₹):</label>
        <input
          type="text"
          id="challanPrice"
          name="challanPrice"
          value={challanData.challanPrice}
          onChange={handleChange}
          required
        />
        <label htmlFor="reason">Reason for Challan:</label>
        <textarea
          id="reason"
          name="reason"
          value={challanData.reason}
          onChange={handleChange}
          required
          rows={4} // Adjust rows as needed for reason description
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

export default ChallanForm;
