import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HighlightScreen from '../screens/HighlightScreen';
import MessageScreen from '../screens/MessageScreen';
import NotificationScreen from '../screens/NotificationScreen';

const DestaquesStack = createStackNavigator({
  Home: HighlightScreen,
});

DestaquesStack.navigationOptions = {
  tabBarLabel: 'Destaques',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-star`
          : 'md-star'
      }
    />
  ),
};

const MensagensStack = createStackNavigator({
  Links: MessageScreen,
});

MensagensStack.navigationOptions = {
  tabBarLabel: 'Mensagens',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
    />
  ),
};

const NotificacoesStack = createStackNavigator({
  Settings: NotificationScreen,
});

NotificacoesStack.navigationOptions = {
  tabBarLabel: 'Notificações',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-time' : 'md-time'}
    />
  ),
};

const PesquisarStack = createStackNavigator({
  Settings: NotificationScreen,
});

PesquisarStack.navigationOptions = {
  tabBarLabel: 'Pesquisar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

export default createBottomTabNavigator({
  DestaquesStack,
  MensagensStack,
  NotificacoesStack,
  PesquisarStack,
}, {
  tabBarOptions: {
    activeTintColor: '#F3903D',
  }
});
