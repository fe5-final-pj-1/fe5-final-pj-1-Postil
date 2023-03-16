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
import EmptyList from 'components/Checkout/sections/EmptyListSection/EmptyList';
import AdminPanelRoute from 'routes/admin/AdminPanelRoute';
import AdminDashboardHomeRoute from 'routes/admin/AdminDashboardHomeRoute';
import AdminDashboardCustomersRoute from 'routes/admin/AdminDashboardCustomersRoute';
import AdminDashboardProductsRoute from 'routes/admin/AdminDashboardProductsRoute';
import AdminDashboardPromotionsRoute from 'routes/admin/AdminDashboardPromotionsRoute';
import AdminDashboardOrdersRoute from 'routes/admin/AdminDashboardOrdersRoute';
import AdminDashboardSubscribersRoute from 'routes/admin/AdminDashboardSubscribersRoute';
import AdminProductsRoute from 'routes/admin/AdminProductsRoute';
import AdminProductsAddRoute from 'routes/admin/AdminProductsAddRoute';
import AdminProductsEditRoute from 'routes/admin/AdminProductsEditRoute';
import AdminEditOrderUserDataRoute from 'routes/admin/AdminEditOrderUserDataRoute';

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
                                path: 'orders',
                                element: <AdminDashboardOrdersRoute />,
                            },
                            {
                                path: 'orders/:orderNo',
                                element: <AdminEditOrderUserDataRoute />,
                            },
                            {
                                path: 'customers',
                                element: <AdminDashboardCustomersRoute />,
                            },
                            {
                                path: 'products',
                                element: <AdminDashboardProductsRoute />,
                                children: [
                                    {
                                        index: true,
                                        element: <AdminProductsRoute />,
                                    },
                                    {
                                        path: 'add',
                                        element: <AdminProductsAddRoute />,
                                    },
                                    {
                                        path: 'edit/:productId',
                                        element: <AdminProductsEditRoute />,
                                    },
                                ],
                            },
                            {
                                path: 'promotions',
                                element: <AdminDashboardPromotionsRoute />,
                            },
                            {
                                path: 'subscribers',
                                element: <AdminDashboardSubscribersRoute />,
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
                    {
                        path: 'success',
                        element: <EmptyList />,
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
