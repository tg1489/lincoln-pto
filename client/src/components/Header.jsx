import React from 'react';
import lion from '../assets/lion-logo2.png';
import '../Header.css';

export default function Header() {
  return (
    <>
      <div className='container-fluid header'>
        <div className='row'>
          <div className='col'>
            <span>Home</span>
            <span>PTO Meeting Schedule</span>
            <span>Birthdays</span>
            <span>Store</span>
            <span>Volunteers</span>
            <span>Events</span>
            <span>Fundraising</span>
            <span>About Us</span>
            <span>Contact Us</span>
            <img />
            <img />
            <span>Login</span>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
            <img src={lion} className='logo' alt='lincoln-lion-logo' />
          </div>
          <div className='col-3 school-name'>Lincoln Elementary PTO</div>
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
