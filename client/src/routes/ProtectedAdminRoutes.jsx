import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import jwt_decode from 'jwt-decode';

const ProtectedAdminRoutes = () => {
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    const tokenSting = useSelector((state) => state.store.login.token, shallowEqual);
    if (!isLogIn) {
        return <Navigate to="/" />;
    }
    const [, token] = tokenSting.split(' ');
    const decoded = jwt_decode(token);

    return decoded.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedAdminRoutes;
