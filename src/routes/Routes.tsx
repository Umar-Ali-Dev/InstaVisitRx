import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AuthModal from "../pages/auth/AuthModal";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    // element: <PublicRoute />,
    children: [{ path: "/", element: <AuthModal /> }],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: "Not Found",
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
