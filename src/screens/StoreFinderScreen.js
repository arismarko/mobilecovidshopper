import React, { useEffect, useContext } from "react";
import {StyleSheet, View } from "react-native";

import Layout from '../components/Layout/Layout';

import { Context } from '../context/PointsContext';  

const StoreFinderScreen = props => {
    const { state, getPoints } = useContext(Context);
  
    useEffect(() => {
        getPoints();
    },[])
  
    return <Layout navigation={props.navigation}>
        <Text>Based on your location we found the following stores</Text>
        <Points  data={state} />
      </Layout>
};

export default StoreFinderScreen;