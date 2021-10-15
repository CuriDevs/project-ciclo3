const callApi = async (url, options = {}) => {
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const response = await fetch("http://localhost:5000/api/v1" + url, options);
    const data = await response.json();
    return data;
};

export const api = {
    ventas: {
        list() {
            return callApi("/ventas");
        },
        create(ventas) {
            return callApi("/ventas", {
                method: "POST",
                body: JSON.stringify(ventas),
            });
        },
        delete(id) {
            return callApi(`/ventas/${ id }`, {
                method: "DELETE",
            });
        },
        edit(ventas) {
            return callApi(`/ventas/${ ventas._id }`, {
                method: "PUT",
                body: JSON.stringify(ventas),
            });
        },
        getProduct(id) {
            return callApi(`/ventas/${ id }`);
        },
    }
};
