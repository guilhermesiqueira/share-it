import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../components/header/index';
import FloatButton from '../components/button';

import Thread from '../components/thread/detail';

const myPhoto = require('../assets/images/person.jpg');
const person1 = require('../assets/images/person1.jpg');
const person2 = require('../assets/images/person2.jpg');
const person3 = require('../assets/images/person3.jpg');
const person4 = require('../assets/images/person4.jpg');
const person5 = require('../assets/images/person5.jpg');

export default class HighlightScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: [{
        name: 'Marjorie',
        description: 'Lorem ipsum',
        tags: '#pessoas #bonitas',
        image: person1,
        votes: 1,
      }, {
        name: 'Lalis Grito',
        description: 'Lorem ipsum',
        tags: '#ribon #teste',
        image: person2,
        votes: 10,
      }, {
        name: 'Alexandre Dj',
        description: 'Lorem ipsum',
        tags: '#flipper #jam',
        image: person3,
        votes: -5,
      }, {
        name: 'Me da Algodao',
        description: 'Lorem ipsum',
        tags: '#maldito #doce',
        image: person4,
        votes: 3,
      }, {
        name: 'Siquera Junio',
        description: 'Lorem ipsum',
        tags: '#ihc #passei',
        image: person5,
        votes: -6,
      }],
    }
  }

  newThread = () => {

    const postsPush = this.appendObjTo(this.state.posts, {
      name: 'Mauricio Lindo',
      description: 'Lancer 3.0',
      tags: '#pessoa #hmmi',
      image: myPhoto,
      votes: 3,
    });

    this.setState({ posts: postsPush });
  }

  appendObjTo = (thatArray, newObj) => {
    const frozenObj = Object.freeze(newObj);
    return Object.freeze(thatArray.concat(frozenObj));
  }

  render() {

    const { navigation } = this.props;

    return (
      <Header navigation={navigation}>
        <ScrollView>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            {
              this.state.posts.map((post, idx) => {
                return <Thread key={idx} title={post.name} body={post.description} tags={post.tags} image={post.image} votes={post.votes} />;
              })
            }
          </View>
        </ScrollView>
        <FloatButton navigation={navigation} NewThread={() => this.newThread()} />
      </Header>
    );
  }
}

HighlightScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};