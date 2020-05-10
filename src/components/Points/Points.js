import React from 'react';
import { View , Text} from 'react-native';
import { List, ListItem, Thumbnail, Left, Body} from 'native-base';

const Points = ({points}) => {
    return (
        <List>
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
        </List>
    )
}

export default Points;