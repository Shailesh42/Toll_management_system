import React ,{useState} from 'react';
import './Form.css'; // Import the CSS for styling

const VehicleForm = () => {
  // ... form state and logic (replace with your implementation)
  const [vehicleData, setVehicleData] = useState({
    vehicleNo: '',
    ownerName: '',
    color: '',
    vehicleType: '',
    registrationDate: '',
  });

  const handleChange = (event) => {
    setVehicleData({
      ...vehicleData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Form submitted:', vehicleData);
    setVehicleData({
      vehicleNo: '',
      ownerName: '',
      color: '',
      vehicleType: '',
      registrationDate: '',
    });
  };

  return (
    <div className="vehicle-form">
      <h2>Add Vehicle</h2>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="vehicleNo">Vehicle No:</label>
        <input
          type="text"
          id="vehicleNo"
          name="vehicleNo"
          value={vehicleData.vehicleNo}
          onChange={handleChange}
          required
        />
        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={vehicleData.ownerName}
          onChange={handleChange}
          required
        />
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={vehicleData.color}
          onChange={handleChange}
          required
        />
        <label htmlFor="vehicleType">Vehicle Type:</label>
        <input
          type="text"
          id="vehicleType"
          name="vehicleType"
          value={vehicleData.vehicleType}
          onChange={handleChange}
          required
        />
        <label htmlFor="registrationDate">Registration Date:</label>
        <input
          type="date"
          id="registrationDate"
          name="registrationDate"
          value={vehicleData.registrationDate}
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
};

export default VehicleForm;
