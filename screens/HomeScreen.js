import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/header/index';
import FloatButton from '../components/button';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Header>
        <View>
          <Text>Share It</Text>
        </View>
        <FloatButton />
      </Header>
    );
  }
}