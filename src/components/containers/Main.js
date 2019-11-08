import React, { Component } from 'react';
import PropType from 'prop-types';
import UrlInputForm from '../form/UrlInputForm';
<<<<<<< HEAD
import apiCall from '../services/apiCall';
import Results from '../Results';
=======
import Results from '../Results';
import apiCall from '../../services/apiCall';
>>>>>>> 1d793ab675280c95c1a7b1e499ea15e8d86182f9

export default class Main extends Component {

  state = {
    urlInput: '',
    method: 'get',
    inputJson: '',
<<<<<<< HEAD
    outputJson: ''
=======
    resultsJson: ''
>>>>>>> 1d793ab675280c95c1a7b1e499ea15e8d86182f9
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
<<<<<<< HEAD
    event.preventDefault;
    apiCall(this.state.urlInput, this.state.method);
=======
    event.preventDefault();
    apiCall(this.state.urlInput)
      .then(json => {
        this.setState({ resultsJson: JSON.stringify(json) });
      });
>>>>>>> 1d793ab675280c95c1a7b1e499ea15e8d86182f9
  }

  render() {
    return (
      <>
        <UrlInputForm 
<<<<<<< HEAD
          handleUrlChange={this.handleUrlChange} 
          handleMethodChange={this.handleMethodChange} 
          handleInputJsonChange={this.handleInputJsonChange} 
          handleOutputJsonChange={this.handleOutputJsonChange}
          handleSubmit={this.handleSubmit} 
        />
        <Results json={this.state.outputJson}/>
=======
          handleUrlChange={this.handleUrlChange}   //function for updating url input in state
          handleMethodChange={this.handleMethodChange}
          handleInputJsonChange={this.handleInputJsonChange}
          handleSubmit={this.handleSubmit}
        />

        <Results json={this.state.resultsJson} />
>>>>>>> 1d793ab675280c95c1a7b1e499ea15e8d86182f9
      </>
    );
  }
}