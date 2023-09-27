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
    overview_paragraph,
    phone_number,
    school_email,
    website,
    total_students,
    attendance_rate,
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
        {overview_paragraph}
      </p>
      <p>
        <strong>Phone Number:</strong>
        {' '}
        {phone_number}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {school_email}
      </p>
      <p>
        <strong>Website:</strong>
        {' '}
        {website}
      </p>
      <p>
        <strong>Total Students:</strong>
        {' '}
        {total_students}
      </p>
      <p>
        <strong>Attendance Rate:</strong>
        {' '}
        {attendance_rate}
      </p>
    </div>
  );
};

SchoolDetails.propTypes = {
  selectedSchool: PropTypes.shape({
    location: PropTypes.string,
    overview_paragraph: PropTypes.string,
    phone_number: PropTypes.string,
    school_email: PropTypes.string,
    website: PropTypes.string,
    total_students: PropTypes.number,
    attendance_rate: PropTypes.number,
  }).isRequired,
  clearSelectedSchool: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSchool: state.schools.selectedSchool,
});

export default connect(mapStateToProps, { clearSelectedSchool })(SchoolDetails);
