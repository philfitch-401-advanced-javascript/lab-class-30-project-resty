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
            
            <label for="get"><Method id={'get'} handleMethodChange={this.handleMethodChange} checked="checked" />GET</label>
            
            <label for="post"><Method id={'post'} handleMethodChange={this.handleMethodChange} />POST</label>
            
            <label for="put"><Method id={'put'} handleMethodChange={this.handleMethodChange} />PUT</label>
            
            <label for="delete"><Method id={'delete'} handleMethodChange={this.handleMethodChange} />DELETE</label>
          </div>
        </form>
      </>
    );
  }
}