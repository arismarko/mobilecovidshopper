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
        <Item>
          <Icon name="ios-search" />
          <Input 
            placeholder={placeholder}
            autoCapitalize='none' 
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setSearch(newValue)}
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
        padding: 20,
        marginLeft: 10
    }
})

export default Search;