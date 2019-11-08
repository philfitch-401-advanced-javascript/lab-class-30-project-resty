import React from 'react';
import PropTypes from 'prop-types';

const Results = () => {
  return (
    <header>
      <h1>Results JSON</h1>
      <p>{json}</p>
    </header>
  );
};

Results.propTypes = {
  json: PropTypes.object.isRequired
};

export default Results;