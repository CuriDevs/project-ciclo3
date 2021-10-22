import axios from 'axios';

/* const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
}; */

const urlLocal = 'http://localhost:5000';
const urlBackend = 'https://jalmed-backend.herokuapp.com';

export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: `${urlBackend}/productos/`,
        /* headers: {
        Authorization: getToken(),
        }, */
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};


export const crearProducto = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: `${urlBackend}/productos/`,
        headers: { 'Content-Type': 'application/json'/* , Authorization: getToken() */ },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `${urlBackend}/productos/${id}/`,
        headers: { 'Content-Type': 'application/json'/* , Authorization: getToken() */ },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `${urlBackend}/productos/${id}/`,
        headers: { 'Content-Type': 'application/json'/* , Authorization: getToken() */ },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};
