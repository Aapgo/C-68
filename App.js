import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation' 
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/bookTrans';
import SearchScreen from './screens/searchScreen';
export default function App() {
  return (
<AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:TransactionScreen},
  Search : {screen:SearchScreen}
})
const AppContainer = createAppContainer (TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
