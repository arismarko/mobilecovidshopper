import React, { useReducer } from 'react';

import createDataContext from './createDataContext';

import pointsReducer from './reducers/points.reducer';

import axios from 'axios';

const getPoints = dispatch => {
    return async () => {
        return async (name, latitude, longitude) => {
            const response = await axios.get(`https://ariskorona.herokuapp.com/api/points?name=${name}&latitude=${latitude}&longitude=${longitude}`)
            .catch(error => console.log(error));
    
            dispatch({type: 'get_points', payload: response.data.results});
        }
    }
}

export const { Context, Provider } = createDataContext(
    pointsReducer, 
    { getPoints },
    []
);