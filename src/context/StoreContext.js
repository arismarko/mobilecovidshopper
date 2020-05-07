import React, { useReducer } from 'react';

import createDataContext from './createDataContext';

import storesReducer from './reducers/stores.reducer';

import axios from 'axios';

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

        dispatch({type: 'add_store', payload: response.data});
    }
}

export const { Context, Provider } = createDataContext(
    storesReducer, 
    { getStores, addStore },
    []
);