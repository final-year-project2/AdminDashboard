import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddCardIcon from '@mui/icons-material/AddCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
function SideBar() {
    const [ActiveLink,setActiveLink] = useState('/')
  return (
    <div className="min-h-screen px-4 border-r-gray-300 border-2">
        <div className="border-r-slate-950">
            <div className="h-14 flex items-center justify-center text-2xl font-bold text-blue-500">
                Admin Dashboard
            </div>
        <hr />
        <br />
        <div>
            <p className="text-gray-400" >Home</p>
                <NavLink to={''}>
                    <div  className={`${ActiveLink == '/' ? "ActiveLink":'navLink'}`} onClick={()=>setActiveLink('/')}>
                        <DashboardIcon/>
                        <span >DashBoard</span>
                    </div>
                </NavLink>
        </div>
        <br />
        <div>
            <p className="text-gray-400">Personal Information</p>
            
                <NavLink to={''}>
                    <div  className={`${ActiveLink == '/admin' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/admin')}>
                        <AdminPanelSettingsIcon/>
                        <span>Admin</span>
                    </div>
                </NavLink>
            
           
                <NavLink to={''}>
                    <div  className={`${ActiveLink == '/user' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/user')}>
                        <PersonIcon/>
                        <span >users</span>
                    </div>
                </NavLink>
           
                <NavLink to={''}>
                    <div  className={`${ActiveLink == '/seller' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/seller')}>
                        <StorefrontIcon/>
                        <span>Sellers</span>
                    </div>
                </NavLink>
        </div>
        <br />
        <div>
            <p className="text-gray-400">Ticket Information</p>
            
                <NavLink to={''}>
                    <div  className={`${ActiveLink == '/ticketlist' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/ticketlist')}>
                        <AddCardIcon/>
                        <span>Tickets List</span>
                    </div>
                </NavLink>
            
            
                <NavLink to={''}>
                    <div  className={`${ActiveLink == '/purchasedticket' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/purchasedticket')}>
                        <ShoppingCartIcon/>
                        <span>Purchased Ticket</span>
                    </div>
                </NavLink>
            
                <NavLink to={''}>
                    <div  className={`${ActiveLink == '/drawedticket' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/drawedticket')}>
                        <CheckCircleOutlineIcon/>
                        <span>Drawed Ticket</span>
                    </div>
                </NavLink>
            

            
                <NavLink to={''}>
                    <div  className={`${ActiveLink == '/winner' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/winner')}>
                        <EmojiEventsIcon/>
                        <span>Winner</span>
                    </div>
                </NavLink>
        </div>
        <br />
        <div>
            <p>Action</p>
            <NavLink to={''}>
                    <div  className={`${ActiveLink == '/logout' ? "ActiveLink":'navLink'}`}>
                        <LogoutIcon/>
                        <span>Logout</span>
                    </div>
                </NavLink>
        </div>
        </div>
    </div>
  );
}

export default SideBar;
