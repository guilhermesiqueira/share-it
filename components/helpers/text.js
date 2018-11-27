import React from 'react';
import { Text } from 'react-native';

class CustomText extends React.Component {
  render() {
    return (
      <Text style={[this.props.style, { fontFamily: 'KGSorryNotSorry' }]}>{this.props.children}</Text>
    );
  }
};

export default CustomText;
