import React from 'react';
import PropTypes from 'prop-types';
import '../styles/results.css';

const Results = ({ json }) => {
  return (
    <>
      <h2>RESULTS</h2>
      <pre>{json}</pre>
    </>
  );
};

Results.propTypes = {
  json: PropTypes.string
};

export default Results;