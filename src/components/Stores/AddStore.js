import React, { useState } from 'react';
import { Button, Text } from 'native-base';
import {View, StyleSheet } from 'react-native';

import FormInput from '../FormInput/FormInput';
import Items from '../Items/Items';

const AddStore = ({data}) => {
    const [form, setForm] = useState({});
    const [hide, setHide] = useState(true)

    const updateForm = ({name, value}) => {
        let formCopy = form;

        formCopy[name] = value;

        setForm(formCopy);
    }

    const addStore = () => {

    }

    return <View style={styles.viewStyle}>
        {hide && 
            <View>
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
            </View>
        }
        <Items />
        <Button 
            block
            onPress={addStore}
            title="Add Store"
            style={styles.buttonStyle}
        >
          <Text>Add Store</Text>
        </Button>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 20
    },
    textStyle: {
        paddingLeft: 10,
        paddingTop: 10
    },
    buttonStyle: {
        marginTop: 10
    }

})

export default AddStore;
