

const Sidebar = () => {
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          
          <label htmlFor="my-drawer-1" className=" drawer-button  btn bg-base-100 border-none shadow-none   text-base-content">
            <div
              tabIndex={0}
              role="button"
              className=" "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 min-h-full w-125 p-4 text-3xl items-center gap-y-5 pt-25 ">    
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
