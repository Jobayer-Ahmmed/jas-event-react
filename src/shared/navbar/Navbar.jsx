import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/images/jasevent.png"



const Navbar = () => {

  return (
    <div className="navbar bg-base-100 lg:px-xPadding my-8">
    <div className="navbar-start flex justify-between lg:justify-start w-full">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden  mr-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 text-xl">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><Link to="/login" className="px-6 py-2 text-xl text-white bg-priColor rounded">Login</Link></li>
          <li><Link to="/register" className="px-6 py-2 text-xl text-white bg-priColor rounded">Register</Link></li>
        </ul>
      </div>
      <div className="flex justify-center">
        <span className="text-4xl font-amita font-bold text-priColor">jas event</span>
        <img src={logo} alt="" className="w-10"/> 
      </div>
    </div>
    <div className="navbar-center hidden lg:flex mr-20">
      <ul className="menu menu-horizontal px-1 gap-10 text-xl ">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
    {/* for desktop */}
    <div className="navbar-end hidden lg:block">
        <Link to="/login" className="px-6 py-2 text-xl text-white bg-priColor rounded mr-6">Login</Link>
        <Link to="/register" className="px-6 py-2 text-xl text-white bg-priColor rounded">Register</Link>

      <div>
      </div>
    </div>

  </div>
  )
}

export default Navbar