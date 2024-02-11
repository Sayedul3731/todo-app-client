/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    if(user){
        return children;
    }
    console.log('location', location);
    return <Navigate to="/login" state={{from: location}} replace></Navigate> ;
};

export default PrivetRoutes;