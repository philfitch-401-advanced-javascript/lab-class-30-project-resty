import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UrlInputForm extends Component {
  static propTypes = {
    handleUrlChange: PropTypes.func.isRequired
  }

  render() {
    const { handleUrlChange } = this.props;
    return (
      <input 
        type="text" 
        className="wide" 
        name="url" 
        placeholder="URL" 
        defaultValue=""
        onChange={handleUrlChange} />
    );
  }
}