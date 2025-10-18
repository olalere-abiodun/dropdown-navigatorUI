import React from "react";

function Nav() {
    return (
        <>
           
        </>
    )
}
export default Nav
// import React, { useState } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-blue-600">
//           MyLogo
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           <li><a href="#" className="hover:text-blue-600">Home</a></li>
//           <li><a href="#" className="hover:text-blue-600">About</a></li>
//           <li><a href="#" className="hover:text-blue-600">Services</a></li>
//           <li><a href="#" className="hover:text-blue-600">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white shadow-md space-y-3 px-6 py-4 text-gray-700 font-medium">
//           <li><a href="#" className="block hover:text-blue-600">Home</a></li>
//           <li><a href="#" className="block hover:text-blue-600">About</a></li>
//           <li><a href="#" className="block hover:text-blue-600">Services</a></li>
//           <li><a href="#" className="block hover:text-blue-600">Contact</a></li>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
