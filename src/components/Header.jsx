import React, { useState } from "react";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isFeaturesHovered, setFeaturesHovered] = useState(false);
  const [isCompanyHovered, setCompanyHovered] = useState(false);
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);

  return (
    <>
      <header className="flex px-6 py-7 lg:px-15 lg:py-6">
        {/* Logo */}
        <img src="/assets/images/logo.svg" alt="Logo" className="h-6" />

        {/* Desktop Nav */}
        <nav>
          <ul className="hidden md:flex items-center space-x-5 ms-15 text-sm text-gray-500 font-semibold">
            <li className="relative group hover:text-black"
                onMouseEnter={() => setFeaturesHovered(true)}
                onMouseLeave={() => setFeaturesHovered(false)}>
              <button className="flex items-center gap-2">
                Features
                {isFeaturesHovered ? (
                  <img src="/assets/images/icon-arrow-up.svg" alt="" />
                ) : (
                  <img src="/assets/images/icon-arrow-down.svg" alt="" />
                )}
              </button>
              <ol className="absolute hidden text-gray-500 group-hover:block bg-white shadow-md rounded-md mt-0 -ms-15 p-4 space-y-2 w-35 z-50 text-sm">
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-black">
                    <img src="/assets/images/icon-todo.svg" alt="" />
                    Todo List
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-black">
                    <img src="/assets/images/icon-calendar.svg" alt="" />
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-black">
                    <img src="/assets/images/icon-reminders.svg" alt="" />
                    Reminders
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-black">
                    <img src="/assets/images/icon-planning.svg" alt="" />
                    Planning
                  </a>
                </li>
              </ol>
            </li>

            <li className="relative group hover:text-black"
            onMouseEnter={() => setCompanyHovered(true)}
            onMouseLeave={() => setCompanyHovered(false)}
            >
              <button className="flex items-center gap-2">
                Company
                {isCompanyHovered ? (
                  <img src="/assets/images/icon-arrow-up.svg" alt="" />
                ) : (
                  <img src="/assets/images/icon-arrow-down.svg" alt="" />
                )}
              </button>
              <ol className="absolute hidden text-gray-500 group-hover:block bg-white shadow-md rounded-md mt-0 p-3 space-y-2 w-26 -ms-5 z-50 text-sm">
                <li><a href="#" className="hover:text-black">History</a></li>
                <li><a href="#" className="hover:text-black">Our Team</a></li>
                <li><a href="#" className="hover:text-black">Blog</a></li>
              </ol>
            </li>

            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
          </ul>
        </nav>

        {/* Buttons */}
        <section className="hidden md:flex items-center space-x-5 ms-auto text-sm font-semibold">
          <a href="#" className="text-gray-500 hover:text-black">Login</a>
          <button className="border-2 border-gray-500 hover:border-black text-gray-500 hover:text-black rounded-lg px-4 py-1">
            Register
          </button>
        </section>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ms-auto"
          onClick={() => setNavOpen(!isNavOpen)}
        >
          <img src="/assets/images/icon-menu.svg" alt="" />
        </button>
      </header>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-40">
        <section className="absolute md:hidden w-[250px] space-y-8 px-6 py-6 top-0 right-0 bg-white h-screen shadow-md font-semibold z-50">
          <button
            className="flex md:hidden ms-auto"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            <img src="/assets/images/icon-close-menu.svg" alt="" />
          </button>

          <nav>
            <ul className="block space-y-4 text-sm text-gray-500">
              <li>
                <button
                  className="flex items-center gap-4"
                  onClick={() => setFeaturesOpen(!isFeaturesOpen)}
                >
                  Features
                  {isFeaturesOpen ? <img src="/assets/images/icon-arrow-up.svg" alt="" /> : <img src="/assets/images/icon-arrow-down.svg" alt="" />}
                </button>
                {isFeaturesOpen && (
                  <ol className="mt-2 pl-4 space-y-2">
                    <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-todo.svg" alt="" />Todo List</a></li>
                    <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-calendar.svg" alt="" />Calendar</a></li>
                    <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-reminders.svg" alt="" />Reminders</a></li>
                    <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-planning.svg" alt="" />Planning</a></li>
                  </ol>
                )}
              </li>

              <li>
                <button
                  className="flex items-center gap-4"
                  onClick={() => setCompanyOpen(!isCompanyOpen)}
                >
                  Company
                  {isCompanyOpen ? <img src="/assets/images/icon-arrow-up.svg" alt="" /> : <img src="/assets/images/icon-arrow-down.svg" alt="" />}
                </button>
                {isCompanyOpen && (
                  <ol className="mt-2 pl-4 space-y-2">
                    <li><a href="#" className="hover:text-black">History</a></li>
                    <li><a href="#" className="hover:text-black">Our Team</a></li>
                    <li><a href="#" className="hover:text-black">Blog</a></li>
                  </ol>
                )}
              </li>

              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
            </ul>
          </nav>

          <section className="flex flex-col items-center space-y-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-black">Login</a>
            <button className="w-full border-2 border-gray-500 hover:border-black text-gray-500 hover:text-black rounded-lg py-1">
              Register
            </button>
          </section>
        </section>
        </div>
      )}
    </>
  );
}

export default Header;
