import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { logout } from "../../features";
export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state.auth);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* <NavLink to="/" className="flex items-center"> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white tracking-wider">
          OtakuSurf
        </span>
        {/* </NavLink> */}

        <div className="flex md:order-2 gap-1 md:hidden">
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            // onClick={() => setExpanded((ex) => !ex)}
            className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-900 dark:text-white dark:hover:bg-purple-900 dark:focus:ring-purple-500"
            aria-controls="mobile-menu-3"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${"expanded" ? "" : "hidden"}
           justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-3"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 pr-4 pl-3 text-white-100 border-b border-gray-100  md:bg-transparent md:border-0  md:p-0 dark:text-gray-100 md:dark:text-green-400 dark:border-gray-100 bg-purple-900 font-bold"
                    : "text-lg block py-2 pr-4 pl-3 text-white-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-100 md:dark:hover:text-green-400 dark:hover:bg-purple-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100 font-medium"
                }
              >
                <FiHeart className="text-2xl" />
              </NavLink>
            </li>

            <li>
              <NavLink
                // to={`/profile/${user?.username}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 pr-4 pl-3 text-white-100 border-b border-gray-100  md:bg-transparent md:border-0  md:p-0 dark:text-gray-100 md:dark:text-green-400 dark:border-gray-100 bg-purple-900 font-bold"
                    : "text-lg block py-2 pr-4 pl-3 text-white-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-100 md:dark:hover:text-green-400 dark:hover:bg-purple-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100 font-medium"
                }
              >
                <AiOutlineShoppingCart className="text-2xl" />
              </NavLink>
            </li>
            <li>
              <NavLink
                // to={`/profile/${user?.username}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 pr-4 pl-3 text-white-100 border-b border-gray-100  md:bg-transparent md:border-0  md:p-0 dark:text-gray-100 md:dark:text-green-400 dark:border-gray-100 bg-purple-900 font-bold"
                    : "text-lg block py-2 pr-4 pl-3 text-white-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-100 md:dark:hover:text-green-400 dark:hover:bg-purple-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100 font-medium"
                }
              >
                <AiOutlineUserAdd className="text-2xl" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

{
  /* <div className="nav-container">
<input
  className="search-input"
  type="text"
  onChange={handleInputChange}
  value={query}
  placeholder="Enter your search shoes."
/>
</div>
<div className="profile-container">
<a href="#">
  <FiHeart className="nav-icons" />
</a>
<a href="">
  <AiOutlineShoppingCart className="nav-icons" />
</a>
<a href="">
  <AiOutlineUserAdd className="nav-icons" />
</a>
</div> */
}
