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
      <Header searchBar rounded>
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
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
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