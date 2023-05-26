import { Link } from "react-router-dom";

function NavBar() {
  const navItems = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li tabIndex={0}>
        <a className="justify-between">
          Contact us
          
        </a>
        
      </li>
      <li>
        <a>dashboard</a>
      </li>
      <li>
        <Link to={'/ourmanu'}>Our menu</Link>
      </li>
      <li>
        <a>Our Shop</a>
      </li>
    </>
  );

  return (
    <nav className="navbar text-white w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact uppercase font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bristo </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold uppercase px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div>
    </nav>
  );
}

export default NavBar;
