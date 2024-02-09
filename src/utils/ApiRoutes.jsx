const ApiRoutes = {
    SIGN_IN: {
        path: "/user/login",
        authentication: false
    },
    SIGN_UP: {
        path: "/user/createUser",
        authentication: false
    },
    GET_USERS: {
        path: "/user/;id",
        authentication: true
    }
};
export default ApiRoutes;
