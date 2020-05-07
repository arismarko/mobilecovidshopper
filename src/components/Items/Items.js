import React, { useContext, useState } from 'react';
import { View, StyleSheet, ScrollView, Modal } from 'react-native';
import { Button, Text } from 'native-base';
import { ListItem } from 'react-native-elements';

import AddItems from './AddItems';

import { Context } from '../../context/ItemsContext';

const Items = () => {
    const {state, addItem} = useContext(Context);
    const [ toggleAdd, setToggleAdd ] = useState(true);

    return (
        <View style = { styles.viewStyle } > 
            <Text>Add Items that you found on the store</Text>
            { toggleAdd && state.length === 0 && <Text style = { styles.labelStyle } >No Items Added</Text> }
            
            { toggleAdd && 
                <View  style={{height: 200, paddingTop: 20, paddingRight: 10}}>
                    <Button 
                        primary block
                        onPress={() => setToggleAdd(!toggleAdd)}
                        title=""
                        accessibilityLabel="Add an Item that you found on the store"
                    >
                        <Text> Add an Item </Text>
                    </Button>
                   <ScrollView>
                    {
                        state.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.item}
                                subtitle={l.number}
                                bottomDivider
                                onPress={() => {}}
                            />
                        ))
                    }
                </ScrollView>
                
            </View>
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={!toggleAdd}
                
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <AddItems
                    toggle={() => setToggleAdd(!toggleAdd)} 
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 2,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10
    },
    labelStyle: {
        paddingTop: 10,

        fontSize: 15
    }   
})

export default Items;