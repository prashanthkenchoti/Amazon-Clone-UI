import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'
import AllRoutes from "./Components/Routes/AllRoutes.jsx"  
import AuthProvider from './Components/Context/AuthProvider.jsx'




// const routeCustomer =() =>{
//   return(
//     <Route path={"/"} element={<App/>} >
//     {(usercustomer.isAuthenticated)?<Route path={"/seller-dashboard"} element={<SellerDashBoard/>}/>:<Route path={"/login"} element={<Login/>}/>}
  
  
//   </Route>

//   )
// }

const routes=AllRoutes();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* the tag <BrowserRouter> helps to route to child components. Browser Router itself is a component*/}
  <BrowserRouter>
  <AuthProvider child={<Route>{routes}</Route>}>

  </AuthProvider>// all the components now able to access properties in authProvider
  
  </BrowserRouter>
    
    </React.StrictMode>
  
);
