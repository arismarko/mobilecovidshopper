import React from 'react';
import {View, StyleSheet, Button, Text } from 'react-native';
import { ListItem } from 'react-native-elements'

const Stores = ({data}) => {
    return <View style={styles.viewStyle}>
    {
        data.map((l, i) => (
        <ListItem
            key={i}
            title={`${l.storename} ${l.location}` }
            subtitle={`Items ${l.Item[0].number} left,  ${l.amount} people queuing`}
            bottomDivider
        />
        ))
    }
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10
    }
})

export default Stores;
