import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import { Menu, X } from "lucide-react";
const Nav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNav = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    // /80 means the opacity 80%
    // border-b means border bottom 1px
    <nav className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80">
      {/* setting mx-auto to make it to be centered horizontally within its
    parent container(in this case, the parent container is the nav) */}
      <div className="container px-4 mx-auto relative text-sm">
        {/* justify-content: center 
      align-items: center */}
        <div className="flex justify-between items-center">
          {/* setting flex-shrink to 0 means to prevent the element from shrinking,
        it means that regardless of the available spacein the flex container,
        the element with this class will maintain its original size */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            {/* tracking-tight means to reduce spaces between characters */}
            <span className="text-xl tracking-tighter">Viturelr</span>
          </div>
          {/* ml-14 means to apply a margin left of 56px, this pushes the element to the right of 56px
          in this case, it means to the right of the div above(the logo and the name) */}
          {/* space-x-12 means to apply a horizontal spacing between child elements  */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            {/* bg-gradient-to-r from-orange-500 to-orange-800 means to set a bg color of 
            orange-500 to orange-800 to the right */}
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 
              py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          {/* flex-col: arrange flex items in a column */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNav}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed space-y-6 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href=""
                className="py-2 px-3 bg-gradient-to-r
               bg-orange-500 to-orange-800 rounded-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
