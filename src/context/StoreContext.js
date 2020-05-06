import React, { useReducer } from 'react';

import createDataContext from './createDataContext';

import axios from 'axios';

const storesReducer = (state, action) => {
    switch (action.type) {
        case 'get_stores':
            console.log(action.payload);
            return action.payload
        default:
            return state;
    }
}

const getStores = dispatch => {
    return async (searchTerm) => {
        const today = new Date();
        const date = '2020-5-5';
        
        //today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


        const response = await axios.get(`https://ariskorona.herokuapp.com/api/stores?missing=${searchTerm}&date=${date}`)
        .catch(error => console.log(error));

        dispatch({type: 'get_stores', payload: response.data.results});
    }
}

const addStore = dispatch => {
    return async (item) => {
        const response = await jsonServer.post(`/stores`);

        console.log(response);

        dispatch({type: 'add_store', payload: response.data});
    }
}

export const { Context, Provider } = createDataContext(
    storesReducer, 
    { getStores, addStore },
    []
);