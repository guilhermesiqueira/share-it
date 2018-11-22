import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/header/index';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Header>
        <View>
          <Text>TELA</Text>
        </View>
      </Header>
    );
  }
}