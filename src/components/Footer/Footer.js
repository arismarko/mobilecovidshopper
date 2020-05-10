import React from 'react';
import {  Footer, FooterTab, Button, Text } from 'native-base';

const Footr = ({navigation}) => {

    return (
        <Footer>
            <FooterTab>
                <Button onPress={() => {navigation.navigate(`Home`)}}>
                    <Text>Home</Text>
                </Button >
                <Button onPress={() => {navigation.navigate(`Find`)}}>
                    <Text>Find</Text>
                </Button >
                <Button onPress={() => {navigation.navigate(`Alert`)}}>
                    <Text>Alert</Text>
                </Button>
                <Button onPress={() => {navigation.navigate(`Points`)}}>
                    <Text>Stores</Text>
                </Button>
            </FooterTab>
      </Footer>
    )
}

export default Footr;