import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  ExternalLinkIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { FaTwitter, FaGithub, FaInternetExplorer } from "react-icons/fa";

import { GoLinkExternal } from "react-icons/go";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Do something", href: "#", icon: PlayIcon },
  { name: "Blah Blah", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "GitHub",
    out: true,
    description: "Check out my projects on GitHub!",
    href: "https://github.com/theZeriax/",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    out: true,
    description: "Connect with me on Twitter!",
    href: "https://twitter.com/theZeriax",
    icon: FaTwitter,
  },
  {
    name: "Dark/Light Mode",
    out: false,
    description:
      "Switch between dark and light mode to customize your experience.",
    href: "#",
    icon: window.localStorage.getItem("theme") === "dark" ? MoonIcon : SunIcon,
  },
  {
    name: "Security",
    out: false,
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative bg-zinc-100 dark:bg-zinc-900 shadow-zinc-300/75 dark:shadow-zinc-900/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
        flex justify-between items-center
        py-6 md:justify-start md:space-x-10
        "
        >
          <div className="flex justify-start lg:w-0 lg:flex-1 cursor-progress">
            <a
              onClick={undefined}
              href="https://github.com/theZeriax"
              className="cursor-progress"
            >
              <span className="sr-only">Workflow</span>
              <FaInternetExplorer
                href="https://github.com/theZeriax"
                className={`
              h-10 w-auto text-indigo-600 dark:text-white
              animate-3d-rotate
              `}
              />
            </a>
            <a
              href="https://github.com/theZeriax"
              onClick={undefined}
              className="
            -ml-px relative block px-3 py-2.5 rounded-md text-base font-medium
            text-gray-900 dark:text-gray-100
            hover:text-gray-900 dark:hover:text-gray-100
            focus:outline-none focus:text-gray-900 dark:focus:text-gray-100
            "
            >
              theZeriax
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button
              className="
            bg-gray-100 rounded-md p-2 inline-flex items-center
            justify-center text-gray-400 hover:text-gray-500
            hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
            dark:text-gray-200 dark:bg-zinc-900 dark:hover:text-gray-100 dark:hover:bg-zinc-800
            "
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      `group rounded-md inline-flex items-center text-base font-medium 
                      hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      dark:text-gray-200 dark:bg-zinc-900 dark:hover:text-gray-400
                      `
                    )}
                  >
                    <span>What?</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      className="
                    absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md 
                    sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2
                    "
                    >
                      <div
                        className="
                      rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden
                      "
                      >
                        <div
                          className="
                        relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8
                        dark:bg-zinc-800
                        "
                        >
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              onClick={undefined}
                              href={item.href}
                              className="
                              -m-3 p-3 flex items-start rounded-lg  
                              hover:bg-gray-100
                              dark:hover:bg-zinc-700
                              "
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-slate-200"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                                  {item.name}{" "}
                                  {item.out === true ? (
                                    <span className="text-indigo-600">
                                      <GoLinkExternal />
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </p>
                                <p className="mt-1 text-sm text-gray-400">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div
                          className="
                        px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 
                        sm:space-x-10 sm:px-8 justify-center
                        dark:bg-zinc-800
                        "
                        >
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="
                                -m-3 p-3 flex items-center rounded-md text-base font-medium 
                                text-gray-900 dark:text-gray-200 hover:bg-gray-100
                                "
                                onClick={undefined}
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">
                                  {item.name}{" "}
                                  {item.out === true ? (
                                    <span className="text-indigo-600">
                                      <GoLinkExternal />
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a
              href="https://github.com/theZeriax"
              className="text-base font-medium text-gray-500 hover:text-gray-900 
              dark:text-gray-200 dark:bg-zinc-900 dark:hover:text-gray-400
              "
              onClick={undefined}
            >
              Docs
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      `group rounded-md inline-flex items-center text-base font-medium 
                      hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      dark:text-gray-200 dark:bg-zinc-900 dark:hover:text-gray-400
                      `
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 dark:bg-zinc-800">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              onClick={undefined}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-gray-200"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-gray-200">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                              <div
                                className={`
                              flex-shrink-0
                              ml-auto
                              mt-3
                              `}
                              >
                                {item.out === true ? (
                                  <span
                                    className="
                                  text-gray-700 dark:text-gray-200
                                  "
                                  >
                                    <ExternalLinkIcon className="h-4" />
                                  </span>
                                ) : (
                                  ""
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                        <div
                          className="
                        px-5 py-5 bg-gray-50 sm:px-8 sm:py-8 dark:bg-zinc-800
                        "
                        >
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                              Recent Posts
                            </h3>
                            <ul className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <a
                                    onClick={undefined}
                                    href={post.href}
                                    className="
                                    font-medium text-gray-900 hover:text-gray-700
                                    dark:text-gray-200 dark:hover:text-gray-400
                                    "
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              onClick={undefined}
                              href="https://github.com/theZeriax"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {" "}
                              View all posts{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              onClick={undefined}
              href="https://github.com/theZeriax"
              className="
              text-slate-500
              ml-8 whitespace-nowrap inline-flex items-center justify-center
              px-4 py-2 border border-transparent rounded-md shadow-lg shadow-slate-400/50
              font-medium bg-slate-200 transition duration-200 hover:bg-slate-300 hover:text-slate-600 text-base
              hover:shadow-slate-400 dark:hover:bg-slate-100 dark:hover:text-slate-500
              dark:hover:shadow-slate-500/50
              "
            >
              Click me!
            </a>
            <a
              href="https://github.com/theZeriax"
              onClick={undefined}
              className="
              ml-8 whitespace-nowrap inline-flex items-center justify-center
              px-4 py-2 border border-transparent rounded-md font-medium
              shadow-lg drop-shadow-lg text-white bg-gradient-to-r
              from-orange-400 via-pink-500 to-indigo-600 transition duration-200
              animate-gradient-xy hover:bg-indigo-700 text-base 
              hover:from-green-500 hover:to-indigo-700
              "
            >
              Click me instead!
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            className="
          rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50
          dark:bg-zinc-800 dark:divide-gray-700
          "
          >
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <FaInternetExplorer className="h-8 w-8 text-indigo-600 dark:text-gray-100" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className="
                    bg-white rounded-md p-2 inline-flex items-center justify-center 
                    text-gray-400 hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
                    dark:text-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700
                    dark:hover:text-gray-700 dark:focus:ring-2
                  "
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon
                      className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:text-gray-200"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={undefined}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-gray-200"
                        aria-hidden="true"
                      />
                      <span
                        className="
                      ml-3 text-base font-medium text-gray-900
                      dark:text-gray-200 dark:hover:text-gray-400
                      "
                      >
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  onClick={undefined}
                  href="https://github.com/theZeriax"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  Docs?
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    onClick={undefined}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  onClick={undefined}
                  href="https://github.com/theZeriax"
                  className="
                  w-full flex items-center justify-center px-4 py-2 border border-transparent 
                  rounded-md bg-indigo-600animate-gradient-xy
                  shadow-lg shadow-gray-400/50 dark:shadow-gray-900/50
                  font-medium text-white bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-600
                  animate-gradient-xy hover:bg-indigo-700 text-base hover:from-green-500 hover:to-indigo-700 transition-all
                  "
                >
                  Click me, yes!
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  What?{" "}
                  <a
                    onClick={undefined}
                    href="https://github.com/theZeriax"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    I'm some <b>text</b>!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
