import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <Spinner animation="border" variant="primary" />
    };
    const location = useLocation();
    if(user){
        return children
    };
    return <Navigate to='/login' state={{from:location}}  replace></Navigate> ;
};

export default PrivateRoute;