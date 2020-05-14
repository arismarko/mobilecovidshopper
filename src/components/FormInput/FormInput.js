import React, {useState} from 'react';
import {StyleSheet, View } from 'react-native';
import { Item, Input, Label } from 'native-base';

const FormInput = ({label, name, update}) => {
    const [value, setValue] = useState('');

    const setInput = (newValue) => {   
        setValue(newValue);
        update({name:name, value: newValue});
    }

    return (
        <View style={styles.viewStyle}>
            <Item fixedLabel>
              <Label>{label}</Label>
              <Input 
                 style={styles.input}
                 autoCapitalize='none' 
                 autoCorrect={false}
                 value={value}
                 onChangeText={(newValue) => setInput(newValue)}
              />
            </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingBottom: 10,
        backgroundColor: 'white',
        paddingLeft: 0
    },
})

export default FormInput;