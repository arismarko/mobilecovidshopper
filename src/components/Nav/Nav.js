import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const Nav = ({items, navigation}) => {
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
                        onPress={() => {navigation.navigate(`${l.name}`)}}
                    />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        margin: 5,
        height: 20
    },
    textStyle: {
        flex: 1,
        height: 40
    }
});

export default Nav;