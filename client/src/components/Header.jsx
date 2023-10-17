import React, { useRef, useState } from 'react';
import lion from '../assets/lion-logo2.png';
import '../Header.css';

export default function Header() {
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
    <>
      <div className='row header'>
        <div className='col-1'>
          {/* Logo */}
          <img src={lion} className='logo' alt='lincoln-lion-logo' />
        </div>
        {/* School Name */}
        <div className='col-3 school-name'>Lincoln Elementary PTO</div>

        {/* Navbar Tabs */}
        <div className='col'>
          <ul className='nav justify-content-end'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
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

            {/* Dropdown More... Button */}
            <li
              className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}
              onMouseEnter={handleHover} // Show dropdown on hover
              onMouseLeave={handleLeave} // Hide dropdown on mouse leave
            >
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                More...
              </a>
              <div
                className={`dropdown-menu custom-fade ${
                  isDropdownOpen ? 'show' : ''
                }`} // Apply custom-fade transition
                aria-labelledby='navbarDropdown'
                ref={dropdownRef} // Reference to the dropdown element
              >
                <a className='dropdown-item' href='#'>
                  Item 1
                </a>
                <a className='dropdown-item' href='#'>
                  Item 2
                </a>
                <a className='dropdown-item' href='#'>
                  Item 3
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
