import React from 'react'
import { Navigate } from 'react-router-dom';

/**
 * This component prevents authorized user from accessing Login or Signup page
 */


function ProtectedAuthRoute({ children }: { children: JSX.Element }) {

    const isAuth = localStorage.getItem("LendsqrAuthDetails");

    if (isAuth) {
        return <Navigate to={"/"} replace />
    } else {
        return children;
    }
}

export default ProtectedAuthRoute