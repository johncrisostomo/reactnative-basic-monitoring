import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import StatusScreen from './StatusScreen';

export default class MainContainer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusScreen isUp={this.props.isUp} lastUpTime={this.props.lastUpTime} />
      </View>
    );
  }
}

MainContainer.PropTypes = {
  isUp: PropTypes.bool.isRequired,
  lastUpTime: PropTypes.instanceOf(Date),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
