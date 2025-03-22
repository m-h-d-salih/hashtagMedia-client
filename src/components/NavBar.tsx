import React, { useState } from 'react';
import { Search, User, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import logo from '../assets/usStorelogo.png';

const Navbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/sale", label: "Sale" },
    { path: "/about-us", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/contact-us", label: "Contact Us" }
  ];

  // Shop categories
  const shopCategories = [
    { path: "/category1", label: "Category 1" },
    { path: "/category2", label: "Category 2" },
    { path: "/category3", label: "Category 3" }
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-gray-100 text-black text-center py-1 text-sm font-medium">
        Summer Sale Discount Off 50%! <span className="font-bold">SHOP NOW</span>
      </div>
      
      <nav className="bg-white shadow-sm py-[1px] w-full relative z-50">
        <div className="container mx-auto flex items-center justify-around px-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="USStores" className="w-26 h-26" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              link.label === "Shop" ? (
                <div 
                  key={index}
                  className="relative" 
                  onMouseEnter={() => setIsShopDropdownOpen(true)} 
                  onMouseLeave={() => setIsShopDropdownOpen(false)}
                >
                  <button 
                    className="text-black text-base font-medium flex items-center group"
                  >
                    <span className="relative inline-block">
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </span>
                    {/* Custom SVG for dark triangular arrow */}
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5 7l5 5 5-5H5z" />
                    </svg>
                  </button>

                  {isShopDropdownOpen && (
                    <div 
                      className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1"
                    >
                      {shopCategories.map((category, index) => (
                        <a 
                          key={index}
                          href={category.path} 
                          className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-800 relative group"
                        >
                          <span className="relative inline-block">
                            {category.label}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a 
                  key={index}
                  href={link.path}
                  className="text-black text-base font-medium hover:text-blue-800 group"
                >
                  <span className="relative inline-block">
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </span>
                </a>
              )
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="group">
              <Search size={20} className="group-hover:text-blue-800 transition-colors duration-300" />
            </button>
            <button className="group">
              <User size={20} className="group-hover:text-blue-800 transition-colors duration-300" />
            </button>
            <button className="relative group">
              <ShoppingCart size={20} className="group-hover:text-blue-800 transition-colors duration-300" />
              <span className="absolute -top-1 -right-1 bg-blue-800 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="relative group">
              <Heart size={20} className="group-hover:text-blue-800 transition-colors duration-300" />
              <span className="absolute -top-1 -right-1 bg-blue-800 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden group"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="group-hover:text-blue-800 transition-colors duration-300" />
              ) : (
                <Menu size={20} className="group-hover:text-blue-800 transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 border-t border-gray-100">
            <div className="py-1 px-4">
              {navLinks.map((link, index) => (
                link.label === "Shop" ? (
                  <div key={index} className="py-2 border-b border-gray-100">
                    <button
                      onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                      className="flex items-center justify-between w-full text-black text-base font-medium group"
                    >
                      <span className="relative inline-block">
                        {link.label}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                      </span>
                      {/* Custom SVG for dark triangular arrow */}
                      <svg
                        className={`w-5 h-5 transition-transform ${isMobileShopOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 7l5 5 5-5H5z" />
                      </svg>
                    </button>

                    {isMobileShopOpen && (
                      <div className="mt-1 pl-4 border-l-2 border-blue-100">
                        {shopCategories.map((category, index) => (
                          <a 
                            key={index}
                            href={category.path} 
                            className="block py-2 text-black hover:text-blue-800 group"
                          >
                            <span className="relative inline-block">
                              {category.label}
                              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    key={index}
                    href={link.path} 
                    className="block py-2 text-black text-base font-medium border-b border-gray-100 hover:text-blue-800 group"
                  >
                    <span className="relative inline-block">
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </span>
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;