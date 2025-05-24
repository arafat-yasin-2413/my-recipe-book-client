import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoaderSpinner from '../components/Loader/LoaderSpinner';

const PrivateRoute = ({ children }) => {


    const {user, loading} = use(AuthContext)
    const location = useLocation();
    // console.log(location);


    if(loading) {
        return <>
        
            <LoaderSpinner></LoaderSpinner>
        </>
    }

    if(user && user?.email) {
        return children
    }

    return (
        <>
            <Navigate state={location.pathname} to="/login" ></Navigate>  
            {/* <Navigate to="/login" state={{ from: location }} replace></Navigate> */}
        </>
    );
};

export default PrivateRoute;