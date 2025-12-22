import React from 'react';
import { FaTwitter, FaGithub, FaFilePdf, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      width: '100%',
      padding: '2rem 0',
      marginTop: '4rem',
      borderTop: '1px solid var(--color-border-light)',
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      alignItems: 'center',
      backgroundColor: 'var(--color-bg)', 
    }}>
      <a 
        href="https://twitter.com/darrenangle" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', textDecoration: 'none' }}
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a 
        href="https://github.com/darrenangle" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', textDecoration: 'none' }}
        aria-label="Github"
      >
        <FaGithub />
      </a>
      <a 
        href="https://www.instagram.com/griefmachines/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', textDecoration: 'none' }}
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a 
        href="/Darren.Angle.Resume.2024.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', textDecoration: 'none' }}
        aria-label="Resume PDF"
      >
        <FaFilePdf />
      </a>
    </footer>
  );
};