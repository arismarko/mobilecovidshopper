import React, { useContext } from "react";
import {StyleSheet } from "react-native";

import AddStore from '../components/Stores/AddStore';
import Layout from '../components/Layout/Layout';

import { Context } from '../context/StoreContext';  

const AlertScreen = props => {
    const { state, addStore } = useContext(Context);

    return <Layout navigation={props.navigation}  currentScreen={'Alert'}>
          <AddStore handleAdd={addStore} />
        </Layout>
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