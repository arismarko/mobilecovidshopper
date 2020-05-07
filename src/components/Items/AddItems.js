import React, { useState } from 'react';
import {View, StyleSheet, Button, Text } from 'react-native';

import FormInput from '../FormInput/FormInput';


const AddItems = () => {
    const [form, setForm] = useState({});

    const onPressAddItem = () => {

    }

    const updateForm = ({name, value}) => {
        let formCopy = form;

        formCopy[name] = value;

        setForm(formCopy);

        console.log(form);
    }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.labelStyle}> Add Item </Text>
            <FormInput 
                label={'Item Name'}
                name={'item'}
                update={updateForm}
            />
            <FormInput 
                label={'Number'}
                name={'number'}
                update={updateForm}
            />
           <Button
                onPress={onPressAddItem}
                title="Add"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
    },
    labelStyle: {
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 20
    },
})

export default AddItems;