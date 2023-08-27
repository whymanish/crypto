import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto lg:mt-0 md:mt-6 h-8 lg:h-8"
                src="crypto.png"
                alt=""
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            {/* Menu open: "hidden", Menu closed: "block" */}
            <svg
              className={`block w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>

            {/* Menu open: "block", Menu closed: "hidden" */}
            <svg
              className={`hidden w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
            <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Spot</a>
            <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Perpetual</a>
            <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Futures</a>
          </div>

          <a
            href="http://munity.quantafile.com"
            title=""
            className="items-center justify-center hidden px-4 py-2 ml-10 text-base font-semibold text-white transition-all duration-200 bg-indigo-500 border border-transparent rounded-md lg:inline-flex hover:bg-gray-800 focus:bg-blue-700"
            role="button"
          >
            Download App
          </a>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a>
              <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Contact</a>
              <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pricing</a>
            </div>
          </div>

          <div className="px-6 mt-6">
            <a
              href="#"
              title=""
              className="inline-flex justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md items-center hover:bg-gray-800 focus:bg-blue-700"
              role="button"
            >
              Login
            </a>
          </div>

          {/* Close button */}
          <button
            type="button"
            className={`fixed top-4 right-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            onClick={closeMobileMenu}
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
