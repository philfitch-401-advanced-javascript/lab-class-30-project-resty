import React from 'react';
import PropTypes from 'prop-types';

const UrlInputForm = ({ handleUrlChange, handleMethodChange, handleInputJsonChange, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="urlInput" 
        name="url" 
        placeholder="URL" 
        defaultValue=""
        onChange={handleUrlChange} />
      <input
        type="radio" 
        className="get" 
        name="method"  
        defaultValue="checked"
        onChange={handleMethodChange} >GET</input>
      <input
        type="radio" 
        className="post" 
        name="method" 
        onChange={handleMethodChange} >POST</input>
      <input
        type="radio" 
        className= "put" 
        name="method" 
        onChange={handleMethodChange} >PUT</input>
      <input
        type="radio" 
        className="delete" 
        name="method" 
        onChange={handleMethodChange} >DELETE</input>
      <input
        type="text" 
        className="jsonInput" 
        name="json-input" 
        onChange={handleInputJsonChange} >JSON</input>
      <input
        type="textarea" 
        className="jsonOutput" 
        name="json-output" >JSON</input>
      <button>GO!</button>
    </form>
  );
};

export default UrlInputForm;

UrlInputForm.propTypes = {
  handleUrlChange: PropTypes.func.isRequired,
  handleMethodChange: PropTypes.func.isRequired,
  handleInputJsonChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};