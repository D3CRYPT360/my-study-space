"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { useMenu } from "@/app/context/menu-context";

// Navigation link data
const navLinks = [
  { href: "/about-us", label: "About us" },
  { href: "/timetables", label: "Timetables" },
  { href: "/teachers", label: "Teachers" },
  { href: "/faqs", label: "FAQs" },
];

// Button styles
const buttonStyles = {
  base: "font-medium font-poppins text-base leading-[25px] w-32 h-10 rounded-[15px] flex items-center justify-center transition-opacity",
  primary: "bg-[#F9633B] border-2 border-[#F9633B] text-white hover:opacity-90 group",
  secondary: "border-2 border-[#F9633B] text-[#F9633B] relative overflow-hidden group",
};

export const Navbar = () => {
  const { isOpen, setIsOpen } = useMenu();

  return (
    <nav className="mt-6 mx-auto max-w-[1400px] px-6">
      <div
        className="relative h-[116px] rounded-[30px] bg-center bg-no-repeat bg-cover"
        style={{
          background: "linear-gradient(45deg, #F4D4AA 30%, #FFFCF8 90%, #E1EEEF 100%)",
        }}
      >
        <div className="flex justify-between items-center h-full px-6 lg:px-10">
          {/* Logo */}
          <div>
            <Image src="/logo.webp" alt="My Study Space" width={200} height={40} priority />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium font-poppins text-base leading-[25px] text-[#351E1C] transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buttons (Visible on Large Screens) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/register" className={`${buttonStyles.base} ${buttonStyles.primary}`}>
              <span className="transition-transform duration-300 group-hover:scale-110">Register</span>
            </Link>
            <Link 
              href="/login" 
              className={`${buttonStyles.base} ${buttonStyles.secondary}`}
            >
              <span className="absolute inset-0 w-full h-full bg-[#F9633B] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">Log in</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-20">
            {isOpen ? <X size={28} color="#351E1C" /> : <Menu size={28} color="#351E1C" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#E1EEEF] shadow-md lg:hidden flex flex-col items-center gap-6 py-6 rounded-b-[30px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium font-poppins text-lg text-[#351E1C] transition-opacity hover:opacity-80"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/register" className={`${buttonStyles.base} ${buttonStyles.primary} w-40`}>
              <span className="transition-transform duration-300 group-hover:scale-110">Register</span>
            </Link>
            <Link 
              href="/login" 
              className={`${buttonStyles.base} ${buttonStyles.secondary} w-40`}
            >
              <span className="absolute inset-0 w-full h-full bg-[#F9633B] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">Log in</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
