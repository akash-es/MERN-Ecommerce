import React from "react";
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom";



function PrivateRoutes() {

    const { userData } = useSelector((state) => state.auth);


    return userData ? <Outlet /> : <Navigate to="/login" replace />;

}




export default PrivateRoutes;