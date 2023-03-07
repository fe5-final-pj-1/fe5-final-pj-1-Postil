import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

const ProtectedUserRoutes = () => {
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);

    return isLogIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedUserRoutes;
