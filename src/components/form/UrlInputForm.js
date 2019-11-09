import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/url-input-form.css';

const UrlInputForm = ({ handleUrlChange, handleMethodChange, handleInputJsonChange, handleSubmit }) => {

  return (
    <>
      <h2>FORM</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input id='url_input' type='text' placeholder='url' onChange={handleUrlChange} />
          <input type='radio' name='method' value='get' onChange={handleMethodChange} /> GET
          <input type='radio' name='method' value='post' onChange={handleMethodChange} /> POST
          <input type='radio' name='method' value='put' onChange={handleMethodChange} /> PUT
          <input type='radio' name='method' value='delete' onChange={handleMethodChange} /> DELETE
        </div>
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