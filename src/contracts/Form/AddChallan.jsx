import React,{ useState, useEffect }from 'react';

import { web3, loadContract } from '../../web3/web3';

import {UserManagerContractAddress} from '../../web3/constvar';
import './Form.css'; // Import the common CSS

function ChallanForm() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState('');
  const [challanData, setChallanData] = useState({
    vehicleNo: '',
    challanPrice: '', // Assuming challanPrice is a string for this example
    reason: '',
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
    setChallanData({
      ...challanData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!contract) {
      setError('Contract is not yet loaded. Please try again later.');
      return;
    }
    event.preventDefault();
    try{
      await contract.methods.addChallan(challanData.vehicleNo,challanData.challanPrice,challanData.reason).send({ from: account,gas: 3000000 });
    }catch (error) {
      console.error('Login error:', error.message );
      setError('An error occurred during login. Please try again.');
    }
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
        <input 
          type="text"
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
