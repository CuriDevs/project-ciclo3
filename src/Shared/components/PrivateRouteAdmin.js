import { Route, Redirect } from "react-router-dom";

const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
    let auth = sessionStorage.getItem("token");
    let rol = sessionStorage.getItem("Rol");

    return (
        <Route
            {...rest}
            render={(props) =>
            auth && rol === 'Admin' ? (
                <Component {...props} />
            ) : (
                <>
                {alert("No tienes permitido el acceso a esta página")}
                <Redirect
                    to={{
                    pathname: "/products",
                    state: { from: props.location },
                    }}
                />
                </>
            )
            }
        ></Route>
    );
};

export default PrivateRouteAdmin;