import React, {useState} from 'react';
import {StyleSheet, View } from 'react-native';
import { Item, Picker, Icon, Label } from 'native-base';

const SelectBox = ({label, name, update}) => {
    const [value, setValue] = useState('');

    const setInput = (newValue) => {   
        setValue(newValue);
        update({name:name, value: newValue});
    }

    return (
        <View style={styles.viewStyle}>
            <Item picker>
                <Label>{label}</Label>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ marginLeft: 60, width: 250}}
                    placeholder="Select your Item"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={value}
                    onValueChange={(newValue) => setInput(newValue)}
                >
                    <Picker.Item label="Bread" value="bread" />
                    <Picker.Item label="Toilet Roll" value="toiletroll" />
                    <Picker.Item label="Mask" value="mask" />
                    <Picker.Item label="Detol" value="detol" />
                 </Picker>
            </Item>
 
           {/* <Text>Validation</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingBottom: 10,
        paddingTop: 10,
    },

})

export default SelectBox;