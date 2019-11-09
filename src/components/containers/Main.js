import React, { Component } from 'react';
import UrlInputForm from '../form/UrlInputForm';
import Results from '../Results';
import apiCall from '../../services/apiCall';

export default class Main extends Component {

  state = {
    urlInput: '',
    method: 'get',
    inputJson: '',
    resultsJson: ''
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
    event.preventDefault();
    apiCall(this.state.urlInput, this.state.method, this.state.inputJson)
      .then(json => {
        this.setState({ resultsJson: JSON.stringify(json) });
      });
  }

  render() {
    return (
      <>
        <UrlInputForm 
          handleUrlChange={this.handleUrlChange}   //function for updating url input in state
          handleMethodChange={this.handleMethodChange}
          handleInputJsonChange={this.handleInputJsonChange}
          handleSubmit={this.handleSubmit}
        />

        <Results json={this.state.resultsJson} />
      </>
    );
  }
}