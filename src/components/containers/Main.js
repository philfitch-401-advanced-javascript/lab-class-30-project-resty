import React, { Component } from 'react';
import PropType from 'prop-types';
import UrlInputForm from '../form/UrlInputForm';
import apiCall from '../services/apiCall';
import Results from '../Results';

export default class Main extends Component {

  state = {
    urlInput: '',
    method: 'get',
    inputJson: '',
    outputJson: ''
  };

  handleUrlChange = ({ target }) => {
    this.setState({ urlInput: target.value });
  }

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  }

  handleInputJsonChange = ({ target }) => {
    this.setState({ inputJson: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault;
    apiCall(this.state.urlInput, this.state.method);
  }

  render() {
    return (
      <>
        <UrlInputForm 
          handleUrlChange={this.handleUrlChange} 
          handleMethodChange={this.handleMethodChange} 
          handleInputJsonChange={this.handleInputJsonChange} 
          handleOutputJsonChange={this.handleOutputJsonChange}
          handleSubmit={this.handleSubmit} 
        />
        <Results json={this.state.outputJson}/>
      </>
    );
  }
}