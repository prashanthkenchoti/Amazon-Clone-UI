import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* the tag <BrowserRouter> helps to route to child components. Browser Router itself is a component*/}
  <BrowserRouter>
  <App />
  </BrowserRouter>
    
    </React.StrictMode>
  
)
