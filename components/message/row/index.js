import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

import CustomText from '../../helpers/text';

class RowMessage extends React.Component {

  render() {

    navigateChat = () => {

      // const { navigation } = this.props;

      // navigation.navigate('Register');
    }

    return (
      <TouchableOpacity onPress={() => navigateChat()} style={{ width: '100%' }}>
        <View style={style.content}>
          <Image source={this.props.image} style={style.image} />
          <View>
            <CustomText style={style.title}>{this.props.name}</CustomText>
            <CustomText style={style.body}>{this.props.message.substring(0, 30)}...</CustomText>
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
