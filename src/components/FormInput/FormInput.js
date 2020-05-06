import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FormInput = ({label, dt, update}) => {
    const [name, setName] = useState('')

    const setSearch = (newValue) => {   
        setName(newValue);

        update(newValue);
    }

    return (
        <View style={styles.viewStyle}>
           <Text style={styles.label}> {label} </Text>
           <TextInput 
            style={styles.input}
            autoCapitalize='none' 
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setSearch(newValue)}
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