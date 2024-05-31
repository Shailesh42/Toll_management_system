  import React from 'react';
  import './Navbar.css';
  import { SiToll } from "react-icons/si";
  function Navbar({ handleNavItemClick, isLoggedIn, selectedNavItem, handleLogout }) {
    return (
      <nav >
        <div className="icon"><SiToll /></div>
        <ul>
        
          
         
          {!isLoggedIn && ( // Only render login/signup when not logged in
            <>
              <li onClick={() => handleNavItemClick('about')}>About</li>
              <li onClick={() => handleNavItemClick('FAQ')}>FAQ</li>
              <li onClick={() => handleNavItemClick('Privacy')}>Privacy</li>
              <li onClick={() => handleNavItemClick('login')}>Login</li>
              <li onClick={() => handleNavItemClick('signup')}>Signup</li>
            </>
          )}
          {isLoggedIn && ( // Render logout button when logged in
            <li onClick={handleLogout}>Logout</li>
          )}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  