import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import ErrorRoute from "./routes/ErrorRoute";
import HomeRoute from "./routes/HomeRote";
import RepositoryRoute from "./routes/RepositoryRoute";
import BattleRoute from "./routes/BattleRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/repository",
        element: <RepositoryRoute />,
      },
      {
        path: "/battle",
        element: <BattleRoute />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
