import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import style from './style';

const plus = require('../../assets/images/plus.png');
const file = require('../../assets/images/file.png');
const chart = require('../../assets/images/chart.png');

class FloatButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  changeState = () => {
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.changeState} style={style.button}>
        { this.state.open ? <TouchableOpacity style={style.threadIcon}><Image source={file} style={style.file} /></TouchableOpacity> : null }
        { this.state.open ? <TouchableOpacity style={style.chartIcon}><Image source={chart} style={style.chart} /></TouchableOpacity> : null }
        <Image source={plus} style={[style.image, { transform: this.state.open ? [{ rotate: '45deg'}] :  [{ rotate: '0deg'}] }]} />
      </TouchableOpacity>
    );
  }
};

export default FloatButton;
