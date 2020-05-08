import React, { useEffect, useContext } from "react";
import {StyleSheet, View } from "react-native";

import Nav from '../components/Nav/Nav';
import Stores from '../components/Stores/Stores';
import Search from '../components/Search/Search';
import Map from '../components/Map/Map';
import Layout from '../components/Layout/Layout';

import { Context } from '../context/StoreContext';

const HomeScreen = props => {
  const { state, getStores } = useContext(Context);

  const searchStores = (search) => {
    getStores(search);
  }

  return <Layout navigation={props.navigation}>
            <Search search={searchStores} />
            <Map stores={state} updateCurrentLoc={(location) => setCurrentLoc(location)} />
            <Stores  data={state} />
    </Layout>
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
