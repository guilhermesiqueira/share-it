import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

class RowMessage extends React.Component {

  render() {
    const { navigation } = this.props;

    navigateChat = () => {
      navigation.navigate('Register');
    } 
    return (
      <TouchableOpacity onPress={() => navigateChat()}>
        <View style={style.content}>
          <Image source={this.props.image} style={style.image}/>
        <View>
            <Text style={style.title}>{this.props.name}</Text>
            <Text style={style.body}>{this.props.message.substring(0,30)}...</Text>
          </View>
          <TouchableOpacity onPress={() => navigateChat()} style={{marginTop: 20, width: 160, height: 40, backgroundColor: '#F3903D', borderColor: 'gray', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontSize: 16 }}>TESTE</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
};

RowMessage.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default RowMessage;
