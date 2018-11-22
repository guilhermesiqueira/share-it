import React from 'react';
import { View, Text } from 'react-native';

import style from './style';

const FloatButton = () => {
  return (
    <View style={style.button}>
      <Text style={style.icon}>+</Text>
    </View>
  );
};

export default FloatButton;
