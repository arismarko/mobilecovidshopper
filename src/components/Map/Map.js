import React, { useState, useEffect } from 'react';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Text } from 'react-native';
import { Spinner } from 'native-base';
import { getLocationAsync } from '../../helpers/location';


const styles = StyleSheet.create({
 container: {
   height: 300,
   width: 400,
   marginLeft: 5,
   paddingRight: 20
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 loading: {
   color: '#333333',
   width: 200,
   padding: 20,
   position: 'absolute',
   left: 80,
   top: 160
 },
 spinner: {
   width: 1,
   height: 1,
   position: 'relative',
   top: 20,
   left: 20,
 }
});

export default ({stores }) => {
    const [currentLocation, setCurrentLocation] = useState({longitude: 0, latitude: 0});
    const [markers, setMarkers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deltas, setDeltas] = useState([1000,10])

    useEffect(() => {
        // Update the document title using the browser API

        const getLocation = async () => {
          const location = await getLocationAsync();
          setCurrentLocation(location);
          setLoading(true);
          setDeltas([  0.075, 0.0121])
        }

        getLocation();

        setMarkers(stores);
        
    }, [stores]);

   return (
   <View style={styles.container}>
  
   {<MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: Number(currentLocation.latitude),
         longitude: Number(currentLocation.longitude),
         latitudeDelta: deltas[0],
         longitudeDelta: deltas[1],
       }}
     >
      {loading && markers.map(({longitude, latitude, title, left, amount}, index) => {
          return (
            <Marker
              key={index}
              coordinate={{  longitude, latitude }}
              title={title}
              description={`${left} items left & ${amount} queuing`}
            />
          )
      })}
     </MapView>}
     {!loading && <View><Text style={styles.loading}>Loading your location...      <Spinner style={styles.spinner} color="gray" /> </Text></View>}
   </View>
)};