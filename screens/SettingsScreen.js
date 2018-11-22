import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/header/index';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Header>
        <View>
          <Text>SCREEN</Text>
        </View>
      </Header>
    );
  }
}
