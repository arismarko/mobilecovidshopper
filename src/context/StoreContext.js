import React, { useReducer } from 'react';

import createDataContext from './createDataContext';

import storesReducer from './reducers/stores.reducer';

import axios from 'axios';

const getStores = dispatch => {
    return async (searchTerm) => {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        const response = await axios.get(`https://ariskorona.herokuapp.com/api/stores?missing=${searchTerm}&date=${date}`)
        .catch(error => console.log(error));

        dispatch({type: 'get_stores', payload: response.data.results});
    }
}

const addStore = dispatch => {
    return async (store) => {

        const response = await axios.post(`https://ariskorona.herokuapp.com/api/stores`, store).
        catch(error => console.log(error));
        
        dispatch({type: 'add_store', payload: response.data});
    }
}

export const { Context, Provider } = createDataContext(
    storesReducer, 
    { getStores, addStore},
    []
);