import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Homepage/Dashboard';
import {store} from './Redux/Store'
import { Provider } from 'react-redux'
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
    <Provider  store={store}>  
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


