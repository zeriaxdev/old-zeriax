import logo from "../logo.svg";
import "../App.css";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = () => {
  const [isHidden, setHidden] = useState(false);
  const toggle = () => {
    setHidden(!isHidden);
    console.log(isHidden);
    return isHidden;
  };
  return (
    <header className="sticky top-0 z-20 bg-zinc-900 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <p className="h-6">
              <BsPersonCircle className="w-6 h-6" />
            </p>
            <h1 className="ml-3 font-semibold text-xl">zeriax</h1>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button
                className="flex items-center focus:outline-none"
                aria-label="Toggle menu"
                onClick={toggle}
              >
                <BsPersonCircle className="w-6 h-6" />
                <span className="ml-2">Profile</span>
              </button>
              <div className={`menu ${isHidden ? "block" : "hidden"}`}>
                <div className="absolute mt-2 right-0">
                  <ul
                    className="
                  z-10 bg-white bg-opacity-50
                  shadow-lg rounded-lg items-center
                  dark:bg-zinc-800 dark:text-slate-50
                  "
                  >
                    <li className="w-36 pt-2">
                      <a
                        href="https://twitter.com/theZeriax"
                        className="block px-4 py-2
                        bg-gray-100 bg-opacity-50
                        text-sm text-gray-700 hover:bg-gray-200
                        dark:bg-zinc-800
                        dark:text-gray-200 dark:hover:bg-zinc-700
                        "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="w-6 h-6" />
                        <span className="ml-2">Twitter</span>
                      </a>
                    </li>
                    <li className="w-36 pb-2">
                      <a
                        href="https://github.com/theZeriax"
                        className="block px-4 py-2
                        bg-gray-100 bg-opacity-50
                        text-sm text-gray-700 hover:bg-gray-200
                        dark:bg-zinc-800
                        dark:text-gray-200 dark:hover:bg-zinc-700
                        "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-6 h-6" />
                        <span className="ml-2">Github</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
