import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector, shallowEqual } from 'react-redux';

const ProtectedCheckoutRoutes = () => {
    const isByeActive = true;

    return isByeActive ? <Outlet /> : <Navigate to="/cart" />;
};

export default ProtectedCheckoutRoutes;
