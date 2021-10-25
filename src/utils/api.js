const callApi = async (url, options = {}) => {
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const response = await fetch('https://jalmed-backend.herokuapp.com' + url, options);
    const data = await response.json();
    return data;
};

export const api = {
    ventas: {
        list() {
            return callApi("/api/v1/ventas");
        },
        create(ventas) {
            return callApi("/api/v1/ventas", {
                method: "POST",
                body: JSON.stringify(ventas),
            });
        },
        delete(id) {
            return callApi(`/api/v1/ventas/${ id }`, {
                method: "DELETE",
            });
        },
        edit(ventas,list) {
            return callApi(`/api/v1/ventas/${ ventas._id }`, {
                method: "PATCH",
                body: JSON.stringify(list),
            });
        },
        getProduct(id) {
            return callApi(`/api/v1/ventas/${ id }`);
        },
    },
    Users: {
        list() {
            return callApi("/api/v1/Users");
        },
        create(Users) {
            return callApi("/api/v1/Users", {
                method: "POST",
                body: JSON.stringify(Users),
            });
        },
        delete(id) {
            return callApi(`/api/v1/Users/${ id }`, {
                method: "DELETE",
            });
        },
        edit(Users,list) {
            return callApi(`/api/v1/Users/${ Users._id }`, {
                method: "PATCH",
                body: JSON.stringify(list),
            });
        },
        getUser(id) {
            return callApi(`/api/v1/Users/${ id }`);
        },
    }
};
