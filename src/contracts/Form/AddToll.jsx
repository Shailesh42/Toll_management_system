import React, { useState , useEffect} from 'react';
import './Form.css'; // Import the common CSS
import { web3, loadContract } from '../../web3/web3';

import {UserManagerContractAddress} from '../../web3/constvar';

function TollForm() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState('');
  const [tripData, setTripData] = useState({
    vehicleNo: '',
    startingPoint: '',
    endingPoint: '',
    totalDistance: '', // Assuming totalDistance is a string for this example
    highwayNo: '',
  });
   
  useEffect(() => {
    const initialize = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const contractInstance = await loadContract(UserManagerContractAddress);
      setContract(contractInstance);
    };

    initialize();
  }, []);
  const handleChange = (event) => {
    setTripData({
      ...tripData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!contract) {
      setError('Contract is not yet loaded. Please try again later.');
      return;
    }
    try {
      await contract.methods.addToll( tripData.vehicleNo,tripData.startingPoint,tripData.endingPoint,tripData.totalDistance,tripData.endingPointhighwayNo ).send({ from: account,gas: 3000000});
    }catch (error) {
      console.error('Login error:', error.message );
      setError('An error occurred during add toll. Please try again.');
    }
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
