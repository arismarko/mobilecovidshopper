import React from 'react';
import { View , Text, StyleSheet} from 'react-native';
import { ListItem, Thumbnail, Left, Body} from 'native-base';

const Points = ({points}) => {
    return (
          <View  style={styles.view}>
          {   points.length > 0 && 
              points.map(store => (
                <ListItem key={store.id} thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: store.imageurl }} />
                  </Left>
                  <Body>
                    <Text>{store.name}</Text>
                    <Text note numberOfLines={1}>{`${store.address1} ${store.address2} `}</Text>
                  </Body>
                </ListItem>
              ))
          }
         </View>
    )
}

const styles= StyleSheet.create({
})

export default Points;