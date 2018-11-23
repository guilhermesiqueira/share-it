import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal'

import style from './style';

import NewThread from '../thread/new';
import NewVoting from '../voting/new';

const plus = require('../../assets/images/plus.png');
const file = require('../../assets/images/file.png');
const chart = require('../../assets/images/chart.png');

class FloatButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isModalVisible: false,
      option: false,
    }
  }

  _showModal = () => this.setState({ isModalVisible: true });
 
  _hideModal = () => this.setState({ isModalVisible: false });

  changeState = () => {
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  createThread = () => {
    this.setState({ open: false });
    this.setState({ option: true });
    this.setState({ isModalVisible: true });
  }

  onPost = () => {
    this.props.NewThread();
    this.setState({ open: false });
    this.setState({ isModalVisible: false });
  }

  createVoting = () => {
    this.setState({ open: false });
    this.setState({ option: false });
    this.setState({ isModalVisible: true });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.changeState} style={style.button}>
        { this.state.open ? <TouchableOpacity onPress={this.createThread} style={style.threadIcon}><Image source={file} style={style.file} /></TouchableOpacity> : null }
        { this.state.open ? <TouchableOpacity onPress={this.createVoting} style={style.chartIcon}><Image source={chart} style={style.chart} /></TouchableOpacity> : null }
        <Image source={plus} style={[style.image, { transform: this.state.open ? [{ rotate: '45deg'}] :  [{ rotate: '0deg'}] }]} />
        <Modal isVisible={this.state.isModalVisible} style={{backgroundColor: 'white'}}>
        { this.state.option ? <NewThread onCancel={this._hideModal} onPost={this.onPost} /> : <NewVoting onCancel={this._hideModal} onPost={() => { console.log('pedagio'); }} /> }
        </Modal>
      </TouchableOpacity>
    );
  }
};

FloatButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  NewThread: PropTypes.func.isRequired,
};

export default FloatButton;
