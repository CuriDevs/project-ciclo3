import { Route, Redirect } from "react-router-dom";
//import { useJwt } from "react-jwt";

const PrivateRoute = ({ component: Component, ...rest }) => {
    let auth = sessionStorage.getItem("token");

    return (
        <Route
            {...rest}
            render={(props) =>
            auth ? (
                <Component {...props} />
            ) : (
                <>
                {alert("No tienes permitido el acceso a esta página")}
                <Redirect
                    to={{
                    pathname: "/",
                    state: { from: props.location },
                    }}
                />
                </>
            )
            }
        ></Route>
    );
};

export default PrivateRoute;