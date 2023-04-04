import { lazy, Suspense } from 'react';
import { Route } from "react-router-dom";
import LoadingSpinner from '@/components/LoadingSpinner';
import DashboardPage from "@/pages/DashboardPage";
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
// const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const UsersPage = lazy(() => import("@/pages/UsersPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"))




export default function GetRoutes() {
    return (
        <>
            <Route
                path='/login'
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <LoginPage />
                    </Suspense>
                }
                errorElement={
                    <Suspense fallback={<LoadingSpinner />}>
                        <ErrorPage />
                    </Suspense>
                }
            />
            <Route
                path='/'
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <DashboardPage />
                    </Suspense>
                }
                errorElement={
                    <Suspense fallback={<LoadingSpinner />}>
                        <ErrorPage />
                    </Suspense>
                }
            >
                <Route
                    index={true}
                    element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <UsersPage />
                        </Suspense>
                    }
                    errorElement={
                        <Suspense fallback={<LoadingSpinner />}>
                            <ErrorPage />
                        </Suspense>
                    }
                />


            </Route>
        </>

    )
}