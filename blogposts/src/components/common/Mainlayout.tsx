import { Outlet } from "react-router-dom";
import NavBar from "../notcommon/Navbar";

const MainLayout=()=>{
    return(<>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>)
}

export default MainLayout;