import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const person1 = require('../../assets/images/person1.jpg');
const person2 = require('../../assets/images/person2.jpg');
const person3 = require('../../assets/images/person3.jpg');

import CustomText from '../helpers/text';

class Profile extends React.Component {

  render() {

    const { img, navigation } = this.props;

    return (
      <View style={style.content}>
        <TouchableOpacity style={style.logout} onPress={() => { navigation.navigate('Login'); }}>
          <CustomText style={style.exit}>Sair</CustomText>
        </TouchableOpacity>
        <Image source={img} style={style.image} />
        <CustomText style={style.name}>Bruna</CustomText>
        <View style={style.row}>
          <View style={style.col}>
            <CustomText style={style.title}>Amigos</CustomText>
            <View style={style.friends}>
              <Image source={person1} style={style.friend} />
              <Image source={person2} style={style.friend} />
              <Image source={person3} style={style.friend} />
            </View>
          </View>
          <View style={style.col}>
            <CustomText style={style.title}>Threads</CustomText>
            <View style={style.thread}>
              <CustomText>Lorem ipsum vehicula ligaem?</CustomText>
            </View>
            <View style={style.thread}>
              <CustomText>Lorem ipsum tempus gogh van </CustomText>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

Profile.propTypes = {
  img: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Profile;
