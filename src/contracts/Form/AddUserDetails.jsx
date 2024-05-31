import React, { useState } from 'react';
import './Form.css'; // Import the common CSS

function UserDetailsForm() {
  const [userData, setUserData] = useState({
    mobileNo: '',
    address: '',
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('User details submitted:', userData);
    setUserData({
      mobileNo: '',
      address: '',
    });
  };

  return (
    <div className="vehicle-form">
      <h2>Add User Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobileNo">Mobile Number:</label>
        <input
          type="tel" // Use "tel" for phone number input
          id="mobileNo"
          name="mobileNo"
          value={userData.mobileNo}
          onChange={handleChange}
          required
        />
        <label htmlFor="address">Address:</label>
        <input
          id="address"
          name="address"
          value={userData.address}
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

export default UserDetailsForm;
