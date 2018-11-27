import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../components/helpers/text';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {

    const { navigation } = this.props;

    navigateHighlight = () => {
      navigation.navigate('Main');
    }

    navigateRegister = () => {
      navigation.navigate('Register');
    }

    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: '100%', height: '45%', backgroundColor: '#F3903D', alignItems: 'center', justifyContent: 'center' }}>
          <CustomText style={{ fontSize: 45, fontFamily: 'KGSorryNotSorry' }}>SHARE IT</CustomText>
        </View>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', width: '80%', marginTop: 25}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          placeholder={'E-mail'}
        />
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', width: '80%', marginTop: 20}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder={'Senha'}
        />
        <TouchableOpacity onPress={() => navigateHighlight()} style={{marginTop: 20, width: 160, height: 40, backgroundColor: '#F3903D', borderColor: 'gray', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <CustomText style={{ fontSize: 16 }}>ENTRAR</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateRegister()} style={{marginTop: 20, width: 160, height: 40, backgroundColor: '#F3903D', borderColor: 'gray', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <CustomText style={{ fontSize: 16 }}>CADASTRE-SE</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateHighlight()} style={{marginTop: 20}}>
          <CustomText style={{ fontSize: 12, color: 'blue' }}>Esqueci minha senha</CustomText>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
