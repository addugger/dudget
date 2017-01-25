import React, { Component } from 'react';

export default class App extends Component {
  props: {
    // TODO: remove type
    children: HTMLElement
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
