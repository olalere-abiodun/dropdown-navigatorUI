import React from "react";

function Header(){
    return  (   
    <>
    <header className="flex items-center px-8 py-4">
  {/* Logo */}
  <img src="/assets/images/logo.svg" alt="Logo" className="h-6" />

  {/* Nav Menu */}
  <nav>
    <ul className="flex items-center space-x-8 ms-15 text-sm">
      <li className="relative group">
        <button className="flex items-center gap-2">
          Features <img src="/assets/images/icon-arrow-down.svg" alt="" />
        </button>
        <ol className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-3 -ms-15 p-4 space-y-2 w-35 z-50 text-sm">
          <li><a href="#" className="flex items-center gap-3"><img src="/assets/images/icon-todo.svg" alt="" />Todo List</a></li>
          <li><a href="#" className="flex items-center gap-3"><img src="/assets/images/icon-calendar.svg" alt="" />Calendar</a></li>
          <li><a href="#" className="flex items-center gap-3"><img src="/assets/images/icon-reminders.svg" alt="" />Reminders</a></li>
          <li><a href="#" className="flex items-center gap-3"><img src="/assets/images/icon-planning.svg" alt="" />Planning</a></li>
        </ol>
      </li>

      <li className="relative group">
        <button className="flex items-center gap-2">
          Company <img src="/assets/images/icon-arrow-down.svg" alt="" />
        </button>
        <ol className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 p-3 space-y-2 z-50 text-sm">
          <li><a href="#">History</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Blog</a></li>
        </ol>
      </li>

      <li><a href="#">Careers</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>

  {/* Buttons */}
  <section className="flex items-center space-x-4 ms-auto text-sm">
    <a href="#" className="text-gray-700 hover:text-black">Login</a>
    <button className="border border-gray-500 rounded-lg px-4 py-1 hover:bg-gray-100">
      Register
    </button>
  </section>
</header>

    </>
    )
    
}

export default Header