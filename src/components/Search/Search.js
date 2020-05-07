import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item, Input, Label } from 'native-base';

const Search = ({search}) => {
    const [name, setName] = useState('')

    const setSearch = (newValue) => {   
        setName(newValue);

        search(newValue);
    }

    return (
        <View style={styles.viewStyle}>
           <Item fixedLabel>
              <Label>Search</Label>
              <Input 
                style={styles.input}
                autoCapitalize='none' 
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setSearch(newValue)}
             />
            </Item>
          
           {name!=='' && <Text>You searched for {name}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        marginTop: 5,
        marginBottom: 5
    },
    viewStyle: {
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    }
})

export default Search;