import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GetStarted } from './pages/get-started';
import { Register } from './pages/register';
import { Detail } from './pages/user-detail';
import { FaceCapture } from './pages/face-capture';
import { Term } from './pages/TERM';
import { Account } from './pages/account';
import { Success } from './pages/success';

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
  {
    path: "face-capture",
    element: <FaceCapture/>,
  },
  {
    path: "term",
    element: <Term/>,
  },
  {
    path: "account",
    element: <Account/>,
  },
  {
    path: "success",
    element: <Success/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
