import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const getPublicRoutes = () => [
  { path: "/", element: <LandingPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export const router = createBrowserRouter([
  { element: <Layout />, children: getPublicRoutes() },
]);
