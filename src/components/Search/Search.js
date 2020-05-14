import React, {useState} from 'react';
import {  StyleSheet } from 'react-native';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

const Search = ({search, placeholder}) => {
    const [name, setName] = useState('')

    const setSearch = (newValue) => {   
        setName(newValue);
    }

    return (
      <Header 
        searchBar 
        style={styles.inputStyle}
      >
        <Item style={{backgroundColor: 'white', borderColor: 'white'}} >
          <Icon name="ios-search"  style={{backgroundColor: 'white', position: 'relative', left: -10, top: 2,  width: 23}} />
          <Input 
            placeholder={placeholder}
            autoCapitalize='none' 
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setSearch(newValue)}
            style={{backgroundColor: 'white'}}
          />
        </Item>
        <Button transparent onPress={() => search(name)}>
            <Text>Search</Text>
        </Button>
      </Header>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 0,
        marginLeft: 0,
        borderColor: 'white',
        backgroundColor: 'white'
    }
})

export default Search;