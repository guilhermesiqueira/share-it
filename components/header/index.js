import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

import Profile from '../profile';

const person = require('../../assets/images/person.jpg');

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  openProfile = () => {
    if (this.state.open === true) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <View style={style.screen}>
        <View style={style.header}>
          <Text style={style.title}>{'Share It'}</Text>
          <TouchableOpacity style={style.touchable} onPress={this.openProfile}>
            <Image source={person} style={style.image} />
          </TouchableOpacity>
        </View>
        { this.state.open ? <Profile /> : children }
      </View>
    );
  }
};

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
