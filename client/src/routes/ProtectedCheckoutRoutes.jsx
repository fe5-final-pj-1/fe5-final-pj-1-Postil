import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

const ProtectedCheckoutRoutes = () => {
    const cart = useSelector((state) => state.store.cart, shallowEqual);

    return cart.length > 0 ? <Outlet /> : <Navigate to="/cart" />;
};

export default ProtectedCheckoutRoutes;
