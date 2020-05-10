import React, { useState, useContext } from 'react';
import {View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

import FormInput from '../FormInput/FormInput';
import SelectBox from '../SelectBox/SelectBox';

import { Context } from '../../context/ItemsContext';

const AddItems = ({toggle}) => {
    const [form, setForm] = useState({});
    const {addItem} = useContext(Context);

    const onPressAddItem = () => {
        addItem(form);   
        toggle(); 
    }

    const updateForm = ({name, value}) => {
        let formCopy = form;
        formCopy[name] = value;
        setForm(formCopy);
    }

    return (
        <View style={styles.viewStyle}>
          <Text style={styles.labelStyle}> Add an missing Item </Text>
           <SelectBox 
                label={'Item'} 
                name={'item'}
                update={updateForm}
            />
            <FormInput 
                label={'Amount'}
                name={'number'}
                update={updateForm}
            />
           <Button
                onPress={onPressAddItem}
                accessibilityLabel="Learn more about this purple button"
                block
                style={styles.buttonStyle}
            >
               <Text>Add</Text>
            </Button>
            <Button
                onPress={toggle}
                title="Cancel"
                accessibilityLabel="Learn more about this purple button"
                block info
                style={styles.buttonStyle}
            >
                <Text>Cancel</Text> 
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
            backgroundColor: "white",
            borderRadius: 20,
            position: 'relative',
            marginTop: 180,
            height: 700,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 1
    },
    buttonStyle: {
        marginBottom: 10
    },
    labelStyle: {
        paddingTop: 20,
        paddingLeft: 0,
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default AddItems;