import React from 'react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <Navbar />
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Page not found.</p>
        <Link to="/" style={{ textDecoration: 'underline' }}>Return Home</Link>
      </div>
    </div>
  );
};
