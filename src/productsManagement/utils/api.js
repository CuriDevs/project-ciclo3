import axios from 'axios';

/* const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
}; */

export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/productos/',
        /* headers: {
        Authorization: getToken(),
        }, */
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos/',
        headers: { 'Content-Type': 'application/json'/* , Authorization: getToken() */ },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/productos/${id}/`,
        headers: { 'Content-Type': 'application/json'/* , Authorization: getToken() */ },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/productos/${id}/`,
        headers: { 'Content-Type': 'application/json'/* , Authorization: getToken() */ },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};
