import React from 'react';

import Header from '../Header/Header';
import Nav from '../Footer/Footer';

import { Dimensions } from 'react-native';

import { Container, Content, } from 'native-base';

import {StyleSheet, View, Text} from "react-native";

const Layout = ({ navigation, children }) => {

    return (
        <Container>
            <Header 
                title="CovidShopper" 
                imageSource={require('../../../assets/logo.jpg')}
            />
          
            <View style={styles.container}>
                {children}
            </View>
            <Content />
            <Nav 
                navigation={navigation} 
            /> 
        </Container>
    )

}

const styles = StyleSheet.create({
    container: {
        height: 600
    },
    footer: {
       
    }
})

export default Layout;