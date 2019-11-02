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
          className="method" 
          value=""
          onClick={handleMethodChange}
          style={{ display: 'none' }} 
        />
          
      </>
    );
  }
}

