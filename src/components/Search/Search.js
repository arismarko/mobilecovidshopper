import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

const Search = ({search}) => {
    const [name, setName] = useState('')

    const setSearch = (newValue) => {   
        setName(newValue);

        search(newValue);
    }
    return (
      <Header 
        searchBar 
        rounded
        style={styles.inputStyle}
      >
        <Item>
          <Icon name="ios-search" />
          <Input 
            placeholder="Search" 
            autoCapitalize='none' 
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setSearch(newValue)}
          />
        </Item>
      </Header>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 10
    }
})

export default Search;