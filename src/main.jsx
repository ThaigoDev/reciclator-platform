import React from 'react'
import ReactDOM from 'react-dom/client' 
import Login  from './routes/Login.page.jsx';  
import SignUp from './routes/Singup.page.jsx';
import Products from "./routes/Products.jsx";   
import Error from './routes/Error.page.jsx';
import  Dashboard from "./routes/Dashboard.jsx"; 

import {createBrowserRouter , RouterProvider} from "react-router-dom"; 
const router  = createBrowserRouter([ 
  {
  path: "/", 
  element: <Login />,  
  errorElement : <Error/>, 
  children: [
    {
      path:"product", 
      element: <Products />
    }, 
    {
      path: "dashboard",  
      element: <Dashboard />
    }, 
    {
      path : "signup", 
      element: <SignUp/>
    }
  ]

  }
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)