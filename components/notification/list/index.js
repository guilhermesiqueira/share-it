import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

class Notification extends React.Component {

  render() {
    return (
      <View style={style.content}>
        <Image source={this.props.image} style={style.image} />
        <View>
          <Text style={style.title}>{this.props.name}</Text>
          <Text style={style.body}>{this.props.notification}</Text>
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
