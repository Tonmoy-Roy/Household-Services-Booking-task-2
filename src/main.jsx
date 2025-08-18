import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import Services from './components/Navbar/Services.jsx';
import Booking from './components/Navbar/Booking.jsx';
import Dashboard from './components/Navbar/Dashboard.jsx';
import Register from './components/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
