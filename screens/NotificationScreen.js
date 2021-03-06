import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from '../components/header/index';
import Notification from '../components/notification/list';

import CustomText from '../components/helpers/text';

const person1 = require('../assets/images/person1.jpg');
const person2 = require('../assets/images/person2.jpg');
const person3 = require('../assets/images/person3.jpg');
const person4 = require('../assets/images/person4.jpg');
const person5 = require('../assets/images/person5.jpg');

export default class NotificationScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      notifications: [{
        name: 'Marjorie',
        notification: 'Respondeu a sua Thread',
        image: person1,
      },{
        name: 'Alexandre Dj',
        notification: 'Respondeu a sua Thread',
        image: person3,
      },{
        name: 'Siquera Junio',
        notification: 'Descurtiu a sua Thread',
        image: person5,
      }],
    }
  }

  render() {
    return (
      <Header navigation={this.props.navigation}>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <ScrollView style={{ width: '100%' }}>
            <CustomText style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 16 }}>Notificações</CustomText>
            <View style={{ alignItems: 'center', width: '100%', marginTop: 16 }}>
              {
                this.state.notifications.map((notification, idx) => {
                  return <Notification key={idx} name={notification.name} notification={notification.notification} image={notification.image} />;
                })
              }
            </View>
          </ScrollView>
        </View>
      </Header>
    );
  }
}
