import React, { useState, useEffect } from 'react';
import { useNavigate,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './home/Navbar';
import Home from './home/Home';
import AboutPage from './home/About';
import FAQPage from './home/FAQs';
import LoginForm from './home/Login'; // Assuming path is correct
import SignupForm from './home/Signup';
import CustomerDashboard   from './DashBoard/CustomerDashboard';
import EmployeeDashboard from './DashBoard/EmployeeDashboard';
import AdminDashboard from './DashBoard/AdminDashboard';
import { SiToll } from "react-icons/si"; 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('customer'); // Initial user role
  const [selectedNavItem, setSelectedNavItem] = useState('home'); // New state for selected item
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Clear persisted login state on initial render (optional)
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');

    // ... existing logic for checking persisted login state (if needed)
  }, []);

  useEffect(() => {
    const persistedLogin = localStorage.getItem('isLoggedIn');
    if (persistedLogin === 'true') {
      setIsLoggedIn(true);
      const persistedUserRole = localStorage.getItem('UserRole');
      if (persistedUserRole) {
        setUserRole(persistedUserRole);
      }
    }
  }, []);

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
    // Optionally, handle additional logic based on the clicked item
  };

  const handleLoginSuccess = (UserRole) => {
    setIsLoggedIn(true);
    setUserRole(UserRole);

    // Persist login state in local storage (optional)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', UserRole);

    // Navigate to the user-specific dashboard based on userRole
    navigate(`/${UserRole}Dashboard`);
  };

  const handleSignup = async (username, email, password, confirmPassword) => {
    // Implement your signup logic here, potentially using an API call
    // This is a placeholder for illustration:
    console.log('Signup request:', { username, email, password, confirmPassword });

    // Upon successful signup, handle login automatically
    try {
      // Assuming successful signup based on your contract interaction logic
      const userRole = 'customer'; // Assuming new user is a customer (adjust based on logic)
      handleLoginSuccess(userRole); // Trigger login success with user role
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.message || 'An error occurred during signup.'); // You can set an error state here
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div className="App">
      <Navbar 
        handleNavItemClick={handleNavItemClick}
        isLoggedIn={isLoggedIn}
        selectedNavItem={selectedNavItem}
        handleLogout={handleLogout} // Pass handleLogout prop to Navbar
      />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                userRole === 'admin' ? (
                  <AdminDashboard />
                ) : userRole === 'employee' ? (
                  <EmployeeDashboard />
                ) : (
                  <CustomerDashboard />
                )
              ) : (
                selectedNavItem === 'login' ? (
                  <LoginForm
                    handleLoginSuccess={handleLoginSuccess}
                    userRole={userRole}
                    setUserRole={setUserRole}
                  />
                ) : (
                  <>
                    {selectedNavItem === 'home' && <Home />}
                    {selectedNavItem === 'about' && <AboutPage />}
                    {selectedNavItem === 'FAQ' && <FAQPage />}
                    {selectedNavItem === 'signup' && <SignupForm handleSignup={handleSignup} />}
                  </>
                )
              )
            }
          />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
          <Route path="/customerDashboard" element={<CustomerDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;