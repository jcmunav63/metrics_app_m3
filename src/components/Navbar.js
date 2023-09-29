import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="divnavbar">
    <nav className="navbar">
      <span className="sitename gillsans">NYC High Schools</span>
      <span className="divider">&nbsp;</span>
      <Link to="/" className="navlink lato">HOME</Link>
      <Link to="/schools" className="navlink lato">LIST</Link>
    </nav>
  </div>
);

export default Navbar;
