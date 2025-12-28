import React from 'react';
import '../styles/Header.css';
import logo from '../assets/NS_white_01.png';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-logo">
          <img 
            src={logo} 
            alt="Nuansa Legal Logo" 
            className="logo-image"
          />
        </div>
        <div className="header-title">
          <h1>Generator Surat Permohonan</h1>
          <p>Buat surat permohonan dengan mudah dan cepat</p>
        </div>
      </div>
    </header>
  );
};

export default Header;