import React from 'react';
import { Link } from 'react-router-dom';
import gear from '../assets/gear.png';

const Navbar = () => (
  <>
    <div className="divnavbar">
      <nav className="navbar">
        <span className="sitename gillsans">NYC High Schools</span>
        <span className="divider">&nbsp;</span>
        <Link to="/" className="navlink lato">HOME</Link>
        <Link to="/schools" className="navlink lato">LIST</Link>
      </nav>
    </div>
    <div className="second">
      <span className="lato">2017</span>
      <span><img className="gear" src={gear} alt="settings" width="20px" height="20px" /></span>
    </div>
  </>
);

export default Navbar;
