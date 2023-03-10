import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AppLayout from './routes/AppLayout';
import Home from './routes/Home';
import CartRoute from './routes/CartRoute';
import FavouritesRoute from 'routes/FavouritesRoute';
import FiltersRoute from './routes/FiltersRoute';
import DetailsRoute from './routes/DetailsRoute';
import ErrorPage from './routes/ErrorPage';
import ProtectedUserRoutes from './routes/ProtectedUserRoutes';
import ProtectedCheckoutRoutes from './routes/ProtectedCheckoutRoutes';
import ProtectedAdminRoutes from './routes/ProtectedAdminRoutes';
import CustomerServiceRoute from 'routes/CustomerServiceRoute';
import ContactsRoute from 'routes/ContactsRoute';
import AboutRoute from 'routes/AboutRoute';
import UserOrdersPage from './components/UserOrdersPage';
import UserProfilePage from './components/UserProfilePage';
import BagPage from './components/Checkout/pages/BagPage/BagPage';
import ShippingDetailsPage from './components/Checkout/pages/ShippingDetailsPage';
import PaymentOptionsPage from './components/Checkout/pages/PaymentOptionsPage';
import AdminPanelRoute from 'routes/AdminPanelRoute';
import AdminDashboardHomeRoute from 'routes/AdminDashboardHomeRoute';
import AdminDashboardCustomersRoute from 'routes/AdminDashboardCustomersRoute';

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
                path: 'catalog',
                element: <Navigate to="filter" replace />,
            },
            {
                path: 'catalog/filter',
                element: <FiltersRoute />,
            },
            {
                path: 'catalog/:productId',
                element: <DetailsRoute />,
            },
            {
                path: 'cart',
                element: <CartRoute />,
            },
            {
                path: 'favourites',
                element: <FavouritesRoute />,
            },
            {
                path: 'service',
                element: <CustomerServiceRoute />,
            },
            {
                path: 'contact',
                element: <ContactsRoute />,
            },
            {
                path: 'about',
                element: <AboutRoute />,
            },
            {
                path: 'user',
                element: <ProtectedUserRoutes />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="profile" replace />,
                    },
                    {
                        path: 'profile',
                        element: <UserProfilePage />,
                    },
                    {
                        path: 'orders',
                        element: <UserOrdersPage />,
                    },
                ],
            },
            {
                path: 'admin',
                element: <ProtectedAdminRoutes />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="dashboard" replace />,
                    },
                    {
                        path: 'dashboard',
                        element: <AdminPanelRoute />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to="home" replace />,
                            },
                            {
                                path: 'home',
                                element: <AdminDashboardHomeRoute />,
                            },
                            {
                                path: 'customers',
                                element: <AdminDashboardCustomersRoute />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'checkout',
                element: <ProtectedCheckoutRoutes />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="confirm" replace />,
                    },
                    {
                        path: 'confirm',
                        element: <BagPage />,
                    },
                    {
                        path: 'details',
                        element: <ShippingDetailsPage />,
                    },
                    {
                        path: 'options',
                        element: <PaymentOptionsPage />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
