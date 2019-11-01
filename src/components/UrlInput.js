import React from 'react';
import PropTypes from 'prop-types';

const UrlInput = (handleUrlChange) => {
  return (
    <input 
      type="text" 
      className="wide" 
      name="url" 
      placeholder="URL" 
      value=""
      onChange={handleUrlChange} />
  );
};

UrlInput.propTypes = {

}

export default UrlInput;