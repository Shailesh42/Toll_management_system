import React ,{useState, useEffect } from 'react';
import './Form.css'; // Import the CSS for styling
import {UserManagerContractAddress} from '../../web3/constvar';
import { web3, loadContract } from '../../web3/web3'; 

const VehicleForm = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState('');
   
  useEffect(() => {
    const initialize = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const contractInstance = await loadContract(UserManagerContractAddress);
      setContract(contractInstance);
    };

    initialize();
  }, []);

  // ... form state and logic (replace with your implementation)
  const [vehicleData, setVehicleData] = useState({
    vehicleNo: '',
    ownerName: '',
   
    vehicleType: '',
   
  });

  const handleChange = (event) => {
    setVehicleData({
      ...vehicleData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!contract) {
      setError('Contract is not yet loaded. Please try again later.');
      return;
    }
    try{
      await contract.methods.addvehicle(vehicleData.ownerName, vehicleData.vehicleNo,vehicleData.vehicleType).send({ from: account,gas: 3000000 });
    }
    catch (error) {
      console.error('Login error:', error.message );
      setError('An error occurred during submit . Please try again.');
    }
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
        
        <label htmlFor="vehicleType">Vehicle Type:</label>
        <input
          type="text"
          id="vehicleType"
          name="vehicleType"
          value={vehicleData.vehicleType}
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
