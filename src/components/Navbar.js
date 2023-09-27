import React from 'react';
import { Link } from 'react-router-dom';
// import userImage from '../assets/user2.png';

const Navbar = () => (
  <div className="divnavbar">
    <nav className="navbar">
      <span className="sitename gillsans">NYC High Schools</span>
      <span className="divider">&nbsp;</span>
      <Link to="/" className="navlink lato">HOME</Link>
      <Link to="/schools" className="navlink lato">LIST</Link>
      {/* <Link to="/schools/:schoolId" className="montserrat">SCHOOL</Link> */}
    </nav>
    {/* <img className="userimg" src={userImage} alt="Account user" width="22" height="22" /> */}
  </div>
);

export default Navbar;
