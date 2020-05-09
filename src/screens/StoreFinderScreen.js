import React, { useEffect, useContext } from "react";
import {StyleSheet, View, Text } from "react-native";
import Points from '../components/Points/Points';
import Layout from '../components/Layout/Layout';

import { Context } from '../context/PointsContext';  

const StoreFinderScreen = props => {

    console.log(Context);

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