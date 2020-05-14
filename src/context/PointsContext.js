import React from 'react';
import createDataContext from './createDataContext';

import pointsReducer from './reducers/points.reducer';

import { getLocationAsync } from '../helpers/location';

import axios from 'axios';

const getPoints = dispatch => {
        return async (name) => {
            const location = await getLocationAsync();
            const response = await axios.get(`https://ariskorona.herokuapp.com/api/points?name=${name}&latitude=${location.latitude}&longitude=${location.longitude}`)
            .catch(error => console.log(error));
    
            dispatch({type: 'get_points', payload: response.data});
        }
}

const initial = dispatch => {
    return async (store) => {
        dispatch({type: 'initial', payload: []});
    }
}

export const { Context, Provider } = createDataContext(
    pointsReducer, 
    { getPoints, initial },
    []
);

