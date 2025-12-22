import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export const Navbar: React.FC = () => {
  useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <>
      {!isHome && <div className="nav-spacer" style={{ height: '50px' }} />}
      <nav className="global-nav">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="nav-logo-link">
              <div className="ellipse-nav" />
            </Link>
          </div>
          
          <div className="nav-right">
            <div className="nav-brand-group">
              <span className="nav-name">DARREN ANGLE</span>
              <span className="nav-separator">|</span>
            </div>
            <Link to="/about" className="nav-item">ABOUT</Link>
          </div>
        </div>
      </nav>
    </>
  );
};