import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

import CustomText from '../../helpers/text';

class NewThread extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      tags: '',
    }
  }

  render() {

    return (
      <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <CustomText style={{color: 'white'}}>  Título: </CustomText> 
        <TextInput 
          style={{height: 40, marginLeft: 10, marginRight: 10, marginBottom: 10, borderColor: 'gray', borderWidth: 1, color: '#fff', padding: 5 }}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <CustomText style={{color: 'white'}}>  Descrição: </CustomText>
        <TextInput 
          style={{height: 40, marginLeft: 10, marginRight: 10, marginBottom: 10, borderColor: 'gray', borderWidth: 1, color: '#fff', padding: 5}}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
        />
        <CustomText style={{color: 'white'}}>  Tags: </CustomText>
        <TextInput 
          style={{height: 40, marginLeft: 10, marginRight: 10, marginBottom: 10, borderColor: 'gray', borderWidth: 1, color: '#fff', padding: 5}}
          onChangeText={(tags) => this.setState({tags})}
          value={this.state.tags}
        />
        <TouchableOpacity onPress={this.props.onCancel} style={{marginTop:10, marginLeft: 20, left:30, width: 80, height: 40, backgroundColor: '#F3903D', borderColor: 'gray', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <CustomText>Cancelar</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onPost} style={{marginLeft: 20, bottom:40, left:130, width: 80, height: 40, backgroundColor: '#F3903D', borderColor: 'gray', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <CustomText>Postar</CustomText>
        </TouchableOpacity>
      </View>
    );
  }
};

NewThread.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onPost: PropTypes.func.isRequired,
};

export default NewThread;
