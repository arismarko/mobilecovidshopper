import React from 'react';
import {View, StyleSheet, Button, Text } from 'react-native';

import FormInput from '../FormInput/FormInput';


const AddStore = ({data}) => {
    return <View style={styles.viewStyle}>
        <FormInput 
            label={'Store Name'}
            dt={'storename'}
        />
        <FormInput 
            label={'Location'}
            dt= {'location'}
        />
        <Text style={styles.textStyle}>Add Items</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10
    },
    textStyle: {
        paddingLeft: 10,
        paddingTop: 10
    }

})

export default AddStore;
