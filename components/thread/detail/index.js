import React from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const share = require('../../../assets/images/share.png');
const like = require('../../../assets/images/like.png');
const deslike = require('../../../assets/images/deslike.png');

import CustomText from '../../helpers/text';

class Thread extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body,
      tags: this.props.tags,
      votes: this.props.votes,
      flagAdd: false,
      flagSub: false,
    }
  }

  sharePost = (message, body) => {
    Share.share({
      message: `${message} \n ${body}`,
      url: '',
      title: message,
    })
  }

  changeVotes = (vote) => {
    if (vote === 1 && this.state.flagAdd === false) {
      this.setState({ votes: this.state.votes + vote, flagAdd: true, flagSub: false });
    } else if (vote === -1 && this.state.flagSub === false) {
      this.setState({ votes: this.state.votes + vote, flagSub: true, flagAdd: false });
    }
  }

  render() {
    return (
      <View style={style.all}>
        <Image source={this.props.image} style={style.image} />
        <View style={style.card}>
          <View style={style.content}>
            <TouchableOpacity onPress={() => { this.sharePost(this.state.title, this.state.body) }} style={style.shareButton}>
              <Image source={share} style={style.share} />
            </TouchableOpacity>
            <Text style={style.title}>{this.state.title}</Text>
            <Text style={style.body}>{this.state.body}</Text>
            <Text style={style.tags}>Tags: {this.state.tags}</Text>
          </View>
          <View style={style.votes}>
            <TouchableOpacity onPress={() => this.changeVotes(1)}>
              <Image source={like} style={style.like} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeVotes(-1)}>
              <Image source={deslike} style={style.deslike} />
            </TouchableOpacity>
            <Text style={[style.textVotes, { color: this.state.votes >= 0 ? 'green' : 'red' }]}>{this.state.votes > 0 ? '+' : null}{this.state.votes}</Text>
          </View>
        </View>
      </View>
    );
  }
};

Thread.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Thread;
