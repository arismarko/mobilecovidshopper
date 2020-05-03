import React from 'react';
import {View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Stores = (items) => {
    return (
        <View>
            <FlatList 
                keyExtractor={item => item}
                data={items}
                renderItem={
                    ({item}) => {
                        return <Text>{item}</Text>
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Stores;