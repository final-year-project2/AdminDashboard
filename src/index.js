import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Homepage/Home';
// import Profile from './pages/Homepage/profile';
const router = createBrowserRouter([
  {
    path :'/',
    element:<Home />,
    errorElement:<div>404 not found </div>
  },
  // {
  //   path :'/:id',
  //   element:<Profile />,
  //   errorElement:<div>404 not found </div>
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


