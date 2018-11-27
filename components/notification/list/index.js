import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

import CustomText from '../../helpers/text';

class Notification extends React.Component {

  render() {
    return (
      <View style={style.content}>
        <Image source={this.props.image} style={style.image} />
        <View>
          <CustomText style={style.title}>{this.props.name}</CustomText>
          <CustomText style={style.body}>{this.props.notification}</CustomText>
        </View>
      </View>
    );
  }
};

Notification.propTypes = {
  name: PropTypes.string.isRequired,
  notification: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default Notification;
