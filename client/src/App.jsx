import { useState, useEffect } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-bootstrap';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575.99);
    };

    handleResize();

    addEventListener('resize', handleResize);

    return () => {
      removeEventListener('resize', handleResize);
    };
  });
  return (
    <>
      <Header isMobile={isMobile} />
      <h3>WeLCoMe 2 liNC0lnn skOoL</h3>
    </>
  );
}

export default App;
