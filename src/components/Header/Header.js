import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 

const Header = ({title, imageSource, score}) => {
    return (
        <View style={styles.viewStyle}>
            <Image source={imageSource} style={styles.imageStyle} />
            <Text style={styles.textStyle}>{title} // Community Helper </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        height: 70
    },
    imageStyle: {
        width: 40,
        height: 40
    },
    textStyle: {
        fontSize: 17,
        margin: 10
    }
});

export default Header;