import { Link } from "react-router";
import ThemeToggle from "../../../features/theme/components/ThemeToggle";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <header className=" h-20 fixed w-full top-0">
      <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto mt-2 rounded-full">
        <div className="flex-none ">
          <Sidebar />
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-base-content">Folio .</a>
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
        <div>
          <Link to="/signin">
            <button className="btn btn-primary">Sign In</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
