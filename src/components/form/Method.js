import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Method extends Component {
  static propTypes = {
    handleMethodChange: PropTypes.func.isRequired
  }

  render() {
    const { handleMethodChange } = this.props;
    return (
      <>
        <input 
          type="radio" 
          name="method" 
          value=""
          onClick={handleMethodChange} />
        
      </>
    );
  }
}

