import React, { useState, useEffect } from 'react';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {View, StyleSheet, Button, Text } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


const styles = StyleSheet.create({
 container: {
   height: 400,
   width: 400,
   marginLeft: 20,
   paddingRight: 10
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default ({stores}) => {
    const [currentLocation, setCurrentLocation] = useState({longitude: 0, latitude: 0});
    const [geocode, setGeocode] = useState(null);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        getLocationAsync()

        const markers = stores.map(store => {
          return {
            latitude: store.coordinates.split(',')[0],
            longitude: store.coordinates.split(',')[1],
            title: store.storename,
            left: store.Item[0].number
          }
        })

        setMarkers(markers);

    }, [stores]);

    const getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
        const { latitude , longitude } = location.coords
        getGeocodeAsync({latitude, longitude})
        setCurrentLocation({latitude, longitude});
    };

    const getGeocodeAsync = async (location) => {
        let geocode = await Location.reverseGeocodeAsync(location)
        setGeocode({ geocode})
    }

   return (
   <View style={styles.container}>
     <Text>Hello</Text>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: currentLocation.latitude,
         longitude: currentLocation.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
      {markers.map(({longitude, latitude, title, left}, index) => {
          return (
            <Marker
              key={index}
              coordinate={{ latitude, longitude }}
              title={title}
              description={left}
            />
          )
        })}
     </MapView>
   </View>
)};