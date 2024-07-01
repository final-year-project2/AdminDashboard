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