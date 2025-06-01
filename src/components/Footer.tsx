"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon,
  WifiIcon,
  HomeIcon,
  UserGroupIcon,
  LightBulbIcon,
  InformationCircleIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animation for footer elements
    const animateFooterElements = () => {
      const elements = document.querySelectorAll(".footer-element");
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 50) {
          el.classList.add("animate-fadeInUp");
        }
      });
    };

    // Scroll to top visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      animateFooterElements();
    };

    window.addEventListener("scroll", handleScroll);
    animateFooterElements(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`bg-gray-900 text-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } relative overflow-hidden`}
    >
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-red-500 animate-pulse opacity-20"></div>
      <div className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-blue-500 animate-pulse opacity-20 delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500 animate-pulse opacity-30 delay-1000"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Info */}
          <div className="footer-element transition-all duration-700 transform translate-y-5 opacity-0">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="group inline-block">
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Marknic Credit Logo"
                    className="object-contain"
                    width={120}
                    height={120}
                    priority
                  />
                </div>
              </Link>
            </div>

            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Flexible loan solutions including logbook loans, personal loans,
              and group loans. Secure financing against your vehicle, get quick
              personal loans, or access group lending options.
            </p>
          </div>

          {/* Column 2: Connect With Us */}
          <div className="footer-element transition-all duration-700 transform translate-y-5 opacity-0 delay-100">
            <h3 className="text-lg font-bold mb-5 relative pb-2 flex items-center">
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2 text-blue-500" />
              Connect With Us
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                {
                  icon: <PhoneIcon className="h-5 w-5" />,
                  text: "+254 (0) 715 04-6021",
                },
                {
                  icon: <ChatBubbleLeftIcon className="h-5 w-5" />,
                  text: "Chat on WhatsApp",
                },
                {
                  icon: <EnvelopeIcon className="h-5 w-5" />,
                  text: "info@marknic.co.ke",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="mt-0.5 p-1.5 rounded-lg mr-3 group-hover:animate-pulse">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 cursor-pointer">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-red-600 p-1.5 rounded-lg">
                  <LightBulbIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">
                    24/7 Customer Support
                  </p>
                  <p className="text-xs text-gray-400">
                    We're always ready to assist you
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Access */}
          <div className="footer-element transition-all duration-700 transform translate-y-5 opacity-0 delay-200">
            <h3 className="text-lg font-bold mb-5 relative pb-2 flex items-center">
              <ArrowRightIcon className="h-5 w-5 mr-2 text-red-500" />
              Quick Access
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Home",
                  icon: <HomeIcon className="h-4 w-4 mr-2" />,
                  href: "/",
                },
                {
                  name: "About Us",
                  icon: <InformationCircleIcon className="h-4 w-4 mr-2" />,
                  href: "/about",
                },
                {
                  name: "Services",
                  icon: <LightBulbIcon className="h-4 w-4 mr-2" />,
                  href: "/services",
                },
                {
                  name: "How It Works",
                  icon: <ArrowRightIcon className="h-4 w-4 mr-2" />,
                  href: "/process",
                },
                {
                  name: "Contact Us",
                  icon: <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />,
                  href: "/contact",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center group text-gray-300 hover:text-white transition-colors duration-300 py-1.5"
                  >
                    {item.icon}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="footer-element transition-all duration-700 transform translate-y-5 opacity-0 delay-300">
            <h3 className="text-lg font-bold mb-5 relative pb-2 flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-400" />
              Stay Updated
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
            </h3>
            <p className="text-gray-300 mb-5 text-sm">
              Subscribe to our newsletter for loan tips, rate updates, and
              special offers.
            </p>
            <div className="mb-5 relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 placeholder-gray-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-lg hover:from-blue-500 hover:to-red-500 transition-all duration-300 shadow-md">
                <ArrowRightIcon className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4">
              <h4 className="font-medium flex items-center mb-2">
                <InformationCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                Loan Eligibility
              </h4>
              <p className="text-xs text-gray-300">
                Requirements: Valid ID, Proof of income, Logbook (for logbook
                loans), Bank statements from last 3 months.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-5">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Marknic Credits Ltd. All rights reserved. Regulated by
            Central Bank of Kenya.
          </p>
          <div className="flex items-center">
            <p className="text-gray-400 text-sm mr-2">Built by</p>
            <a
              href="https://willsoft.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent hover:underline"
            >
              willsoft.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-red-600 p-3 rounded-full shadow-lg z-50 hover:scale-105 transition-transform duration-300 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-5 w-5 text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
