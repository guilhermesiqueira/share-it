import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Header = ({ children }) => {
  return (
    <View style={style.screen}>
      <View>
        <Text style={style.title}>{'Share It'}</Text>
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
