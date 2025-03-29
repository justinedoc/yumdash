import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Logo from "../../ui/Logo";
import RoleSelector from "../../customer/_components/RoleSelector";
import { HiX } from "react-icons/hi";
import { Link } from "react-router";

type NavLink = {
  label?: string;
  href?: string;
  element?: React.ReactNode;
};

const navLinks: NavLink[] = [
  {
    label: "About us",
    href: "/about",
  },
  {
    element: <RoleSelector key="role-selector" />,
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on outclick
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-1/2 z-50 w-[95%] -translate-x-1/2 transform rounded-b-4xl bg-[#EFFFFB] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8 md:py-6">
        {/* Logo */}
        <Logo className="relative -z-10 w-28" />

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-black focus:outline-none"
          >
            {mobileMenuOpen ? (
              <HiX size={10} className="text-secondary z-20 h-10 w-7" />
            ) : (
              <svg
                className="h-10 w-13"
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 7.69553H11C11.2652 7.69553 11.5196 7.80088 11.7071 7.98842C11.8946 8.17596 12 8.43031 12 8.69553C12 8.96074 11.8946 9.2151 11.7071 9.40263C11.5196 9.59017 11.2652 9.69553 11 9.69553H6C5.73478 9.69553 5.48043 9.59017 5.29289 9.40263C5.10536 9.2151 5 8.96074 5 8.69553C5 8.43031 5.10536 8.17596 5.29289 7.98842C5.48043 7.80088 5.73478 7.69553 6 7.69553ZM13 15.6955H18C18.2652 15.6955 18.5196 15.8009 18.7071 15.9884C18.8946 16.176 19 16.4303 19 16.6955C19 16.9607 18.8946 17.2151 18.7071 17.4026C18.5196 17.5902 18.2652 17.6955 18 17.6955H13C12.7348 17.6955 12.4804 17.5902 12.2929 17.4026C12.1054 17.2151 12 16.9607 12 16.6955C12 16.4303 12.1054 16.176 12.2929 15.9884C12.4804 15.8009 12.7348 15.6955 13 15.6955ZM6 11.6955H18C18.2652 11.6955 18.5196 11.8009 18.7071 11.9884C18.8946 12.176 19 12.4303 19 12.6955C19 12.9607 18.8946 13.2151 18.7071 13.4026C18.5196 13.5902 18.2652 13.6955 18 13.6955H6C5.73478 13.6955 5.48043 13.5902 5.29289 13.4026C5.10536 13.2151 5 12.9607 5 12.6955C5 12.4303 5.10536 12.176 5.29289 11.9884C5.48043 11.8009 5.73478 11.6955 6 11.6955Z"
                  fill="#00674B"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu - Three Sections: Logo, Navigation, Auth Buttons */}
        <div className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.href ? (
                  <a
                    href={link.href}
                    className="text-black hover:text-gray-600"
                  >
                    {link.label}
                  </a>
                ) : (
                  link.element
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Auth buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link to={"/register"}>
            <Button className="text-primary rounded-full border border-amber-500 bg-transparent px-7 py-5 font-semibold shadow-none hover:text-white">
              Register
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button className="rounded-full border bg-amber-500 px-7 py-5 font-bold text-white shadow-none hover:text-white">
              Log in
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu – slides in from the right */}
      <div
        ref={mobileMenuRef}
        className={`texe-lg fixed top-0 right-0 -z-[2] h-fit w-3/4 transform rounded-2xl bg-[#F5E6BD] py-8 shadow-lg transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-4" : "translate-x-[30rem]"
        }`}
      >
        <ul className="flex flex-col items-start space-y-4 px-6 py-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.href ? (
                <a
                  href={link.href}
                  className="text-black hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                link.element
              )}
            </li>
          ))}
          <li className="w-full">
            <Link to={"/register"}>
              <Button className="text-primary w-full rounded-full bg-white px-7 py-5 font-semibold shadow-none hover:text-white">
                Register
              </Button>
            </Link>
          </li>
          <li className="w-full">
            <Link to={"/login"}>
              <Button className="w-full rounded-full border bg-amber-500 px-7 py-5 font-bold text-white shadow-none hover:text-white">
                Log in
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
