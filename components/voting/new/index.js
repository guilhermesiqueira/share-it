import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import PropTypes from 'prop-types';

import style from './style';

var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];

class NewVoting extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      tags: '',
      value: 0,
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
        <Text>Opções: </Text>
        <RadioForm
          radio_props={radio_props}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'gray'}
          animation={true}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
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

NewVoting.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onPost: PropTypes.func.isRequired,
};

export default NewVoting;
