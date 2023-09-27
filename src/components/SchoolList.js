import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchSchools, selectSchool, clearSelectedSchool } from '../redux/actions/schools';

const SchoolList = (
  {
    schools, fetchSchools, selectSchool, clearSelectedSchool,
  },
) => {
  const [searchQuery, setSearchQuery] = useState('');
  // Fetch schools from Redux store when the component mounts
  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  const filteredSchools = schools.filter(
    (school) => school.school_name.toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="divschoollist">
      <h1 className="gillsans">List of High Schools</h1>
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
      <ul>
        {filteredSchools.map((school) => (
          <li key={school.dbn} className="lato">
            <Link to={`/schools/${school.dbn}`} onClick={() => selectSchool(school.dbn)}>
              Borough:
              {'  '}
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
      <Link to="/schools" onClick={clearSelectedSchool}>
        <strong>Back to List</strong>
      </Link>
    </div>
  );
};

SchoolList.propTypes = {
  schools: PropTypes.arrayOf(
    PropTypes.shape({
      dbn: PropTypes.string.isRequired,
      school_name: PropTypes.string.isRequired,
      borough: PropTypes.string.isRequired,
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
  { fetchSchools, selectSchool, clearSelectedSchool })(SchoolList);
