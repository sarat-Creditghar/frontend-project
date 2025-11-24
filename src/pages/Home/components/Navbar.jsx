import { Link } from "react-router";
import ThemeToggle from "../../../features/theme/components/ThemeToggle";
import Sidebar from "./Sidebar";
import { useAuth } from "../../../features/auth/hooks/useAuth";
import ProfileDropdown from "../../../shared/components/ProfileDropdown";

const Navbar = () => {
  const { isAuthenticated } = useAuth();



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
            <ProfileDropdown />
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
