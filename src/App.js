import { NavLink, Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Homepage/Home";

function App() {

  const link = [1,2,3,4,5]
  return (
    <div className="text-red-500">

      <Home/>
    </div>
  );
}

export default App;
// lema dev
// <div className="flex  h-full">
// <div className="flex-5 bg-gray-500">
//   {link.map((link)=>
//   <NavLink to={`/${link}`} className={({isActive})=>{
//     return isActive ? "text-purple-500":''
//   }}>
//     <div className="gap-y-0">
//       <div>
//       link {link}
//       </div>
//     </div>
//   </NavLink>)
  
//   }
// </div>
// </div>