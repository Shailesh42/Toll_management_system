  import React, { useState, useEffect } from 'react';
  import { web3, loadContract } from '../web3/web3';
  import { useNavigate } from 'react-router-dom'; 
  import './form.css';

  const UserManagerContractAddress = '0x24dD10BB21DBd0231F54992DB883594E78015787';

  const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const UserManagerContractAddress = '0x85B824F723B7D798217634891F591A415F5D721E';
    useEffect(() => {
      const initialize = async () => {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
  
        const contractInstance = await loadContract(UserManagerContractAddress);
        setContract(contractInstance);
      };
  
      initialize();
    }, []);

    const handleSignup = async (e) => {
      e.preventDefault();
      if (!contract) {
        setError('Contract is not yet loaded. Please try again later.');
        return;
      }
      // Input validation (consider adding more validations as needed)
      if (!username || !email || !password || !confirmPassword) {
        setError('Please fill in all required fields.');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      try {
        // Call the contract's signUp function
     await contract.methods.signUp(username, email, password).send({from: account });// Assuming metamask is connected
        

        // console.log('Transaction hash:', tx.transactionHash);

        // Handle successful signup
        setSuccessMessage('Signup successful! Please login.');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate('/login');
      } catch (error) {
        console.error('Signup error:', error);
        setError(error.message || 'An error occurred during signup.');
      }
    };
    
    return (
      <div className="wrapper">
        
        <div className="form-container">
        <div className="title-text">
          <div className="title signup">Signup</div>
        </div>
          <div className="form-inner">
            <form>
              <div className="field">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
              </div>
              <div className="field">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </div>
              <div className="field">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </div>
              <div className="field">
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
              </div>
              <div className="field">
                <input type="submit" value="Signup" onClick={handleSignup} />
              </div>
            </form>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
      </div>
    );
  };

  export default SignupForm;