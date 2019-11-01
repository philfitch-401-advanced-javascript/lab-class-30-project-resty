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
        <section>
          <UrlInputForm />
          <div id="methods">
            <Method value={'get'} checked />
            <span>GET</span>
            <Method value={'post'} />
            <span>POST</span>
            <Method value={'put'} />
            <span>PUT</span>
            <Method value={'delete'} />
            <span>DELETE</span>
          </div>
        </section>
      </>
    );
  }
}