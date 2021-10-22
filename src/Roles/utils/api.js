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
    Users: {
        list() {
            return callApi("/Users");
        },
        create(Users) {
            return callApi("/Users", {
                method: "POST",
                body: JSON.stringify(Users),
            });
        },
        delete(id) {
            return callApi(`/Users/${ id }`, {
                method: "DELETE",
            });
        },
        edit(Users,list) {
            return callApi(`/Users/${ Users._id }`, {
                method: "PATCH",
                body: JSON.stringify(list),
            });
        },
        getProduct(id) {
            return callApi(`/Users/${ id }`);
        },
    }
};
