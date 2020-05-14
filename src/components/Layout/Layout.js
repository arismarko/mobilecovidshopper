import React from 'react';

import Header from '../Header/Header';
import Nav from '../Footer/Footer';

import { Container, Content} from 'native-base';
import { StyleSheet, View } from "react-native";

const Layout = ({ navigation, children, currentScreen }) => {

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
                    currentScreen={currentScreen}
                /> 
            </Container>
    )

}

const styles = StyleSheet.create({
    container: {
       height: 640,
       backgroundColor: 'white'
    }
})

export default Layout;