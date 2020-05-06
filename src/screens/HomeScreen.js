import React, { useEffect, useContext } from "react";
import {StyleSheet, View } from "react-native";

import Nav from '../components/Nav/Nav';
import Stores from '../components/Stores/Stores';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Map from '../components/Map/Map';

import { Context } from '../context/StoreContext';

const list = [
  {
    name: 'Find',
    subtitle: 'Missing Items'
  },
  {
    name: 'Alert',
    subtitle: 'The community'
  },
  {
    name: 'Get notified',
    subtitle: 'For items'
  },
]

const HomeScreen = props => {
  const { state, getStores } = useContext(Context);

  const searchStores = (search) => {
    getStores(search);
  }

  return <View style={styles.viewStyle}>
    <Header 
      title="CovidShopper" 
      imageSource={require('../../assets/logo.jpg')}
    />
    <Nav items={list} navigation={props.navigation} />
    <Search search={searchStores} />
    {/* <Stores  data={state} /> */}
    <Map stores={state} />
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
