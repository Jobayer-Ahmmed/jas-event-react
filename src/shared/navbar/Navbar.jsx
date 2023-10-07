import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/images/jasevent.png"


const Navbar = () => {
    const navlinks = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
</>

  return (
    <div className="navbar bg-base-100 lg:px-xPadding my-8">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden  mr-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 text-xl">
            {navlinks}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <span className="btn btn-ghost normal-case text-4xl font-amita font-bold text-priColor -mr-4">jas event</span>
        <img src={logo} alt="" className="w-10"/> 
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-10 text-xl ">
        {navlinks}
      </ul>
    </div>
    <div className="navbar-end">
      <Link to="/register" className="px-6 py-2 text-xl text-white bg-priColor rounded">Register</Link>
    </div>
  </div>
  )
}

export default Navbar