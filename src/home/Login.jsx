import React, { useState, useEffect } from 'react';
import { web3, loadContract } from '../web3/web3'; // Assuming web3 configuration is in a separate file
import { useNavigate } from 'react-router-dom';
import './form.css';

const UserManagerContractAddress = '0x570a426C90446c225de679467bc1d955D7b6AfFE';

const LoginForm = ({ handleLoginSuccess, UserRole, setuserRole }) =>{
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('customer'); // Initial state
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const loadAccountAndContract = async () => {
  //     const accounts = await web3.eth.getAccounts();
  //     setAccount(accounts[0]); // Assuming we want the first account

  //     const deployedContract = await loadContract(UserManagerContractAddress);
  //     setContract(deployedContract);
  //   };

  //   loadAccountAndContract();
  // }, []);

  // const handleLoginClick = async () => {
  //   if (!contract) {
  //     setError('Contract is not yet loaded. Please try again later.');
  //     return;
  //   }

    try {
      // Fix: Pass the selected user role in the login call
      const isLoggedIn = true ;
      //  await contract.methods
      // //   .login(password, 0) // Pass userRole here
      // //   .call({  from: window.ethereum.selectedAddress, gas: '8000000' }); // Assuming gas limit is appropriate

      if (isLoggedIn) {
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
      <div className="title-text">
        <div className="title login">Login</div>
      </div>
      <div className="form-container">
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
