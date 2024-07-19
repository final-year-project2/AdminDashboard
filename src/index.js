import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Homepage/Dashboard';
import {store} from './Redux/Store'
import { Provider } from 'react-redux'
import Users from './pages/Homepage/Users';
import Seller from './pages/Homepage/Seller';
import SelerDetail from './pages/Homepage/SelerDetail';
const router = createBrowserRouter([
  {
    path :'/',
    element:<Home />,
    errorElement:<div>404 not found </div>,
  },
  {
    path :'/users',
    element:<Users />,
    errorElement:<div>404 not found </div>
  },
  {
    path :'/admin',
    element:<Users />,
    errorElement:<div>404 not found </div>
  },
  {
    path :'/seller',
    element:<Seller />,
    errorElement:<div>404 not found </div>
  },
  {
    path :'/seller/:id',
    element:<SelerDetail />,
    errorElement:<div>404 not found </div>
  },
  {
    path :'/ticket_list',
    element:<Users />,
    errorElement:<div>404 not found </div>
  }
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


