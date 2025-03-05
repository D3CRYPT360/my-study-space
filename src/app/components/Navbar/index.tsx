"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { useMenu } from "@/app/context/menu-context";
import { useState, useEffect } from 'react';
import { buttonStyles } from '@/app/styles/button';

// Navigation link data
const navLinks = [
  { href: "/about-us", label: "About us" },
  { href: "/timetables", label: "Timetables" },
  { href: "/teachers", label: "Teachers" },
  { href: "/faqs", label: "FAQs" },
];

export const Navbar = () => {
  const { isOpen, setIsOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1400px]">
        <div 
          className={`h-[116px] rounded-[30px] transition-all duration-300 ${
            scrolled ? 'backdrop-blur-md bg-gradient-to-r from-[rgba(244,212,170,0.95)] via-[rgba(255,252,248,0.95)] to-[rgba(225,238,239,0.95)]' : 'bg-gradient-to-r from-[rgba(244,212,170,0.9)] via-[rgba(255,252,248,0.9)] to-[rgba(225,238,239,0.9)]'
          }`}
          style={{
            background: "linear-gradient(45deg, rgba(244, 212, 170, 0.9) 30%, rgba(255, 252, 248, 0.9) 90%, rgba(225, 238, 239, 0.9) 100%)",
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
                <span className="px-5 transition-transform duration-300 group-hover:scale-110">Register</span>
              </Link>
              <Link 
                href="/login" 
                className={`${buttonStyles.base} ${buttonStyles.secondary}`}
              >
                <span className="left-1/2 absolute inset-14 size-5 bg-[#F9633B] transform duration-500 ease-in-out group-hover:size-56 rounded-full -translate-1/2"></span>
                <span className="px-5 relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">Log in</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-20">
              {isOpen ? <X size={28} color="#351E1C" /> : <Menu size={28} color="#351E1C" />}
            </button>
          </div>
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
              <span className="absolute inset-0 w-full h-full bg-[#F9633B] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 "></span>
              <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">Log in</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
