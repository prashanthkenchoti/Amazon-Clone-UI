import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import navs from './Components/Routes/Navigations.jsx'

const user={
  username:"",
  role:"SELLER",
  isAuthenticated:false
}

// const routeSeller =() =>{
//   return(
//     <Route path={"/"} element={<App/>} >
//     {(userseller.isAuthenticated)?<Route path={"/seller-dashboard"} element={<SellerDashBoard/>}/>:<Route path={"/login"} element={<Login/>}/>}
  
  
//   </Route>

//   )
// }

// const usercustomer={
//   username:"",
//   role:"CUSTOMER",
//   isAuthenticated:false
// }

// const routeCustomer =() =>{
//   return(
//     <Route path={"/"} element={<App/>} >
//     {(usercustomer.isAuthenticated)?<Route path={"/seller-dashboard"} element={<SellerDashBoard/>}/>:<Route path={"/login"} element={<Login/>}/>}
  
  
//   </Route>

//   )
// }

const {role,isAuthenticated}= user;

const allRoutes =() =>{
return (
  <Route path={"/"} element={<App/>}>
  {navs.map((nav,i) =>{
    if(isAuthenticated){
        if(nav.isVisibleAfterAuthentication){
          if(nav.role===role ||nav.role==="ALL"){
            console.log(nav);
            return <Route key={i} path={nav.path} element={nav.element}/>
        }
       
      }
    }
    else{
      if(!nav.authenticationRequired && nav.role=== "ALL")
      {
        console.log(nav);
        return <Route key={i} path={nav.path} element={nav.element}/>
      }
    }
  })}</Route>
)
}
 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* the tag <BrowserRouter> helps to route to child components. Browser Router itself is a component*/}
  <BrowserRouter>
  <Routes>
  {/* { routeSeller()}
  {routeCustomer()} */}
  {allRoutes()}
  </Routes>
  </BrowserRouter>
    
    </React.StrictMode>
  
)
