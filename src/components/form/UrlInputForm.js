import React from 'react';
import PropTypes from 'prop-types';

const UrlInputForm = ({ handleUrlChange, handleMethodChange, handleInputJsonChange, handleSubmit }) => {

  return (
<<<<<<< HEAD
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

=======
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

>>>>>>> 1d793ab675280c95c1a7b1e499ea15e8d86182f9
UrlInputForm.propTypes = {
  handleUrlChange: PropTypes.func.isRequired,
  handleMethodChange: PropTypes.func.isRequired,
  handleInputJsonChange: PropTypes.func.isRequired,
<<<<<<< HEAD
  handleSubmit: PropTypes.func.isRequired
};
=======
  handleSubmit: PropTypes.func.isRequired,
};

export default UrlInputForm;
>>>>>>> 1d793ab675280c95c1a7b1e499ea15e8d86182f9
