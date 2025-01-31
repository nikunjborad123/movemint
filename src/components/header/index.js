"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/images/logo.png";
import MenuIcon from "../icons/menu-icon";
import CloseIcon from "../icons/close-icon";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden", !isSidebarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[999] transition-colors duration-300 ${
          isScrolled ? "backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4 md:py-6 lg:py-6 xl:py-8">
          <Image
            src={Logo}
            alt="Movemint Logo"
            width={285}
            height={40}
            className="w-36 lg:w-48 xl:w-72"
          />
          <nav className="hidden md:block space-x-7 lg:space-x-16 xl:space-x-32 text-white">
            <Link href="/" className=" transition-colors">Home</Link>
            <Link href="/about" className=" transition-colors">About</Link>
            <Link href="/contact" className=" transition-colors">Contact Us</Link>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Link href="/signup">
              <span className="text-white border border-white px-3 lg:px-5 xl:px-7 py-2 lg:py-3 rounded-md hover:bg-white hover:text-black text-md lg:text-lg transition-all">
                Sign up
              </span>
            </Link>
            <Link href="/login">
              <span className="text-white bg-gradient-primary px-3 lg:px-5 xl:px-7 py-2 lg:py-3 rounded-md hover:opacity-90 shadow-[0_4px_4px_0_#00000040] transition-all text-md lg:text-lg">
                Login
              </span>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed z-[9999] top-0 left-0 h-full w-64 bg-black text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex items-center justify-between">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={toggleSidebar}>
            <CloseIcon />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/">
            <span onClick={toggleSidebar}>Home</span>
          </Link>
          <Link href="/about">
            <span onClick={toggleSidebar}>About</span>
          </Link>
          <Link href="/contact">
            <span onClick={toggleSidebar}>Contact Us</span>
          </Link>
          <Link href="/signup">
            <span onClick={toggleSidebar}>Sign up</span>
          </Link>
          <Link href="/login">
            <span onClick={toggleSidebar}>Login</span>
          </Link>
        </nav>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Header;
