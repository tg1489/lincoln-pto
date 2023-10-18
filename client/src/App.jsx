import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Events from './components/Events.jsx';
import Fundraising from './components/Fundraising.jsx';
import Volunteers from './components/Volunteers.jsx';
import PTO from './components/PTO';
import Birthdays from './components/Birthdays';
import Store from './components/Store';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-bootstrap';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Page Changes
  const handlePageChange = (page) => setCurrentPage(page);

  // SPA Switch
  const render = () => {
    switch (currentPage) {
      case 'home':
        return <Home isMobile={isMobile} />;
      case 'pto':
        return <PTO isMobile={isMobile} />;
      case 'birthdays':
        return <Birthdays isMobile={isMobile} />;
      case 'contact':
        return <Contact isMobile={isMobile} />;
      case 'events':
        return <Events isMobile={isMobile} />;
      case 'fundraising':
        return <Fundraising isMobile={isMobile} />;
      case 'store':
        return <Store isMobile={isMobile} />;
      case 'volunteers':
        return <Volunteers isMobile={isMobile} />;
      case 'about':
        return <About isMobile={isMobile} />;

      default:
        return <Home isMobile={isMobile} />;
    }
  };

  // Mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991.99);
      // 575.99 (original)
    };

    handleResize();

    addEventListener('resize', handleResize);

    return () => {
      removeEventListener('resize', handleResize);
    };
  });
  return (
    <>
      <Header
        isMobile={isMobile}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {render()}
      <Footer className='footer' isMobile={isMobile} />
    </>
  );
}

export default App;
