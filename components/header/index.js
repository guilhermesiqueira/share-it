import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const person = require('../../assets/images/person.jpg');

const Header = ({ children }) => {
  return (
    <View style={style.screen}>
      <View style={style.header}>
        <Text style={style.title}>{'Share It'}</Text>
        <Image source={person} style={style.image} />
      </View>
      {children}
    </View>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
