import React, { useEffect, useRef, useState } from 'react';
import lion from '../assets/lion-logo2.png';
import cart from '../assets/shopping-cart-outline-svgrepo-com.svg';
import '../Header.css';

export default function Header({ isMobile, handlePageChange, currentPage }) {
  const [activeTab, setActiveTab] = useState('');
  const mobileNavbarRef = useRef(null);

  // Update the activeTab state when the current prop changes
  useEffect(() => {
    setActiveTab(currentPage);
  }, [currentPage]);

  const handleClick = (tab) => {
    setActiveTab(tab);

    // Call the handlePageChange prop function to update the current page
    handlePageChange(tab);

    // For mobile, close the navbar after item is clicked
    if (isMobile) {
      mobileNavbarRef.current.click();
    }
  };

  const handleImageClick = (tab) => {
    setActiveTab(tab);
    handlePageChange(tab);

    // Removes the dropdown nav menu when you click on the logo for 'home'
    document.getElementById('navbarNav').classList.remove('show');
  };

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
          <img
            src={lion}
            className='logo'
            alt='lincoln-lion-logo'
            onClick={() => handleImageClick('home')}
          />
        </a>

        <div className='col-3 school-name'>Lincoln Elementary PTO</div>

        {/* Mobile Hamburger Menu */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          ref={mobileNavbarRef}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navbar */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul
            className={`col navbar-nav ml-auto ${
              isMobile ? '' : 'nav-underline'
            }`}
          >
            <li className='nav-item'>
              <a
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                href='#'
                onClick={() => handleClick('home')}
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${activeTab === 'pto' ? 'active' : ''}`}
                href='#'
                onClick={() => handleClick('pto')}
              >
                PTO Meeting Schedule
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${
                  activeTab === 'birthdays' ? 'active' : ''
                }`}
                href='#'
                onClick={() => handleClick('birthdays')}
              >
                Birthdays
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${activeTab === 'store' ? 'active' : ''}`}
                href='#'
                onClick={() => handleClick('store')}
              >
                Store
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${
                  activeTab === 'volunteers' ? 'active' : ''
                }`}
                href='#'
                onClick={() => handleClick('volunteers')}
              >
                Volunteers
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${activeTab === 'events' ? 'active' : ''}`}
                href='#'
                onClick={() => handleClick('events')}
              >
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
                  <a
                    className='nav-link'
                    href='#'
                    onClick={() => handleClick('fundraising')}
                  >
                    Fundraising
                  </a>
                </li>
                <li className='nav-item'>
                  {' '}
                  <a
                    className='nav-link'
                    href='#'
                    onClick={() => handleClick('about')}
                  >
                    About Us
                  </a>
                </li>
                <li className='nav-item'>
                  {' '}
                  <a
                    className='nav-link'
                    href='#'
                    onClick={() => handleClick('contact')}
                  >
                    Contact Us
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
                    <a
                      className='dropdown-item'
                      href='#'
                      onClick={() => handleClick('fundraising')}
                    >
                      Fundraising
                    </a>
                    <a
                      className='dropdown-item'
                      href='#'
                      onClick={() => handleClick('about')}
                    >
                      About Us
                    </a>
                    <a
                      className='dropdown-item'
                      href='#'
                      onClick={() => handleClick('contact')}
                    >
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
              <img src={cart} className='shopping-cart-image mx-2' />
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
