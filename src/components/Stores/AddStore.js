import React, { useState, useContext, useEffect } from 'react';
import { Button, Text, Content } from 'native-base';
import {View, StyleSheet } from 'react-native';

import FormInput from '../FormInput/FormInput';
import Items from '../Items/Items';

import { getLocationAsync, getGeocodeAsync } from '../../helpers/location';

import { Context } from '../../context/ItemsContext';

const AddStore = ({handleAdd}) => {
    const [form, setForm] = useState({});
    const [hide, setHide] = useState(true);
    const [currentLocation, setCurrentLocation] = useState({longitude: 0, latitude: 0});

    const {state} = useContext(Context);

    const updateForm = ({name, value}) => {
        let formCopy = form;

        formCopy[name] = value;

        console.log("Hello");

        setForm(formCopy);
    }

    const addStore = () => {
        console.log("Hello1");
        form.items = state;
        form.coordinates = `${currentLocation.latitude}, ${currentLocation.longitude}`;
       
        handleAdd(form)
    }

    useEffect(() => {
        // Update the document title using the browser API

        const getLocation = async () => {

          const location = await getLocationAsync();
          setCurrentLocation(location);
        }

        getLocation();
    },[])

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
        padding: 20,
        height: 600
        
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
