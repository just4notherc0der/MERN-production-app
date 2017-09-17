import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => {
  return (
    <span style={{ color: "#ad1212" }}>{text}</span>
  );
}

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
