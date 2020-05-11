import React, { useState, useContext, useEffect } from 'react';
import { Button, Text, Content } from 'native-base';
import {View, StyleSheet, Header } from 'react-native';

import FormInput from '../FormInput/FormInput';
import Items from '../Items/Items';
import SelectPoints from '../SelectPoints/SelectPoints';
import SelectedStoreView from '../SelectedStore/SelectedStore';
import Search from '../Search/Search';

import { getLocationAsync, getGeocodeAsync } from '../../helpers/location';

import { Context } from '../../context/ItemsContext';

const AddStore = ({handleAdd}) => {
    const [form, setForm] = useState({
        items: [],
        storename: '',
        location: '',
        coordinates: '',
        amount: ''
    });
    const [error, setError] = useState(false)

    const [hide, setHide] = useState(true);
    const [storeName, setStoreName] = useState('');
    const [selectedStore, setSelectedStore] = useState(null);
    const [currentLocation, setCurrentLocation] = useState({longitude: 0, latitude: 0});

    const {state} = useContext(Context);

    const updateForm = ({name, value}) => {
        let formCopy = form;

        formCopy[name] = value;

        setForm(formCopy);
    }

    const addStore = () => {
        let errorFound = false;

        if (form.storename === '') {
            setError(true);
            errorFound = true;
        }

        if (form.amount === '') { 
            setError(true)
            errorFound = true;
        }

        if (form.items.length === 0) {
            setError(true)
            errorFound = true;
        }
        
        if ( !errorFound) {
            form.items = state;
            form.storename = selectedStore.name;
            form.location = selectedStore.location.address1 + selectedStore.location.address2;
            form.coordinates = `${selectedStore.coordinates.latitude}, ${selectedStore.coordinates.longitude}`;
            form.amount = form.queue;
        }

        handleAdd(form)
    }

    const getStoreName = (value) => {
       setStoreName(value);
    }

    useEffect(() => {
        const getLocation = async () => {
            
        const location = await getLocationAsync();
          setCurrentLocation(location);
        }

        getLocation();
    },[])


    
    return <View style={styles.viewStyle}>
        {hide && 
            <View>
                <Text>Tell us about the store your are in now</Text>
                <Text style={{marginTop: 20, fontWeight: 'bold'}}>1. Select a Store</Text>
                {!selectedStore &&
                     <View>
                            <Search 
                                search={getStoreName} 
                                placeholder="Locate your store" 
                            />
                            {   storeName !='' &&
                                <SelectPoints 
                                    value={storeName}
                                    update={(store) => setSelectedStore(store)}
                                />
                            }
                            {form.storename === '' && error  && <Text style={styles.error}> No Store selected </Text> }

                    </View>
                }

                {selectedStore &&
                    <SelectedStoreView 
                        store={selectedStore}
                        remove={() => setSelectedStore(null)}
                    />
                }
                <Text  style={{marginTop: 20, fontWeight: 'bold'} }>2. Are there people queing at the store?</Text>
                <FormInput 
                    label={'No of people'}
                    name={'queue'}
                    update={updateForm}
                />
                {form.amount === '' && error  && <Text style={styles.error}> No Amount selected </Text> }
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
    },
    error: {
        color: 'red'
    }

})

export default AddStore;
