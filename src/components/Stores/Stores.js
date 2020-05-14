import React from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';

import { ListItem } from 'react-native-elements'

const Stores = ({stores}) => {
    return    <ScrollView>
                <View style={styles.viewStyle}>
     
            {
                stores.map((l, i) => (
                <ListItem
                    key={i}
                    title={`${l.title} ${l.address}` }
                    subtitle={`Items ${l.left} left,  ${l.amount} people queuing`}
                    bottomDivider
                />
                ))
            }
            </View>
        </ScrollView>

}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
    }
})

export default Stores;
