import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const DestaquesStack = createStackNavigator({
  Home: HomeScreen,
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
  Links: LinksScreen,
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
  Settings: SettingsScreen,
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
  Settings: SettingsScreen,
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
