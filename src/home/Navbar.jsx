  import React from 'react';
  import './Navbar.css';
  import { SiToll } from "react-icons/si";
  function Navbar({ handleNavItemClick, isLoggedIn, selectedNavItem, handleLogout }) {
    return (
      <nav style={{ backgroundImage: 'linear-gradient(to right,  #77C9D4, #57BC90)' }}>
        <div className="icon"><SiToll /></div>
        <ul>
          <li
            className={selectedNavItem === 'home' ? 'active' : ''}
            onClick={() => handleNavItemClick('home')}
          >
            Home
          </li>
          <li
            className={selectedNavItem === 'about' ? 'active' : ''}
            onClick={() => handleNavItemClick('about')}
          >
            About
          </li>
          <li
            className={selectedNavItem === 'FAQ' ? 'active' : ''}
            onClick={() => handleNavItemClick('FAQ')}
          >
            FAQ
          </li>
          {!isLoggedIn && ( // Only render login/signup when not logged in
            <>
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
  