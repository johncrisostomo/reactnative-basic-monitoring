import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import MainContainer from './src/components/MainContainer';

export default class Monitoring extends Component {
  render() {
    return (
      <MainContainer />
    );
  }
}

AppRegistry.registerComponent('Monitoring', () => Monitoring);
