import React from 'react'
import Header from './Components/Util/Header'
import { Outlet } from 'react-router-dom'
import Login from './Components/Public/Login';
import Register from './Components/Public/Register';
import VerifyOTP from './Components/Public/VerifyOTP';


const App = () => {
  return (
    <div >
      <Header/>  
      <Outlet/>
    </div>
  );
};

export default App