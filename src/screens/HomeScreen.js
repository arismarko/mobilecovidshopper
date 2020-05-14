import React from 'react';

import { View } from "react-native";

import Header from '../components/Header/Header';
import SquareLinks from '../components/SquareLinks/SquareLinks';

const HomeScreen = (props) => {
    return (
        <View >
            <Header 
                title="CovidShopper" 
                imageSource={require('../../assets/logo.jpg')}
            />
            <SquareLinks navigation={props.navigation} />
        </View>
    )
}

export default HomeScreen;