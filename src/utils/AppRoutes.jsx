import Signin from "../components/Signin.jsx";
import Signup from "../components/Signup.jsx";
import UserDashboard from "../components/UserDashboard.jsx";
import AdminDashboard from "../components/AdminDashboard.jsx";

const AppRoutes = [
    {
        path: "/",
        element: <Signin />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/user",
        element: <UserDashboard />
    },
    {
        path: "/admin",
        element: <AdminDashboard />
    },
    {
        path: "/*",
        element: <Navigator to='/' />
    }
];

export default AppRoutes;