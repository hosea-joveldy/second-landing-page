import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from "../assets/logo.png";
import burgerMenu from "../assets/hamburger-menu.svg";
import closeWindow from "../assets/close-window.png";

const Header = () => {
  const navArr = ["Home", "Features", "Pricing", "Contact"];

  const [openNavigation, setopenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
      enablePageScroll();
    } else {
      setopenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setopenNavigation(false);

    enablePageScroll();
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full bg-[#101319] text-white font-[Inter] px-2 py-6">
      <a className="block" href="#home">
        <img
          src={logo}
          className="w-[11.875rem] h-[2.5rem] object-cover"
          alt="Logo"
        />
      </a>

      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#0e0c15]/60 backdrop-blur-sm flex-col justify-center items-center gap-[0.5rem] text-1xl md:text-[13px] lg:text-sm text-[#d1dae8] md:static md:flex md:flex-row md:bg-transparent`}
      >
        {navArr.map((item) => (
          <a
            key={item.toLowerCase()}
            href={`#${item.toLowerCase()}`}
            onClick={handleClick}
            className={`px-6 lg:px-8 py-2 rounded-4xl hover:bg-gray-700 transition-colors duration-150 ${
              item === "Sign In" ? "block md:hidden" : ""
            }`}
          >
            {item}
          </a>
        ))}

          <a
            href="/login"
            onClick={handleClick}
            className={`block md:hidden px-6 lg:px-8 py-2 rounded-4xl hover:bg-gray-700 transition-colors duration-150
            }`}
          >
            Sign In
          </a>
      </nav>

      <a href="/login" className="hidden md:block mx-[1.5rem]">
        <button className="bg-white py-2 px-4 lg:px-6 rounded-4xl text-[13px] text-black font-semibold lg:text-sm hover:bg-[#cccccc] transition-colors duration-300">
          Create Account
        </button>
      </a>

      <button onClick={toggleNavigation} className="mr-5 block md:hidden">
        <img
          src={openNavigation ? closeWindow : burgerMenu}
          className="w-7 h-7"
          alt="Burger Menu"
          aria-label="Toggle navigation menu"
        />
      </button>
    </header>
  );
};

export default Header;
