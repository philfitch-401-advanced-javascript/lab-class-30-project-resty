import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ json }) => {
  return (
    <>
      <h1>RESULTS</h1>
      <pre>{json}</pre>
    </>
  );
};

Results.propTypes = {
  json: PropTypes.string
};

export default Results;