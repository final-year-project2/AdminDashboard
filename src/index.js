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
import TicketList from './pages/Homepage/TicketList';
import TicketDetail from './pages/Homepage/TicketDetail';
import DrawedTicket from './pages/Homepage/DrawedTicket';
import WinnerList from './pages/Homepage/WinnerList';
import BannedTicketList from './pages/Homepage/BannedTicketList';
import Signup from './Authentication/Signup';



var isAutenticated = false
RetrieveData()
function RetrieveData() {
  const storedDataString = localStorage.getItem("AutenticationData");
  if (storedDataString) {
    const AuthenticationData = JSON.parse(storedDataString);
    if(AuthenticationData.isAutenticated){
      isAutenticated = true
    }else{
      isAutenticated = false
    }
  } else {
    isAutenticated = false
  }
}



const Router2 = createBrowserRouter([
  {
    path :'/',
    element:<Signup />,
    errorElement:<div>404 not found </div>,
  }
])



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
    element:<TicketList />,
    errorElement:<div>404 not found </div>
  },
  {
    path :'/ticket_list/:id',
    element:<TicketDetail />,
    errorElement:<div>404 not found </div>
  },
  {
    path :'/drawedticket',
    element:<DrawedTicket/>,
    errorElement:<div>404 not found </div>
  },
  {
    path :'/winner',
    element:<WinnerList/>,
    errorElement:<div>404 not found </div>
  },
  {
    path :'/bannedticket',
    element:<BannedTicketList/>,
    errorElement:<div>404 not found </div>
  }
  
])

// const Router2 = createBrowserRouter([
//   {
//     path :'/',
//     element:<Signup />,
//     errorElement:<div>404 not found </div>,
//   },
// ])

// const router = createBrowserRouter([
//   {
//     path :'/signup',
//     element:<Signup />,
//     errorElement:<div>404 not found </div>,
//   },
//   {
//     path :'/',
//     element:<Home />,
//     errorElement:<div>404 not found </div>,
//   },
//   {
//     path :'/users',
//     element:<Users />,
//     errorElement:<div>404 not found </div>
//   },
//   {
//     path :'/admin',
//     element:<Users />,
//     errorElement:<div>404 not found </div>
//   },
//   {
//     path :'/seller',
//     element:<Seller />,
//     errorElement:<div>404 not found </div>
//   },
//   {
//     path :'/seller/:id',
//     element:<SelerDetail />,
//     errorElement:<div>404 not found </div>
//   },
//   {
//     path :'/ticket_list',
//     element:<TicketList />,
//     errorElement:<div>404 not found </div>
//   },
//   {
//     path :'/ticket_list/:id',
//     element:<TicketDetail />,
//     errorElement:<div>404 not found </div>
//   },
//   {
//     path :'/drawedticket',
//     element:<DrawedTicket/>,
//     errorElement:<div>404 not found </div>
//   },
//   {
//     path :'/winner',
//     element:<WinnerList/>,
//     errorElement:<div>404 not found </div>
//   },
//   {
//     path :'/bannedticket',
//     element:<BannedTicketList/>,
//     errorElement:<div>404 not found </div>
//   }
  
// ])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider  store={store}>  
        {isAutenticated?<RouterProvider router={router} />:<RouterProvider router={Router2} />}
    </Provider>
  </React.StrictMode>
);


