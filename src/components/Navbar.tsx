'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products', 
      subLinks: [
        { name: 'Personal Loan', href: '/products/personal-loans' },
        { name: 'Log Book Loan', href: '/products/log-book-loans' },
        { name: 'Group Loan', href: '/products/group-loans' },
      ] 
    },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setIsProductsMenuOpen(false);
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  // Check if current route is active
  const isActive = (href: string) => pathname === href;
  
  // Check if products route is active
  const isProductsActive = () => pathname.startsWith('/products');

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <nav 
      className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white transform group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Marknic Credit
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div 
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <button
                      className={`relative font-medium group transition-colors duration-300 flex items-center ${
                        isProductsActive() 
                          ? 'text-blue-600' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsHovered ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span 
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-300 group-hover:w-full ${
                          isProductsActive() ? 'w-full' : ''
                        }`}
                      ></span>
                    </button>

                    {/* Products dropdown */}
                    {isProductsHovered && (
                      <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-gray-100 z-50 overflow-hidden">
                        <div className="py-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className={`block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors ${
                                isActive(subLink.href) ? 'bg-blue-50 text-blue-600' : ''
                              }`}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className={`relative font-medium group transition-colors duration-300 ${
                      isActive(link.href) 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-300 group-hover:w-full ${
                        isActive(link.href) ? 'w-full' : ''
                      }`}
                    ></span>
                  </Link>
                );
              }
            })}
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-red-600 p-1 rounded-full shadow-md">
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-blue-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
              </div>
            </div>
            <a 
              href="tel:+2540715046021" 
              className="ml-3 font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
             +254 (0) 715 04-6021
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-10 h-10 flex items-center justify-center relative">
              {mobileMenuOpen ? (
                <div className="relative w-6 h-6">
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 rounded-full transform rotate-45"></span>
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 rounded-full transform -rotate-45"></span>
                </div>
              ) : (
                <div className="flex flex-col space-y-1.5 w-6">
                  <span className="w-full h-0.5 bg-gray-800 rounded-full"></span>
                  <span className="w-full h-0.5 bg-gray-800 rounded-full"></span>
                  <span className="w-full h-0.5 bg-gray-800 rounded-full"></span>
                </div>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed full screen with animation */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
        style={{ 
          height: '100vh', 
          top: mobileMenuOpen ? '0' : '-100%',
          display: mobileMenuOpen ? 'block' : 'none'
        }}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Marknic Credit
              </span>
            </div>
            <button 
              onClick={closeMobileMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <div className="relative w-5 h-5">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 rounded-full transform rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 rounded-full transform -rotate-45"></span>
              </div>
            </button>
          </div>

          {/* Mobile menu links */}
          <div className="flex-grow px-6 py-8 flex flex-col space-y-6 overflow-y-auto">
            {navLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div key={link.name} className="w-full">
                    <button
                      onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                      className={`text-2xl font-semibold py-3 px-4 rounded-xl transition-all duration-300 w-full text-left flex justify-between items-center ${
                        isProductsActive() 
                          ? 'bg-gradient-to-r from-blue-50 to-red-50 text-blue-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        {link.name}
                        {isProductsActive() && (
                          <div className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 transition-transform duration-300 ${isProductsMenuOpen ? 'transform rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Sub links */}
                    {isProductsMenuOpen && (
                      <div className="pl-6 mt-2 space-y-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className={`block text-xl py-2 px-4 rounded-xl transition-all duration-300 ${
                              isActive(subLink.href) 
                                ? 'bg-gradient-to-r from-blue-50 to-red-50 text-blue-600' 
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                      isActive(link.href) 
                        ? 'bg-gradient-to-r from-blue-50 to-red-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-center">
                      {link.name}
                      {isActive(link.href) && (
                        <div className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  </Link>
                );
              }
            })}
          </div>
          
          {/* Phone number in mobile menu */}
          <div className="mt-auto mb-8 px-6">
            <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-blue-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-white/80 text-sm font-medium">Call us anytime</p>
                  <a 
                    href="tel:+2540715046021" 
                    className="text-xl font-bold text-white mt-1 block"
                  >
                    +254 (0) 715 04-6021
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;