import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Search = ({search}) => (
        <View style={styles.viewStyle}>
           <Text style={styles.label}>Search</Text>
           <TextInput 
            style={styles.input}
            autoCapitalize='none' 
            autoCorrect={false}
            value={""}
            onChangeText={(newValue) => search(newValue)}
           />
        </View>
)


const styles = StyleSheet.create({
    label: {
        marginTop: 5,
        marginBottom: 5
    },
    viewStyle: {
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    }
})

export default Search;