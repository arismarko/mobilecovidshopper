import React, { useEffect, useContext } from 'react';
import { View , Text, StyleSheet, ScrollView} from 'react-native';
import { List, ListItem, Thumbnail, Left, Body} from 'native-base';

import { Context as PointsContext} from '../../context/PointsContext';


const SelectPoints = ({value, update }) => {
    const {state, getPoints} = useContext(PointsContext);

    useEffect(() => {
      getPoints(value);
    }, [value])

    const setSelectedStore = (store) => {
      update(store)
    }

    return (
        <ScrollView>
          {
            state && 
            <Text style={styles.text}>Select the store you are in now</Text>
          }
          <List>
          {   state && 
              state.map(store => (
                <ListItem 
                  key={store.id} 
                  thumbnail 
                  onPress={() => setSelectedStore(store)}
                  
                  >
                  <Left>
                    <Thumbnail square source={{ uri: store.image_url }} />
                  </Left>
                  <Body>
                    <Text>{store.name}</Text>
                    <Text note numberOfLines={1}>{`${store.location.address1} ${store.location.address2} `}</Text>
                  </Body>
                </ListItem>
              ))
          }
          </List>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  text: {

  }
})

export default SelectPoints;