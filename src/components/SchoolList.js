import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchSchools, selectSchool, clearSelectedSchool,
} from '../redux/actions/schools';

const SchoolList = (
  {
    schools, fetchSchools, selectSchool, clearSelectedSchool,
  },
) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Fetch schools from Redux store when the component mounts
  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  const total = schools.length;

  const queryParams = new URLSearchParams(location.search);
  const selectedBorough = queryParams.get('borough');

  let filteredSchools = schools;

  if (selectedBorough) {
    filteredSchools = schools.filter(
      (school) => school.boro && school.boro.toLowerCase() === selectedBorough.toLowerCase(),
    );
  }
  if (searchQuery) {
    // Filter schools based on the search bar input
    filteredSchools = schools.filter(
      (school) => school.school_name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
  const filtered = filteredSchools.length;

  return (
    <div className="divschoollist">
      <h1 className="gillsans">
        List of High Schools&nbsp;
        <span className="h1b">
          (
          {selectedBorough !== '' ? filtered : total}
          )
        </span>
      </h1>
      <div className="divsearch">
        <input
          className="lato"
          type="text"
          placeholder="School name..."
          maxLength="50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="lato"
          type="button"
          onClick={() => setSearchQuery('')}
        >
          Clear
        </button>
      </div>
      <Link to="/" className="back" onClick={clearSelectedSchool}>
        <strong>Back Home</strong>
      </Link>
      <div className="container">
        <ul>
          {filteredSchools.map((school, index) => (
            <li key={school.dbn} className="lato">
              <span className="white lato">
                {index + 1}
              </span>
              {' '}
              <Link to={`/schools/${school.dbn}`} onClick={() => selectSchool(school.dbn)}>
                Borough:
                {'  ('}
                <strong>{school.boro}</strong>
                {') '}
                <strong>{school.borough}</strong>
                {'  '}
                dbn:
                {'  '}
                {school.dbn}
                <br />
                Name:
                {'  '}
                <strong>{school.school_name}</strong>
              </Link>
            </li>
          ))}
        </ul>
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

SchoolList.propTypes = {
  schools: PropTypes.arrayOf(
    PropTypes.shape({
      dbn: PropTypes.string.isRequired,
      school_name: PropTypes.string.isRequired,
      boro: PropTypes.string.isRequired,
      borough: PropTypes.string,
    }),
  ).isRequired,
  fetchSchools: PropTypes.func.isRequired,
  selectSchool: PropTypes.func.isRequired,
  clearSelectedSchool: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  schools: state.schools.schools,
});

export default connect(mapStateToProps,
  {
    fetchSchools, selectSchool, clearSelectedSchool,
  })(SchoolList);
