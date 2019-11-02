import React, { Component } from 'react';
import PropType from 'prop-types';
import UrlInputForm from '../form/UrlInputForm';
import Method from '../form/Method';

export default class Main extends Component {

  state = {
    urlInput: '',
    method: 'get'
  };

  handleUrlChange = ({ target }) => {
    this.setState({ urlInput: target.value });
  }

  handleMethodChange = ({ target }) => {
    this.setState({ methodInput: target.value });
  }

  render() {
    return (
      <>
        <form>
          <UrlInputForm handleUrlChange={this.handleUrlChange} />
          <div id="methods">
            <Method value={'get'} handleMethodChange={this.handleMethodChange} checked />
            <span>GET</span>
            <Method value={'post'} handleMethodChange={this.handleMethodChange} />
            <span>POST</span>
            <Method value={'put'} handleMethodChange={this.handleMethodChange} />
            <span>PUT</span>
            <Method value={'delete'} handleMethodChange={this.handleMethodChange} />
            <span>DELETE</span>
          </div>
        </form>
      </>
    );
  }
}