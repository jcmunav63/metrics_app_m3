import React from 'react';
import manhattan from '../assets/manhattan.png';
import bronx from '../assets/bronx.png';
import brooklyn from '../assets/brooklyn.png';
import queens from '../assets/queens.png';
import statenisland from '../assets/statenisland.png';
// import SchoolList from './SchoolList';

const Home = () => (
  <div className="divhome">
    <p className="lato centered">
      A metrics application that displays information
      <span>
        &nbsp;from New York City&apos;s High Schools
      </span>
    </p>
    <div className="grid">
      <div className="imgcard">
        <span className="boroheading gillsans">Manhattan</span>
        <img
          className="imagem"
          alt="Manhattan"
          src={manhattan}
          width="180px"
          height="400px"
        />
      </div>
      <div className="imgcard">
        <span className="boroheading gillsans">Bronx</span>
        <img
          className="imagex"
          alt="Bronx"
          src={bronx}
          width="300px"
          height="300px"
        />
      </div>
      <div className="imgcard">
        <span className="boroheading gillsans">Brooklyn</span>
        <img
          className="imagek"
          alt="Brooklyn"
          src={brooklyn}
          width="290px"
          height="290px"
        />
      </div>
      <div className="imgcard">
        <span className="boroheading gillsans">Queens</span>
        <img
          className="imageq"
          alt="Queens"
          src={queens}
          width="300px"
          height="300px"
        />
      </div>
      <div className="imgcard">
        <span className="boroheading gillsans">Staten Island</span>
        <img
          className="imager"
          alt="Staten Island"
          src={statenisland}
          width="300px"
          height="300px"
        />
      </div>
    </div>
    {/* <SchoolList /> */}
    {/* Image slider to select a borough */}
  </div>
);

export default Home;
