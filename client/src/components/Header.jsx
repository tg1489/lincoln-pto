import React from 'react';
import lion from '../assets/lion-logo2.png';
import '../Header.css';

export default function Header() {
  return (
    <>
      <div className='row header'>
        <div className='col-1'>
          <img src={lion} className='logo' alt='lincoln-lion-logo' />
        </div>
        <div className='col school-name'>Lincoln Elementary PTO</div>
        <div className='col'>
          <div className='row'>
            <div className='col'>Home</div>
            <div className='col'>Home</div>
            <div className='col'>Home</div>
          </div>
        </div>
      </div>
    </>
  );
}

/*






<nav className='nav navbar navbar-expand-sm mb-3'>
        <div className='container-fluid'>
          <div className='row'></div>
          <div className='navbar-brand'>
            <img src={lion} className='logo' alt='lincoln-lion-logo' />
          </div>

          <span>Lincoln Elementary PTO</span>
        </div>
      </nav>











 <div className='col'>Home</div>
            <div className='col'>PTO Meeting Schedule</div>
            <div className='col'>Birthdays</div>
            <div className='col'>Store</div>
            <div className='col'>Volunteers</div>
            <div className='col'>Events</div>
            <div className='col'>Fundraising</div>
            <div className='col'>About Us</div>
            <div className='col'>Contact Us</div>
            <img />
            <img />
            <div className='col'>Login</div>
          </div>


*/
