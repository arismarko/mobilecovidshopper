import React from 'react';
import {Text,View, StyleSheet, Button } from 'react-native';
import { ListItem } from 'react-native-elements'

const Nav = ({items}) => {
    return (
        <View style={styles.viewStyle}>
            {
                items.map((l, i) => (
                <ListItem
                    style={styles.textStyle}
                    key={i}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1, 
        flexDirection: 'row',
        margin: 10
    },
    textStyle: {
        flex: 1,
        height: 60
    }
});

export default Nav;