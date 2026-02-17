import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AuthModal from "../pages/auth/AuthModal";

export const router = createBrowserRouter([
  {
    // element: <PublicRoute />,
    children: [{ path: "/", element: <AuthModal /> }],
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
