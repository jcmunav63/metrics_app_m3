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
    overview_paragraph: overviewParagraph,
    phone_number: phoneNumber,
    school_email: schoolEmail,
    website,
    total_students: totalStudents,
    attendance_rate: attendanceRate,
  } = selectedSchool;

  const calcRate = (attendanceRate * 100).toFixed(2);

  return (
    <div className="divdetails">
      <Link to="/schools" className="back" onClick={clearSelectedSchool}>
        <strong><em>Back</em></strong>
      </Link>
      <h2 className="gillsans">School Information:</h2>
      <p>
        <strong className="subtitles biggertext">Total Students:</strong>
        {' '}
        <span className="biggertext">
          {totalStudents}
        </span>
      </p>
      <p>
        <strong className="subtitles biggertext">Attendance Rate:</strong>
        {' '}
        <span className="biggertext">
          {calcRate}
        </span>
      </p>
      <p>
        <strong className="subtitles">Location:</strong>
        {' '}
        {location}
      </p>
      <p>
        <strong className="subtitles">Description:</strong>
        {' '}
        {overviewParagraph}
      </p>
      <p>
        <strong className="subtitles">Phone Number:</strong>
        {' '}
        {phoneNumber}
      </p>
      <p>
        <strong className="subtitles">Email:</strong>
        {' '}
        {schoolEmail}
      </p>
      <p>
        <strong className="subtitles">Website:</strong>
        {' '}
        {website}
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
