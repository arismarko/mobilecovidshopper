import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

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
    
    return ({latitude, longitude});
};

const getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location)
    
    return { geocode}
}

export {
    getLocationAsync,
    getGeocodeAsync
}