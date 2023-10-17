import React, { useRef, useState } from 'react';
import lion from '../assets/lion-logo2.png';
import cart from '../assets/shopping-cart-outline-svgrepo-com.svg';
import '../Header.css';

export default function Header({ isMobile }) {
  // Create a ref to the dropdown element
  const dropdownRef = useRef(null);

  // State to control the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to show the dropdown on hover
  const handleHover = () => {
    setIsDropdownOpen(true);
  };

  // Function to hide the dropdown when the mouse leaves
  const handleLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark green'>
      <div className='container-fluid'>
        {/* Logo and School Name */}
        <a className='col-1 navbar-brand' href='#'>
          <img src={lion} className='logo' alt='lincoln-lion-logo' />
        </a>

        <div className='col-3 school-name'>Lincoln Elementary PTO</div>

        {/* Mobile Hamburger Menu */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navbar */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          {/* TEMP ADDED COL */}
          <ul
            className={`col navbar-nav ml-auto ${
              isMobile ? '' : 'nav-underline'
            }`}
          >
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                PTO Meeting Schedule
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Birthdays
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Store
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Volunteers
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Events
              </a>
            </li>
            {/* More... Dropdown */}
            {/* 991.33px */}
            {isMobile ? (
              <>
                {' '}
                <li className='nav-item'>
                  {' '}
                  <a className='dropdown-item' href='#'>
                    Fundraising
                  </a>
                </li>
                <li className='nav-item'>
                  {' '}
                  <a className='dropdown-item' href='#'>
                    About Us
                  </a>
                </li>
                <li className='nav-item'>
                  {' '}
                  <a className='dropdown-item' href='#'>
                    About Us
                  </a>
                </li>
              </>
            ) : (
              <>
                {' '}
                <li
                  className={`nav-item dropdown ${
                    isDropdownOpen ? 'show' : ''
                  }`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                  >
                    More...
                  </a>
                  <div
                    className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                    aria-labelledby='navbarDropdown'
                    ref={dropdownRef}
                  >
                    <a className='dropdown-item' href='#'>
                      Fundraising
                    </a>
                    <a className='dropdown-item' href='#'>
                      About Us
                    </a>
                    <a className='dropdown-item' href='#'>
                      Contact Us
                    </a>
                  </div>
                </li>
              </>
            )}
          </ul>
          {/* Shopping Cart */}
          {isMobile ? (
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Shopping Cart
              </a>
            </li>
          ) : (
            <img src={cart} className='shopping-cart-image mx-2' />
          )}

          {/* Profile Picture shows after login */}
          {/* Login */}
          <span className='login'>Login</span>
        </div>
      </div>
    </nav>
  );
}
