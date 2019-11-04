import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/method.css';

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
          className={styles.method} 
          id=""
          onClick={handleMethodChange}
        />
          
      </>
    );
  }
}

