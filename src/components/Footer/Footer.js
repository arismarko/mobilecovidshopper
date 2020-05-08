import React from 'react';
import {  Footer, FooterTab, Button, Text } from 'native-base';

const Footr = ({navigation}) => {

    return (
        <Footer>
            <FooterTab>
                <Button onPress={() => {navigation.navigate(`Find`)}}>
                    <Text>Find</Text>
                </Button >
                <Button onPress={() => {navigation.navigate(`Alert`)}}>
                    <Text>Alert</Text>
                </Button>
                <Button>
                    <Text>Get Notified</Text>
                </Button>
            </FooterTab>
      </Footer>
    )
}

export default Footr;