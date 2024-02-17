import React, { createContext, useContext, useState } from 'react'
import AllRoutes from '../Routes/AllRoutes'

const authContext=createContext({child})// creation of context

const AuthProvider = () => {
    const routes = AllRoutes();
    const[suth,setAuth]=useState({
        userId:"",
        username:"",
        role:"CUSTOMER",
        isAuthenticated:false,
        accessExpiration:"",
        refreshExpiration:""
    })
  return (
    <authContext.Provider value={{Auth,setAuth}}>
        {routes}
    </authContext.Provider>
  )
}

export default AuthProvider

// creating custom hook

export const useAuth=() =>useContext(authContext);