import React from "react";
import Register from "../Public/Register";
import VerifyOTP from "../Public/VerifyOTP";
import Search from "../Public/Search";
import Home from "../Public/Home";
import SellerDashBoard from "../Private/Seller/SellerDashBoard";
import SellerOrders from "../Private/Seller/SellerOrders";
import Cart from "../Private/Customer/Cart";
import Wishlist from "../Private/Customer/Wishlist";
import Orders from "../Private/Customer/Orders";
import EditProfile from "../Private/Common/EditProfile";
import Account from "../Private/Common/Account";
import Login from "../Public/Login";

//================================BEFORE AUTH=============================
const navs = [
  {
    path: "/seller/register",
    element: <Register role={"SELLER"} />,
    authenticationRequired: false,
    isVisibleAfterAuthentication: false,
    role: "ALL",
  },

  {
    path: "/customer/register",
    element: <Register role={"CUSTOMER"} />,
    authenticationRequired: false,
    isVisibleAfterAuthentication: false,
    role: "ALL",
  },

  {
       path:"/login",
       element:<Login/>,
      authenticationRequired:false,
      isVisibleAfterAuthentication:false,
      role:"ALL"
  },

  {
    path: "/verify-otp",
    element: <VerifyOTP />,
    authenticationRequired: false,
    isVisibleAfterAuthentication: false,
    role: "ALL",
  },

  //================================BEFORE AND AFTER AUTH=============================

  {
    path: "/search",
    element: <Search />,
    authenticationRequired: false,
    isVisibleAfterAuthentication: true,
    role: "ALL",
  },

  {
    path: "/",
    element: <Home />,
    authenticationRequired: false,
    isVisibleAfterAuthentication: true,
    role: "ALL",
  },

  //================================COMMON AND AFTER AUTH=============================

  {
    path: "/edit-profile",
    element: <EditProfile />,
    authenticationRequired: true,
    isVisibleAfterAuthentication: true,
    role: "ALL",
  },

  {
    path: "/account",
    element: <Account />,
    authenticationRequired: true,
    isVisibleAfterAuthentication: true,
    role: "ALL",
  },

  //================================SELLER=============================

  {
    path: "/seller-dashboard",
    element: <SellerDashBoard />,
    authenticationRequired: true,
    isVisibleAfterAuthentication: true,
    role: "SELLER",
  },

  {
    path: "/seller-orders",
    element: <SellerOrders />,
    authenticationRequired: true,
    isVisibleAfterAuthentication: true,
    role: "SELLER",
  },

  //================================CUSTOMER=============================

  {
    path: "/cart",
    element: <Cart />,
    authenticationRequired: true,
    isVisibleAfterAuthentication: true,
    role: "CUSTOMER",
  },

  {
    path: "/wishlist",
    element: <Wishlist />,
    authenticationRequired: true,
    isVisibleAfterAuthentication: false,
    role: "CUSTOMER",
  },

  {
    path: "/orders",
    element: <Orders />,
    authenticationRequired: true,
    isVisibleAfterAuthentication: true,
    role: "CUSTOMER",
  },
 
];

export default navs;
