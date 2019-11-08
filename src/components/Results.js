import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const Results = () => {
  return (
    <header>
      <h1>Results JSON</h1>
      <p>{json}</p>
    </header>
=======
const Results = ({ json }) => {
  return (
    <>
      <h1>SO MANY RESULTS</h1>
      <pre>{json}</pre>
    </>
>>>>>>> 1d793ab675280c95c1a7b1e499ea15e8d86182f9
  );
};

Results.propTypes = {
<<<<<<< HEAD
  json: PropTypes.object.isRequired
};
=======
  json: PropTypes.string
}
>>>>>>> 1d793ab675280c95c1a7b1e499ea15e8d86182f9

export default Results;