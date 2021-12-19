import axios from 'axios'

// function paginado(data, page = 1){
//     let countriesPage = 9;
//     let currentPage = 1;
//     if (page > 1){
//         currentPage = page;
//     }
//     let totalPages = Math.ceil(data.length / countriesPage);
//     //Posicion del ultimo pais
//     const LastCountry = currentPage * countriesPage;
//     //Posicion del primer pais
//     const FirstCountry = LastCountry - countriesPage;
//     // Se divide el array de acuerdo a la cantidad de paises necesarios (9)
//     const currentCountries = data.slice(FirstCountry, LastCountry);
//     return {currentCountries, totalPages}
// }

// Conexion con el backend
export function getCountries(order){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/api/countries?order=' + order);
        const data = json.data
        //const {currentCountries, totalPages} = paginado(data)
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: data
            //payload: {data, currentCountries, totalPages, actualPage : 1}   
        })
    }
}

export const getCountry = (id) => dispatch => {
    return fetch ("http://localhost:3001/api/countries/" + id)
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'GET_COUNTRY', 
            payload: data });
    });
};

export function getActivities(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/api/activity');
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: json.data   
        })
    }
}

export function postActivity(payload){
    return async function(dispatch){
        let json = await axios.post('http://localhost:3001/api/activity', payload);
        return json;
    }
}

export function getByName(name){
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/api/countries?name=' + name);
            return dispatch({
                type: 'GET_BY_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log('No se pudo encontrar el pais')
        }
    }
}

export function orderName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function filterByContinent(payload){
    return {
        type: 'FILTER_CONTINENT',
        payload
    }
}

export function filterByActivity(payload){
    return {
        type: 'FILTER_ACTIVITY',
        payload
    }
}

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY'