import React, { useState, useEffect } from 'react';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Button, Text } from 'react-native';

import { getLocationAsync, getGeocodeAsync } from '../../helpers/location';


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

export default ({stores, updateCurrentLoc }) => {
    const [currentLocation, setCurrentLocation] = useState({longitude: 0, latitude: 0});
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API

        const getLocation = async () => {

          const location = await getLocationAsync();
          setCurrentLocation(location);
        }

        getLocation();

        const markers = stores.map(store => {
          return {
            latitude: Number(store.coordinates.split(',')[0]),
            longitude: Number(store.coordinates.split(',')[1]),
            title: store.storename,
            left: store.Item[0].number
          }
        },[stores])

        console.log(stores);

        setMarkers(markers);
        
    }, [stores]);

   return (
   <View style={styles.container}>
   <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: Number(currentLocation.latitude),
         longitude: Number(currentLocation.longitude),
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
      {markers.map(({longitude, latitude, title, left}, index) => {
          return (
            <Marker
              key={index}
              coordinate={{  longitude, latitude }}
              title={title}
              description={`${left} items left`}
            />
          )
        })}
     </MapView>
   </View>
)};