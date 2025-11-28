import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const getPublicRoutes = () => [
  { path: "/", element: <LandingPage /> },
  { path: "/urunler", element: <ProductsPage /> },
];

export const router = createBrowserRouter([
  { element: <Layout />, children: getPublicRoutes() },
  { path: "*", element: <NotFoundPage /> },
]);
