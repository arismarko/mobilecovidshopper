import React from 'react';

import {  Thumbnail, ListItem, Text,  Left, Body, Right} from 'native-base';

import { View, StyleSheet, Button } from 'react-native';

const SelectedStore = ({store, remove}) => {
    return (
        <View styles={style.view}>
            <ListItem avatar
                noBorder
            >
                <Left>
                    <Thumbnail square source={{ uri: store.image_url }} />
                </Left>
                <Body>
                    <Text>{store.name}</Text>
                    <Text>{`${store.location.address1} ${store.location.address2}`}</Text>
                </Body>
                <Right>
                    <Button title="X" onPress={()=> remove() } />
                </Right>
            </ListItem>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        padding: 20
    }
})

export default SelectedStore;