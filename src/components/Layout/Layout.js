import React from 'react';

import Header from '../Header/Header';
import Nav from '../Footer/Footer';

import { Dimensions, ScrollView } from 'react-native';

import { Container, Content} from 'native-base';

import {StyleSheet, View, Text} from "react-native";

const Layout = ({ navigation, children, currentScreen }) => {

    return (
            <Container>
                <Header 
                    title="CovidShopper" 
                    imageSource={require('../../../assets/logo.jpg')}
                />
                <View style={styles.container}>
                    <ScrollView>
                         {children}
                    </ScrollView>
                </View>
                <Content />
                <Nav 
                    navigation={navigation} 
                    currentScreen={currentScreen}
                /> 
            </Container>
    )

}

const styles = StyleSheet.create({
    container: {
       height: 550
    }
})

export default Layout;