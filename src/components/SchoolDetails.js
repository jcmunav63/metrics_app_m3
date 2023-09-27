import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { clearSelectedSchool } from '../redux/actions/schools';

const SchoolDetails = ({ selectedSchool, clearSelectedSchool }) => {
  if (!selectedSchool) {
    return (
      <div>
        <h2>No school selected!</h2>
        <Link to="/schools" onClick={clearSelectedSchool}>
          <strong>Back</strong>
        </Link>
      </div>
    );
  }

  const {
    location,
    overviewParagraph,
    phoneNumber,
    schoolEmail,
    website,
    totalStudents,
    attendanceRate,
  } = selectedSchool;

  return (
    <div>
      <Link to="/schools" onClick={clearSelectedSchool}>
        <strong><em>Back</em></strong>
      </Link>
      <h2>School Information:</h2>
      <p>
        <strong>Location:</strong>
        {' '}
        {location}
      </p>
      <p>
        <strong>Description:</strong>
        {' '}
        {overviewParagraph}
      </p>
      <p>
        <strong>Phone Number:</strong>
        {' '}
        {phoneNumber}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {schoolEmail}
      </p>
      <p>
        <strong>Website:</strong>
        {' '}
        {website}
      </p>
      <p>
        <strong>Total Students:</strong>
        {' '}
        {totalStudents}
      </p>
      <p>
        <strong>Attendance Rate:</strong>
        {' '}
        {attendanceRate}
      </p>
    </div>
  );
};

SchoolDetails.propTypes = {
  selectedSchool: PropTypes.shape({
    location: PropTypes.string,
    overviewParagraph: PropTypes.string,
    phoneNumber: PropTypes.string,
    schoolEmail: PropTypes.string,
    website: PropTypes.string,
    totalStudents: PropTypes.number,
    attendanceRate: PropTypes.number,
  }).isRequired,
  clearSelectedSchool: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSchool: state.schools.selectedSchool,
});

export default connect(mapStateToProps, { clearSelectedSchool })(SchoolDetails);
