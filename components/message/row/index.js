import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

class RowMessage extends React.Component {

  render() {
    return (
      <View style={style.content}>
        <Image source={this.props.image} style={style.image} />
        <View>
          <Text style={style.title}>{this.props.name}</Text>
          <Text style={style.body}>{this.props.message.substring(0,30)}...</Text>
        </View>
      </View>
    );
  }
};

RowMessage.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default RowMessage;
