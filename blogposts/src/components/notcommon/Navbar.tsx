import { NavLink } from "react-router-dom";

const logo = require("../../assets/Blog.jpg");

const Navbar: any = () => {
    const linkClass : any = ({ isActive  } : { isActive: boolean }) => 
        isActive 
            ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" 
            : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

    return (
        <>
            <nav className="bg-slate-500 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-center">
                        <div>
                            <img className="h-10 w-auto mr-10" src={logo} alt="React Jobs" />  
                        </div>
                        <div className="flex space-x-3 mr-20">
                            <NavLink className={linkClass} to={"/"}>Home</NavLink>
                            <NavLink className={linkClass} to={"./createBlog"}>Add-Blog</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;