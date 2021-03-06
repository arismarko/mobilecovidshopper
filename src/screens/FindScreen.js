import React, { useEffect, useContext, useState } from "react";
import {StyleSheet } from "react-native";

import Stores from '../components/Stores/Stores';
import Search from '../components/Search/Search';
import Map from '../components/Map/Map';
import Layout from '../components/Layout/Layout';

import { Context } from '../context/StoreContext';

const HomeScreen = props => {
  const { state, getStores, initial} = useContext(Context);
  const [ stores, setStores] = useState([])

  const searchStores = (search) => {
    getStores(search);
  }

  useEffect(() => {
    const stores = state.map(store => {
      return {
        latitude: Number(store.coordinates.split(',')[0]),
        longitude: Number(store.coordinates.split(',')[1]),
        title: store.storename,
        left: store.Item[0].number,
        amount: store.amount,
        address: store.location
      }
    },);

    setStores(stores);
  },[state])

  useEffect(() => {
    return () => {
     initial()
    };
  },[])

  return  <Layout navigation={props.navigation} currentScreen={'Find'}>
            <Search search={searchStores} placeholder="Search for an item, e.g bread" />
            <Map stores={stores} />
            <Stores  stores={stores} />
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
