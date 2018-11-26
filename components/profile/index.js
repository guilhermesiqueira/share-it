import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const person1 = require('../../assets/images/person1.jpg');
const person2 = require('../../assets/images/person2.jpg');
const person3 = require('../../assets/images/person3.jpg');

class Profile extends React.Component {

  render() {

    const { img, navigation } = this.props;

    return (
      <View style={style.content}>
        <TouchableOpacity style={style.logout} onPress={() => { navigation.navigate('Login'); }}>
          <Text style={style.exit}>Sair</Text>
        </TouchableOpacity>
        <Image source={img} style={style.image} />
        <Text style={style.name}>Bruna</Text>
        <View style={style.row}>
          <View style={style.col}>
            <Text style={style.title}>Amigos</Text>
            <View style={style.friends}>
              <Image source={person1} style={style.friend} />
              <Image source={person2} style={style.friend} />
              <Image source={person3} style={style.friend} />
            </View>
          </View>
          <View style={style.col}>
            <Text style={style.title}>Threads</Text>
            <View style={style.thread}>
              <Text>Lorem ipsum vehicula ligaem?</Text>
            </View>
            <View style={style.thread}>
              <Text>Lorem ipsum tempus gogh van </Text>
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
