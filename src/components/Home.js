import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import manhattan from '../assets/manhattan.png';
import bronx from '../assets/bronx.png';
import brooklyn from '../assets/brooklyn.png';
import queens from '../assets/queens.png';
import statenisland from '../assets/statenisland.png';

const Home = () => {
  const [selectedBorough, setSelectedBorough] = useState('');

  const navigate = useNavigate();

  const handleBoroughClick = (boroughName) => {
    setSelectedBorough(boroughName); // .toLowerCase;
  };

  useEffect(() => {
    if (selectedBorough) {
      navigate(`/schools?borough=${selectedBorough}`); // .toLowerCase()
    }
  }, [selectedBorough, navigate]);

  return (
    <div className="divhome">
      <p className="lato centered">
        A metrics application that displays information
        <span>
          &nbsp;from New York City&apos;s High Schools
        </span>
      </p>
      <p className="lato centered under">Click image:</p>
      <div className="grid">
        <div className="imgcard">
          <span className="boroheading gillsans">Manhattan</span>
          <button className="styleless" type="button" onClick={() => handleBoroughClick('M')}>
            <img
              className="imagem"
              alt="Manhattan"
              src={manhattan}
              width="180px"
              height="400px"
            />
          </button>
        </div>
        <div className="imgcard">
          <span className="boroheading gillsans">Bronx</span>
          <button className="styleless" type="button" onClick={() => handleBoroughClick('X')}>
            <img
              className="imagex"
              alt="Bronx"
              src={bronx}
              width="300px"
              height="300px"
            />
          </button>
        </div>
        <div className="imgcard">
          <span className="boroheading gillsans">Brooklyn</span>
          <button className="styleless" type="button" onClick={() => handleBoroughClick('K')}>
            <img
              className="imagek"
              alt="Brooklyn"
              src={brooklyn}
              width="290px"
              height="290px"
            />
          </button>
        </div>
        <div className="imgcard">
          <span className="boroheading gillsans">Queens</span>
          <button className="styleless" type="button" onClick={() => handleBoroughClick('Q')}>
            <img
              className="imageq"
              alt="Queens"
              src={queens}
              width="300px"
              height="300px"
            />
          </button>
        </div>
        <div className="imgcard">
          <span className="boroheading gillsans">Staten Island</span>
          <button className="styleless" type="button" onClick={() => handleBoroughClick('R')}>
            <img
              className="imager"
              alt="Staten Island"
              src={statenisland}
              width="300px"
              height="300px"
            />
          </button>
        </div>
      </div>
      <div className="footer">
        <p className="by lato">by JC Muñoz</p>
        <p className="acknowledge">
          Data from: NYC Open Data&nbsp;
          <br />
          <a
            className="lato"
            href="https://opendata.cityofnewyork.us/"
          >
            https://opendata.cityofnewyork.us/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
