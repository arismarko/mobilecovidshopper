import React, { useEffect, useContext } from "react";
import {StyleSheet, View } from "react-native";

import Nav from '../components/Nav/Nav';
import AddStore from '../components/Stores/AddStore';
import Header from '../components/Header/Header';

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
  

const AlertScreen = props => {
    const { state, addStore } = useContext(Context);

    return <View style={styles.viewStyle}>
        <Header 
        title="CovidShopper" 
        imageSource={require('../../assets/logo.jpg')}
        />
        <Nav items={list} navigation={props.navigation} />
        <AddStore handleAdd={addStore} />
    </View>

}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    },
    viewStyle: {
      backgroundColor: 'white'
    }
});

export default AlertScreen;