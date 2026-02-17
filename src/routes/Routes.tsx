import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AuthContainer from "../pages/AuthContainer";

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [{ path: "login", element: <AuthContainer /> }],
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
