import React from 'react'
import { Navigate } from 'react-router-dom';

/**
 * This component prevents unauthorized user from acessing auth required pages
 * 
 * E.g DashboardPage
 */

function ProtectedRoute({ children }: { children: JSX.Element }) {

    const isAuth = localStorage.getItem("LendsqrAuthDetails");

    if (!isAuth) {
        return <Navigate to={"/login"} replace />
    } else {
        return children;
    }
}

export default ProtectedRoute