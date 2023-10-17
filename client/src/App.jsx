import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
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
      <Footer isMobile={isMobile} />
    </>
  );
}

export default App;
