import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import MainPage from 'pages/MainPage';
import CartPage from 'pages/CartPage';
import FavouritesPage from 'pages/FavouritesPage';
import FiltersPage from 'pages/FiltersPage';
import DetailsPage from 'pages/DetailsPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import ProtectedUserRoutes from './ProtectedUserRoutes';
import ProtectedCheckoutRoutes from './ProtectedCheckoutRoutes';
import ProtectedAdminRoutes from './ProtectedAdminRoutes';
import CustomerServicePage from 'pages/CustomerServicePage';
import ContactsPage from 'pages/ContactsPage';
import AboutPage from 'pages/AboutPage';
import UserOrdersPage from 'pages/UserOrdersPage';
import UserProfilePage from 'pages/UserProfilePage';
import BagPage from 'pages/CheckoutPages/BagPage/BagPage';
import ShippingDetailsPage from 'pages/CheckoutPages/ShippingDetailsPage';
import PaymentOptionsPage from 'pages/CheckoutPages/PaymentOptionsPage';
import EmptyList from 'components/EmptyListSection/EmptyList';
import AdminPanel from 'pages/AdminPanel';
import AdminDashboardHome from 'pages/AdminPanel/AdminDashboardHome';
import AdminDashboardCustomers from 'pages/AdminPanel/AdminDashboardCustomers';
import AdminDashboardProducts from 'pages/AdminPanel/AdminDashboardProducts';
import AdminDashboardPromotions from 'pages/AdminPanel/AdminDashboardPromotions';
import AdminDashboardOrders from 'pages/AdminPanel/AdminDashboardOrders';
import AdminDashboardSubscribers from 'pages/AdminPanel/AdminDashboardSubscribers';
import AdminProducts from 'pages/AdminPanel/AdminDashboardProducts/AdminProducts';
import AdminProductsActions from 'pages/AdminPanel/AdminDashboardProducts/AdminProductsActions';
import AdminEditOrderUserData from 'pages/AdminPanel/AdminDashboardOrders/AdminEditOrderUserData';
import AdminDashboardPartners from 'pages/AdminPanel/AdminDashboardPartners';
import AdminDashboardReviews from 'pages/AdminPanel/AdminDashboardReviews';
import UserReviewsPage from 'pages/UserReviewsPage';

export const router = createBrowserRouter([
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
                element: <MainPage />,
            },
            {
                path: 'catalog',
                element: <Navigate to="filter" replace />,
            },
            {
                path: 'catalog/filter',
                element: <FiltersPage />,
            },
            {
                path: 'catalog/:productId',
                element: <DetailsPage />,
            },
            {
                path: 'cart',
                element: <CartPage />,
            },
            {
                path: 'favourites',
                element: <FavouritesPage />,
            },
            {
                path: 'service',
                element: <CustomerServicePage />,
            },
            {
                path: 'contact',
                element: <ContactsPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'success',
                element: <EmptyList />,
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
                    {
                        path: 'reviews',
                        element: <UserReviewsPage />,
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
                        element: <AdminPanel />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to="home" replace />,
                            },
                            {
                                path: 'home',
                                element: <AdminDashboardHome />,
                            },
                            {
                                path: 'orders',
                                element: <AdminDashboardOrders />,
                            },
                            {
                                path: 'orders/:orderNo',
                                element: <AdminEditOrderUserData />,
                            },
                            {
                                path: 'customers',
                                element: <AdminDashboardCustomers />,
                            },
                            {
                                path: 'products',
                                element: <AdminDashboardProducts />,
                                children: [
                                    {
                                        index: true,
                                        element: <AdminProducts />,
                                    },
                                    {
                                        path: 'add',
                                        element: <AdminProductsActions />,
                                    },
                                    {
                                        path: 'edit/:productId',
                                        element: <AdminProductsActions type="edit" />,
                                    },
                                ],
                            },
                            {
                                path: 'promotions',
                                element: <AdminDashboardPromotions />,
                            },
                            {
                                path: 'reviews',
                                element: <AdminDashboardReviews />,
                            },
                            {
                                path: 'subscribers',
                                element: <AdminDashboardSubscribers />,
                            },
                            {
                                path: 'partners',
                                element: <AdminDashboardPartners />,
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
