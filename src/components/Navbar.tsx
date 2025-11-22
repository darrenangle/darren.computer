import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

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
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--color-text)' }}>
              <img src="/ellipse.svg" className="ellipse" alt="" style={{ width: '16px', height: '16px', margin: 0, padding: 0, filter: 'var(--color-logo-filter)' }} />
              <span style={{ fontWeight: 700, textTransform: 'uppercase' }}>Darren Angle</span>
            </Link>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/writing" style={{ textDecoration: 'none', fontWeight: 500, color: 'var(--color-link)' }}>Writing</Link>
            <a href="https://twitter.com/darrenangle" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--color-text-secondary)' }}>Twitter</a>
            <a href="https://github.com/darrenangle" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--color-text-secondary)' }}>Github</a>
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
                height: '24px'
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