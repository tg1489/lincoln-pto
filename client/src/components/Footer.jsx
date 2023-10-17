import React from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import youtube from '../assets/yt.png';
import facebook from '../assets/fb.png';
import twitter from '../assets/x.png';
import email from '../assets/email.png';
import donate from '../assets/donate.png';
import '../Footer.css';

export default function Footer() {
  return (
    <div>
      <nav class='navbar navbar-dark bg-dark footer'>
        <img className='social-media-icons mx-1' src={email} />
        <img className='social-media-icons mx-1' src={facebook} />
        <img className='social-media-icons mx-1' src={twitter} />
        <img className='social-media-icons mx-1' src={youtube} />
        <img className='social-media-icons mx-1' src={donate} />
      </nav>
    </div>
  );
}
