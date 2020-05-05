import React, { useEffect, useContext } from "react";
import { Text,StyleSheet, View } from "react-native";

import Nav from '../components/Nav/Nav';
import Stores from '../components/Stores/Stores';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';

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

const HomeScreen = () => {
  const { state, getStores } = useContext(Context);

  // useEffect(() =>  {
  //   getStores('detol')
  // }, [])

  const searchStores = (search) => {
    console.log(search);
    getStores(search);
  }

  return <View style={styles.viewStyle}>
    <Header 
      title="CovidShopper" 
      imageSource={require('../../assets/logo.jpg')}
    />
    <Nav items={list}/>
    <Search search={searchStores} />
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
