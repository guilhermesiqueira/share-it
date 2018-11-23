import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

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
      <View>
        <Text>Título: </Text>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <Text>Descrição: </Text>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
        />
        <Text>Tags: </Text>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(tags) => this.setState({tags})}
          value={this.state.tags}
        />
        <TouchableOpacity onPress={this.props.onCancel}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onPost}>
          <Text>Postar</Text>
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
