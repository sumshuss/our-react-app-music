import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/katebush">Kate</Link>
        <Link to="/justinbieber">Justin Bieber</Link>
        <Link to="/rammstein">Rammstein</Link>
      </nav>
    </>
  );
}

export default Header;
