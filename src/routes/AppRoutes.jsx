// src/AppRoutes.tsx
import { useRoutes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import AdminLayout from "../Components/Layout/adminLayout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Dashboard from "../Components/Admin/Dashboard/Dashboard";
import Login from "../Components/Login/Login";
import Logout  from "../Components/Logout/Logout";
import ProtectedRoute from "../AuthCheck/rotectedRoute";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "login", element: <Login /> },
        { path: "logout", element: <Logout /> }
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true, element:<ProtectedRoute element={ <Dashboard />}/> }
      ],
    }
  ]);
};

export default AppRoutes;
