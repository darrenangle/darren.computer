import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <div style={{ height: '60px' }} /> {/* Spacer to prevent content overlap */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%',
        backgroundColor: 'var(--color-bg)', 
        borderBottom: '1px solid var(--color-border)',
        zIndex: 1000,
        transition: 'background-color 0.3s, border-color 0.3s'
      }}>
        <div style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '0.75rem 2rem',
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link 
              to="/" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                textDecoration: 'none', 
                color: 'var(--color-text)',
                opacity: !isHome ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: !isHome ? 'auto' : 'none'
              }}
            >
              <img src="/ellipse.svg" className="ellipse" alt="" style={{ width: '16px', height: '16px', margin: 0, padding: 0, filter: 'var(--color-logo-filter)' }} />
            </Link>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
            <span style={{ 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              color: 'var(--color-text)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              opacity: !isHome ? 1 : 0,
              maxWidth: !isHome ? '200px' : '0',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              transition: 'all 0.4s ease'
            }}>
              <span>DARREN ANGLE</span>
              <span style={{ color: 'var(--color-border-light)' }}>|</span>
            </span>
            <Link to="/writing" style={{ textDecoration: 'none', fontWeight: 500, color: 'var(--color-link)', textTransform: 'uppercase' }}>WRITING</Link>
            <span style={{ color: 'var(--color-border-light)' }}>|</span>
            <Link to="/" style={{ textDecoration: 'none', fontWeight: 500, color: 'var(--color-link)', textTransform: 'uppercase' }}>ABOUT</Link>
            
            <button 
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                padding: '0.2rem 0.5rem',
                fontSize: '0.8rem',
                cursor: 'pointer',
                color: 'var(--color-text)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                marginLeft: '0.5rem'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
