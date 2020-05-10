import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

const Search = ({search, placeholder}) => {
    const [name, setName] = useState('')

    const setSearch = (newValue) => {   
        setName(newValue);
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
        padding: 10
    }
})

export default Search;