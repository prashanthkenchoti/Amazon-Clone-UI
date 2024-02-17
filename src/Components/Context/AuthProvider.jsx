import React, { createContext, useContext, useState } from "react";
import AllRoutes from "../Routes/AllRoutes";

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
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

// creating custom hook

export const useAuth = () => useContext(authContext);
