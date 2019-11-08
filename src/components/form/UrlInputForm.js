import React from 'react';
import PropTypes from 'prop-types';

const UrlInputForm = ({ handleUrlChange, handleMethodChange, handleInputJsonChange, handleSubmit }) => {

  return (
    <>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='url' onChange={handleUrlChange} />
        <input type='radio' name='method' value='get' onChange={handleMethodChange} /> GET
        <input type='radio' name='method' value='post' onChange={handleMethodChange} /> POST
        <input type='radio' name='method' value='put' onChange={handleMethodChange} /> PUT
        <input type='radio' name='method' value='patch' onChange={handleMethodChange} /> PATCH
        <input type='radio' name='method' value='delete' onChange={handleMethodChange} /> DELETE
        <textarea placeholder='json' onChange={handleInputJsonChange} />
        <button>Submit</button>
      </form>
    </>
  );
};

UrlInputForm.propTypes = {
  handleUrlChange: PropTypes.func.isRequired,
  handleMethodChange: PropTypes.func.isRequired,
  handleInputJsonChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UrlInputForm;