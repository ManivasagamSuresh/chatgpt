import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./Components/SideMenu/SideMenu";
import { useAuth } from "@clerk/clerk-react";

function ProtectedLayout() {

    const navigate = useNavigate();
    const {userId , isLoaded} = useAuth();

    useEffect(()=>{
        if(isLoaded && !userId){
            navigate('/sign-in')
        }
    },[userId, isLoaded, navigate])
    
  return (
    <div>
      <SideMenu/>
      <Outlet />
    </div>
  );
}

export default ProtectedLayout;
