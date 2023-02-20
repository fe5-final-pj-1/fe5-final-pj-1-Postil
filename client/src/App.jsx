import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AppLayout from './routes/AppLayout';
import Home from './routes/Home';
import CartRoute from './routes/CartRoute';
import FiltersRoute from './routes/FiltersRoute';
import DetailsRoute from './routes/DetailsRoute';
import ErrorPage from './routes/ErrorPage';
<<<<<<< HEAD
=======
import './normalize.scss';

import './App.scss';
>>>>>>> header

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="shop" replace />,
            },
            {
                path: 'shop',
                element: <Home />,
            },
            {
                path: 'products',
                element: <FiltersRoute />,
            },
            {
                path: 'products/:productId',
                element: <DetailsRoute />,
            },
            {
                path: 'cart',
                element: <CartRoute />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
