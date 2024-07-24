import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddCardIcon from '@mui/icons-material/AddCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
function SideBar() {
    const [ActiveLink,setActiveLink] = useState('')
    const navigate = useNavigate()
    const handleAactiveLink=(value)=>{
        setActiveLink('')
        setActiveLink(value)
    }

const Logout = ()=>{
    const data = { isAutenticated: false};
    const jsonString = JSON.stringify(data);
    localStorage.setItem("AutenticationData", jsonString);
    window.location.reload();
}

return (
    <div className="h-svh px-4 border-r-2 ">
        <div>
            <div className="h-14 flex items-center justify-center text-2xl font-bold text-blue-500">
                Admin Dashboard
            </div>
        <hr />
        <br />
        <div>
            <p className="text-gray-400">Home</p>
                <div>
                <Link to={'/'}>
                    <div  onClick={()=>handleAactiveLink('/home')}  className={`${ActiveLink == '/home' ? "ActiveLink":'navLink'}`}>
                        <DashboardIcon/>
                        <span >DashBoard</span>
                    </div>
                </Link>
                </div>
        </div>
        <br />
        <div>
            <p className="text-gray-400">Personal Information</p>
            
                {/* <div>
                    <Link to={'/admin'}   onClick={()=>setActiveLink('/admin')}>
                        <div  className={`${ActiveLink === '/admin' ? "ActiveLink":'navLink'}`}>
                            <AdminPanelSettingsIcon/>
                            <span>Admin</span>
                        </div>
                    </Link>
                </div> */}
            
                <div  onClick={()=>handleAactiveLink('user')}>
                <Link to={'/users'}>
                    <div className={`${ActiveLink == 'user' ? "ActiveLink":"navLink"}`}>
                        <PersonIcon/>
                        <span >users</span>
                    </div>
                </Link>
                </div>

                <Link to={'/seller'}>
                    <div   onClick={()=>handleAactiveLink('seller')}  className={`${ActiveLink == 'seller' ? "ActiveLink":'navLink'}`}>
                        <StorefrontIcon/>
                        <span>Sellers</span>
                    </div>
                </Link>
        </div>
        <br />
        <div>
            <p className="text-gray-400">Ticket Information</p>
            
                <Link to={'/ticket_list'}>
                    <div  className={`${ActiveLink === 'ticketlist' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('ticketlist')}>
                        <AddCardIcon/>
                        <span>Tickets List</span>
                    </div>
                </Link>
            
            
                {/* <Link to={''}>
                    <div  className={`${ActiveLink === '/purchasedticket' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/purchasedticket')}>
                        <ShoppingCartIcon/>
                        <span>Purchased Ticket</span>
                    </div>
                </Link> */}
            
                <Link to={'/drawedticket'}>
                    <div  className={`${ActiveLink === '/drawedticket' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/drawedticket')}>
                        <CheckCircleOutlineIcon/>
                        <span>Drawed Tickets</span>
                    </div>
                </Link>
                <Link to={'/bannedticket'}>
                    <div  className={`${ActiveLink === '/bannedticket' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/bannedticket')}>
                        <NotInterestedIcon/>
                        <span>Baned Tickets</span>
                    </div>
                </Link>
                

            
                <Link to={'/winner'}>
                    <div  className={`${ActiveLink === '/winner' ? "ActiveLink":'navLink'}`}  onClick={()=>setActiveLink('/winner')}>
                        <EmojiEventsIcon/>
                        <span>Winner</span>
                    </div>
                </Link>
        </div>
        <br />
        <div>
            <p>Action</p>
            
                    <div onClick={()=>Logout()}  className={`${ActiveLink === '/logout' ? "ActiveLink":'navLink'}`}>
                        <LogoutIcon/>
                        <span>Logout</span>
                    </div>
            
        </div>
        </div>
    </div>
);
}

export default SideBar;
