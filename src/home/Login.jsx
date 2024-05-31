import React, { useState, useEffect } from 'react';
import { web3, loadContract } from '../web3/web3';// Assuming web3 configuration is in a separate file
import { useNavigate } from 'react-router-dom';
import './form.css';
import {UserManagerContractAddress} from '../web3/constvar';

const LoginForm = ({ handleLoginSuccess }) =>{
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('customer'); // Initial state
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initialize = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const contractInstance = await loadContract(UserManagerContractAddress);
      setContract(contractInstance);
    };

    initialize();
  }, []);



  const handleLoginClick = async () => {
    if (!contract) {
      setError('Contract is not yet loaded. Please try again later.');
      return;
    }
    
    
    try {
      // Fix: Pass the selected user role in the login call
      let  v ;
       if(userRole === 'admin')  v = 0 ;
       else  if(userRole ===  'employee') v = 1 ;
       else v = 2 ;
       const  receipt = await contract.methods.login(password, v).send({ from: account });// Assuming gas limit is appropriate
       
      if (receipt.events && receipt.events.UserLogin) {
        console.log('Login successful!');
        // Simulate setting state for demonstration (consider using a state management library like Redux or Context API)
        setIsLoggedIn(true);
        handleLoginSuccess(userRole);
        // Persist login state in local storage (optional)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', userRole); // Persist user role

        // Navigate to the user-specific dashboard based on userRole
        navigate(`/${userRole}Dashboard`); // Assuming dashboard paths are correct
      } else {
        setError('Invalid password or role');
      }
    } catch (error) {
      console.error('Login error:', error.message );
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      
      <div className="form-container">
      <div className="title-text">
        <div className="title login">Login</div>
      </div>
        <div className="form-inner">
          <form>
            <div className="field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="field">
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="select-box"
              >
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="customer">Customer</option>
              </select>
            </div>
            <div className="field">
              <input type="button" value="Login" onClick={handleLoginClick} />
            </div>
          </form>
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default LoginForm;
