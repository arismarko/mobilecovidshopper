import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FormInput = ({label, name, update}) => {
    const [value, setValue] = useState('');

    const setInput = (newValue) => {   
        setValue(newValue);

        update({name:name, value: newValue});
    }

    return (
        <View style={styles.viewStyle}>
           <Text style={styles.label}> {label} </Text>
           <TextInput 
            style={styles.input}
            autoCapitalize='none' 
            autoCorrect={false}
            value={value}
            onChangeText={(newValue) => setInput(newValue)}
           />
           <Text>Validation</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        marginTop: 5,
        marginBottom: 5
    },
    viewStyle: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 20
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    }
})

export default FormInput;