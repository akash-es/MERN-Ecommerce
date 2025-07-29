import React from "react";
import { useSelector } from "react-redux"
import { Outlet,Navigate } from "react-router-dom";



function PrivateRoutes(){

const {userInfo}= useSelector((state) => state.auth);


    return userInfo ? <outlet  /> : <navigate to = "/login" replace />;
     
}




export default PrivateRoutes;