import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

import Profile from '../profile';

import CustomText from '../helpers/text';

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
          <CustomText style={style.title}>{'Share It'}</CustomText>
          <TouchableOpacity style={style.touchable} onPress={this.openProfile}>
            <Image source={person} style={style.image} />
          </TouchableOpacity>
        </View>
        { this.state.open ? <Profile navigation={this.props.navigation} img={person} /> : children }
      </View>
    );
  }
};

Header.propTypes = {
  children: PropTypes.node,
  navigation: PropTypes.object.isRequired,
};

Header.defaultProps = {
  children: null,
};

export default Header;
