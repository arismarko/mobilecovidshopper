import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import AddItems from './AddItems';

const Items = () => {
    const addItem = () => {

    }

    return (
        <View style = { styles.viewStyle } > 
            <Text style = { styles.labelStyle } >No Items Added</Text>
            <Button
                onPress={addItem}
                title="Add an Item"
                accessibilityLabel="Learn more about this purple button"
            />

            <AddItems />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10
    },
    labelStyle: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 15
    },
})

export default Items;