import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { GetStarted } from './pages/get-started';
import { Register } from './pages/register';
import { Detail } from './pages/user-detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStarted/>,
    errorElement: <>NOT FOUND</>,
  },
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "detail",
    element: <Detail/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
