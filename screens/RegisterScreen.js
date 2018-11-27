import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../components/helpers/text';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordC: '',
    }
  }

  render() {

    const { navigation } = this.props;

    goBack = () => {
      navigation.pop();
    }

    return (
      <View style={{ alignItems: 'center', height: '100%', width: '100%' }}>
        <View style={{ width: '100%', height: '30%', backgroundColor: '#F3903D', alignItems: 'center', justifyContent: 'center' }}>
          <CustomText style={{ fontSize: 45 }}>SHARE IT</CustomText>
        </View>
        <View style={{ marginTop: 15, width: '100%', alignItems: 'center' }}>
          <CustomText style={{ fontSize: 30, fontWeight: 'bold' }}>Cadastre-se</CustomText>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', width: '80%', marginTop: 15 }}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
            placeholder={'Nome de Usuário'}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', width: '80%', marginTop: 20 }}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder={'E-mail'}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', width: '80%', marginTop: 20 }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            placeholder={'Senha'}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', width: '80%', marginTop: 20 }}
            onChangeText={(passwordC) => this.setState({ passwordC })}
            value={this.state.passwordC}
            placeholder={'Confirme sua senha'}
          />
        </View>
        <TouchableOpacity onPress={() => goBack()} style={{marginTop: 20, width: 160, height: 40, backgroundColor: '#F3903D', borderColor: 'gray', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <CustomText style={{ fontSize: 16 }}>CADASTRE-SE</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goBack()} style={{marginTop: 15}}>
          <CustomText style={{ fontSize: 12, color: 'blue' }}>Voltar</CustomText>
        </TouchableOpacity>
      </View>
    );
  }
}

RegisterScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
