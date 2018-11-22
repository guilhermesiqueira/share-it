import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../components/header/index';
import FloatButton from '../components/button';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    const { navigation } = this.props;

    return (
      <Header>
        <View>
          <Text>Share It</Text>
        </View>
        <FloatButton navigation={navigation} />
      </Header>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};