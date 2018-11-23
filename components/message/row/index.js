import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

class RowMessage extends React.Component {

  render() {

    navigateChat = () => {

      const { navigation } = this.props;

      navigation.navigate('Register');
    }

    return (
      <TouchableOpacity onPress={() => navigateChat()} style={{ width: '100%' }}>
        <View style={style.content}>
          <Image source={this.props.image} style={style.image} />
          <View>
            <Text style={style.title}>{this.props.name}</Text>
            <Text style={style.body}>{this.props.message.substring(0, 30)}...</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

RowMessage.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default RowMessage;
