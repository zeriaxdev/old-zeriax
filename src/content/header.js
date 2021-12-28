import logo from "../logo.svg";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    return isOpen;
  };
  return (
    <header className="sticky top-0 z-20 bg-slate-900">
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
              <div className="menu" hidden={toggle}>
                <div className="absolute mt-2 right-0 invisible">
                  <ul className="z-10 bg-white shadow-lg rounded-lg">
                    <li className="py-2">
                      <a
                        href="https://twitter.com/theZeriax"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="w-6 h-6" />
                        <span className="ml-2">Twitter</span>
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        href="https://github.com/theZeriax"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
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
