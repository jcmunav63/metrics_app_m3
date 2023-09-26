import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchSchools, selectSchool } from '../redux/actions/schools';

const SchoolList = ({ schools, fetchSchools, selectSchool }) => {
  // Fetch schools from Redux store when the component mounts
  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);
  return (
    <div>
      <h1>List of High Schools</h1>
      <ul>
        {schools.map((school) => (
          <li key={school.dbn}>
            <Link to={`/schools/${school.dbn}`} onClick={() => selectSchool(school.dbn)}>
              <strong>DBN:</strong>
              {' '}
              {school.dbn}
              <br />
              <strong>School Name:</strong>
              {' '}
              {school.school_name}
              <br />
              <strong>Borough:</strong>
              {' '}
              {school.borough}
            </Link>
          </li>
        ))}
        ;
      </ul>
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
};

const mapStateToProps = (state) => ({
  schools: state.schools.schools,
});

export default connect(mapStateToProps, { fetchSchools, selectSchool })(SchoolList);
