import React, { createContext, useContext, useEffect, useState } from "react";
import AllRoutes from "../Routes/AllRoutes";
import DoLoginRefresh from "../Auth/DoLoginRefresh";

const authContext = createContext({}); // creation of context

const AuthProvider = ({ children }) => {
  const routes = AllRoutes();
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    role: "CUSTOMER",
    isAuthenticated: false,
    accessExpiration: "",
    refreshExpiration: "",
  });
    const refresh=async()=>{
      const {validaAndRefresh}= DoLoginRefresh();
      const data= await validaAndRefresh()
      setAuth();
        //set manually
        userId: loginresponse.data.userId;
        username: loginresponse.data.username;
        role: loginresponse.data.role;
        isAuthenticated: loginresponse.data.authenticated;
        accessExpiration: loginresponse.data.accessExpiration;
        refreshExpiration: loginresponse.data.refreshExpiration;
    }

    useEffect(() =>{
      refresh();
    },[])

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

// creating custom hook

export const useAuth = () => useContext(authContext);
