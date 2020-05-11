import React from 'react';

import {StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import {  Icon } from 'native-base';

const SquareLinks = ({ navigation }) => {
    return (
        <View>
            <View style={styles.item}>
                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('Find')}
                >
                    <Icon 
                        ios='ios-search' 
                        android="md-search"
                        style={styles.icon}
                    />
                    <Text style={styles.itemText}>Find items</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item2}>
                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('Alert')}
                >
                    <Icon 
                        ios='ios-bulb' 
                        android="md-bulb"
                        style={styles.icon}
                    />
                    <Text style={styles.itemText}>Alert others</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('Points')}
                >
                    <Icon 
                        ios='ios-cart' 
                        android="md-cart"
                        style={styles.icon}
                    />
                    <Text style={styles.itemText}>Shops near me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ededed',
        flexDirection: 'row',        
        flexWrap: 'wrap',
        borderWidth: 1,
        margin: 10
    }, 
    button3: {
        height: 150,
        margin: 5,
        backgroundColor: '#4d4d4d',
        justifyContent: 'center',
        alignItems: "center"
    },
    itemText: {
        color: 'white',
        position: 'absolute',
        top: 90,
        fontSize: 20,
    },
    icon: {
        position: 'absolute',
        top: 40,
        color: 'white'
    }
})

export default SquareLinks;