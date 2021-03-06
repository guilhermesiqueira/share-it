import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from '../components/header/index';
import RowMessage from '../components/message/row';

import CustomText from '../components/helpers/text';

const person1 = require('../assets/images/person1.jpg');
const person2 = require('../assets/images/person2.jpg');
const person3 = require('../assets/images/person3.jpg');
const person4 = require('../assets/images/person4.jpg');
const person5 = require('../assets/images/person5.jpg');

export default class MessageScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        name: 'Marjorie',
        message: 'Delta compression using up to 4 threads.',
        image: person1,
      },{
        name: 'Lalis Grito',
        message: 'Compressing objects: 100% (6/6), done.',
        image: person2,
      },{
        name: 'Alexandre Dj',
        message: 'Writing objects: 100% (6/6), 649 bytes | 649.00 KiB/s, done.',
        image: person3,
      },{
        name: 'Me da Algodao',
        message: 'shareit djorkaeffalexandrevilelapereira$ git add .',
        image: person4,
      },{
        name: 'Siquera Junio',
        message: 'Resolving deltas: 100% (3/3), completed with 3 local objects.',
        image: person5,
      }],
    }
  }

  render() {
    return (
      <Header navigation={this.props.navigation}>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <ScrollView style={{ width: '100%' }}>
            <CustomText style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 16 }}>Mensagens</CustomText>
            <View style={{ alignItems: 'center', width: '100%', marginTop: 16 }}>
              {
                this.state.messages.map((message, idx) => {
                  return <RowMessage key={idx} navigation={this.props.navigation} name={message.name} message={message.message} image={message.image } />;
                })
              }
            </View>
          </ScrollView>
        </View>
      </Header>
    );
  }
}