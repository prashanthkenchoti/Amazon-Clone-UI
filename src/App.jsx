import React from 'react'
import Header from './Components/Util/Header'
import { Outlet } from 'react-router-dom'
import Login from './Components/Public/Login';
import Register from './Components/Public/Register';


const App = () => {
  return (
    <div >
      <Header/>
      <Login/>
      <Register/>
      <Outlet/>
    </div>
  );
};

export default App