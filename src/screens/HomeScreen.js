import React from "react";
import { Text,StyleSheet, View } from "react-native";

import Nav from '../components/Nav/Nav';
import Stores from '../components/Stores/Stores';
import Header from '../components/Header/Header';

const list = [
  {
    name: 'Find',
    subtitle: 'Missing Items'
  },
  {
    name: 'Alert',
    subtitle: 'Your community'
  },
  {
    name: 'Get notified',
    subtitle: 'By the community'
  },
]

const HomeScreen = () => {
  return <View style={styles.viewStyle}>
    <Header 
      title="CovidShopper" 
      imageSource={require('../../assets/logo.jpg')}
    />
    <Nav items={list}/>
    <Stores />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: 'white'
  }
});

export default HomeScreen;
