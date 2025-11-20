import { Link, useNavigate } from "react-router";
import ThemeToggle from "../../../features/theme/components/ThemeToggle";
import Sidebar from "./Sidebar";
import { useAuth } from "../../../features/auth/hooks/useAuth";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <header className=" h-20 fixed w-full top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto mt-2 rounded-full">
        <div className="flex-none ">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-base-content">
            Folio .
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ThemeToggle />
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="img"
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/dashboard" className="justify-between">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">
              <button className="btn btn-primary">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
