import React, { useState, useContext, useEffect } from 'react';
import { Button, Text, Content } from 'native-base';
import {View, StyleSheet } from 'react-native';

import FormInput from '../FormInput/FormInput';
import Items from '../Items/Items';
import SelectPoints from '../SelectPoints/SelectPoints';
import SelectedStoreView from '../SelectedStore/SelectedStore';
import Search from '../Search/Search';

import { getLocationAsync, getGeocodeAsync } from '../../helpers/location';

import { Context } from '../../context/ItemsContext';

const AddStore = ({handleAdd}) => {
    const [form, setForm] = useState({});
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
        form.items = state;
        form.coordinates = `${currentLocation.latitude}, ${currentLocation.longitude}`;
       
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
                <Text style={{marginTop: 20}}>Selected Store</Text>
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
                    </View>
                }

                {selectedStore &&
                    <SelectedStoreView 
                        store={selectedStore}
                        remove={() => setSelectedStore(null)}
                    />
                }
                <Text style={{marginTop: 20}}>What is the Queue like?</Text>
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
