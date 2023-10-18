import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './pages/home/home.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Products from './pages/Products/Products.jsx';
import ProductDetail from './pages/productDetail/ProductDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        
      },
      {
        path: "products",
        element: <Products />,
        
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      }
  ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
