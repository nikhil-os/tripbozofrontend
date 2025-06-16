import React from 'react';
import './LoadingBar.css';

const LoadingBar = ({ show }) => {
  if (!show) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(255,255,255,0.6)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s',
      }}
    >
      <div className="loader" />
    </div>
  );
};

export default LoadingBar;
