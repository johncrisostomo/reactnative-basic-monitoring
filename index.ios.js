import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import MainContainer from './src/components/MainContainer';

export default class Monitoring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUp: false,
      lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000),
    };
  }

  render() {
    return (
      <MainContainer isUp={this.state.isUp} lastUpTime={this.state.lastUpTime} />
    );
  }
}

AppRegistry.registerComponent('Monitoring', () => Monitoring);
