import React from 'react';
import {  Footer, FooterTab, Button, Text } from 'native-base';

const Footr = ({navigation, currentScreen}) => {

    return (
        <Footer>
            <FooterTab>
                <Button onPress={() => {navigation.navigate(`Home`)}} active={currentScreen==='Home'}>
                    <Text>Home</Text>
                </Button >
                <Button onPress={() => {navigation.navigate(`Find`)}} active={currentScreen==='Find'}>
                    <Text>Find</Text>
                </Button >
                <Button onPress={() => {navigation.navigate(`Alert`)}} active={currentScreen==='Alert'}>
                    <Text>Alert</Text>
                </Button>
                <Button onPress={() => {navigation.navigate(`Points`)}} active={currentScreen==='Stores'}>
                    <Text>Stores</Text> 
                </Button>
            </FooterTab>
      </Footer>
    )
}

export default Footr;