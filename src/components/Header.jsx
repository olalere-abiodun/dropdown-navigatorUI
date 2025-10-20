import React, { useState } from "react";

function Header(){
    const [isNavOpen, SetNavOpen] = useState(false)

    return  (   
    <>
    <header className="flex px-15 py-6">
  {/* Logo */}
  <img src="/assets/images/logo.svg" alt="Logo" className="h-6" />

  {/* Nav Menu */}
  <nav>
    {/* desktop  */}
    <ul className="hidden md:flex items-center space-x-5 ms-15 text-sm text-gray-500 font-semibold ">
      <li className="relative group hover:text-black">
        <button className="flex items-center gap-2">
          Features <img src="/assets/images/icon-arrow-down.svg" alt="" />
        </button>
        <ol className="absolute hidden text-gray-500 group-hover:block bg-white shadow-md rounded-md mt-0 -ms-15 p-4 space-y-2 w-35 z-50 text-sm">
          <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-todo.svg" alt="" />Todo List</a></li>
          <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-calendar.svg" alt="" />Calendar</a></li>
          <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-reminders.svg" alt="" />Reminders</a></li>
          <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-planning.svg" alt="" />Planning</a></li>
        </ol>
      </li>

      <li className="relative group hover:text-black">
        <button className="flex items-center gap-2">
          Company <img src="/assets/images/icon-arrow-down.svg" alt="" />
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
    <button className="border-2 border-gray-500 hover:border-black text-gray-500 hover:text-black rounded-lg px-4 py-1 ">
      Register
    </button>
  </section>
    <button className="md:hidden ms-auto"
    onClick={()=> SetNavOpen(!isNavOpen)}
    >
    <img src="/assets/images/icon-menu.svg" alt="" />
  </button>

</header>
    {/* Mobile  */}
{isNavOpen && (
    <section className="absolute md:hidden w-[250px] space-y-8 px-6 py-6 me-0 top-0 right-0 bg-white h-screen shadow-md block justify-end items-start font-semibold">
      <button className="flex md:hidden ms-auto"
      onClick={()=> SetNavOpen(!isNavOpen)}>
    <img src="/assets/images/icon-close-menu.svg" alt="" />
  </button>
    <nav>
    <ul className="block items-center space-y-4 text-sm text-gray-500">
      <li className="relative group hover:text-black">
        <button className="flex items-center gap-4">
          Features <img src="/assets/images/icon-arrow-down.svg" alt="" />
        </button>
        <ol className="hidden text-gray-500 group-hover:block  mt-0 -ms-15 p-4 space-y-2 w-35 z-50 text-sm">
          <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-todo.svg" alt="" />Todo List</a></li>
          <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-calendar.svg" alt="" />Calendar</a></li>
          <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-reminders.svg" alt="" />Reminders</a></li>
          <li><a href="#" className="flex items-center gap-3 hover:text-black"><img src="/assets/images/icon-planning.svg" alt="" />Planning</a></li>
        </ol>
      </li>

      <li className="relative group hover:text-black">
        <button className="flex items-center gap-3">
          Company <img src="/assets/images/icon-arrow-down.svg" alt="" />
        </button>
        <ol className="absolute hidden text-gray-500 group-hover:block bg-white shadow-md rounded-md mt-0 p-3 space-y-2 w-24 z-50 text-sm">
          <li><a href="#" className="hover:text-black">History</a></li>
          <li><a href="#" className="hover:text-black">Our Team</a></li>
          <li><a href="#" className="hover:text-black">Blog</a></li>
        </ol>
      </li>

      <li><a href="#" className="hover:text-black">Careers</a></li>
      <li><a href="#" className="hover:text-black">About</a></li>
    </ul>
  </nav>
  <section className="flex flex-col items-center justify-center space-y-4 text-sm">
    <a href="#" className="text-gray-500 hover:text-black">Login</a>
    <button className="flex w-[100%] justify-center border-2 border-gray-500 hover:border-black text-gray-500 hover:text-black rounded-lg  py-1 ">
      Register
    </button>
  </section>
</section>
)}

    </>
    )
    
}

export default Header