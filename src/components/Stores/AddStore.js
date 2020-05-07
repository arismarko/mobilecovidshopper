import React, { useState } from 'react';
import {View, StyleSheet, Button, Text } from 'react-native';

import FormInput from '../FormInput/FormInput';
import Items from '../Items/Items';

const AddStore = ({data}) => {
    const [form, setForm] = useState({});

    const updateForm = ({name, value}) => {
        let formCopy = form;

        formCopy[name] = value;

        setForm(formCopy);

        console.log(form);
    }

    const addStore = () => {

    }

    return <View style={styles.viewStyle}>
        <FormInput 
            label={'Store Name'}
            name={'storename'}
            update={updateForm}
        />
        <FormInput 
            label={'Location'}
            name={'location'}
            update={updateForm}
        />
        <FormInput 
            label={'Queue size'}
            name={'queue'}
            update={updateForm}
        />
        <Items />
        <Button
            onPress={addStore}
            title="Add Store"
            accessibilityLabel="Learn more about this purple button"
        />
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
