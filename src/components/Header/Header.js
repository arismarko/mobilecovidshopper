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
        margin: 20
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    textStyle: {
        fontSize: 17,
        margin: 10
    }
});

export default Header;