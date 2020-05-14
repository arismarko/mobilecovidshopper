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
                <View>
                    <Text style={{fontWeight: 'bold'}}>
                        3. We are currently looking for a number of items such as Toilet Roll, Bread etc</Text>
                     
                    </View>
         
                
                { toggleAdd && 
                
                    <View  style={{height: 160, paddingTop: 5}}>
                        { state.length > 0 && <Text style = { styles.labelStyle } > Items Found</Text> }
                        { toggleAdd && state.length === 0 && <Text style = { styles.labelStyle } >No Items Found</Text> }
                        <ScrollView>
                        {
                            state.map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={`${l.item}`} 
                                    bottomDivider
                                    onPress={() => {}}
                                    style={{ position: 'relative', top: -10, left: -10, padding: 0, margin: 0}}
                                    badge={{ value: l.number, textStyle: { color: 'white' }, containerStyle: { position: 'relative', right: 0, marginLeft: 0 } }}
                               />
                            ))
                        }
                    </ScrollView>
                 
                    <Button 
                            iconLeft
                            transparent
                            onPress={() => setToggleAdd(!toggleAdd)} 
                            style={styles.toggleButton}
                        >
                           
                            <Text>Add an item +</Text>
                    </Button>
                   
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
        paddingTop: 10,
    },
    labelStyle: {
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },
    toggleButton: {
        width: 130,
        position:  'absolute',
        top: 0,
        right: 10
    },
    icon: {
        position: 'relative',
        right: 10
    },
    button: {
        paddingTop: 0,
        paddingBottom: 0
    }
})

export default Items;