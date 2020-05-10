import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

import pointsReducer from './reducers/points.reducer';

import { getLocationAsync, getGeocodeAsync } from '../helpers/location';

import axios from 'axios';

const getPoints = dispatch => {
        return async (name) => {
            const location = await getLocationAsync();
            const response = await axios.get(`https://ariskorona.herokuapp.com/api/points?name=${name}&latitude=${location.latitude}&longitude=${location.longitude}`)
            .catch(error => console.log(error));
    
            dispatch({type: 'get_points', payload: response.data});
        }
}

const initialise = dispatch => {
    dispatch({type: 'initialise', payload: []});
}

export const { Context, Provider } = createDataContext(
    pointsReducer, 
    { getPoints},
    []
);

