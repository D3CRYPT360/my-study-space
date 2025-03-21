"use client";

import Image from "next/image";
import Link from "next/link";
import { useMenu } from "@/app/context/menu-context";
import { useState, useEffect } from 'react';
import { buttonStyles } from '@/app/styles/button';

// Navigation link data
const navLinks = [
  { href: "/timetables", label: "Timetables" },
  { href: "/teachers", label: "Teachers" },
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
    <nav className="fixed top-4 sm:top-6 left-0 right-0 z-[1000]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Mobile Menu - Behind navbar */}
            
          <div
            className={`lg:hidden fixed inset-x-4 sm:inset-x-6 lg:inset-x-8 top-0 transition-all duration-300 z-[5] ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-b-[30px] shadow-lg mt-[60px] md:mt-[80px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-stretch text-center pt-8 pb-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#351E1C] font-medium text-[16px] leading-[25px] py-5"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-5 mt-10">
                  <Link 
                    href="https://app.mystudyspace.mv/auth2CreateProfileUpdate" 
                    className={`${buttonStyles.base} ${buttonStyles.primary} h-[55px] flex items-center justify-center rounded-[15px]`} 
                  >
                    Register
                  </Link>
                  <Link 
                    href="https://app.mystudyspace.mv/auth2Login" 
                    className={`${buttonStyles.base} ${buttonStyles.secondary} h-[55px] flex items-center justify-center rounded-[15px]`}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navbar - Above menu */}
          <div 
            className={`relative z-[999] md:h-[90px] h-[70px] w-full rounded-[30px] transition-all duration-300 ${
              scrolled ? 'backdrop-blur-md bg-gradient-to-r from-[rgba(244,212,170,0.95)] via-[rgba(255,252,248,0.95)] to-[rgba(225,238,239,0.95)]' : 'bg-gradient-to-r from-[rgba(244,212,170,0.9)] via-[rgba(255,252,248,0.9)] to-[rgba(225,238,239,0.9)]'
            }`}
            style={{
              background: "linear-gradient(45deg, rgba(244, 212, 170, 0.9) 30%, rgba(255, 252, 248, 0.9) 90%, rgba(225, 238, 239, 0.9) 100%)",
              maxWidth: "100%",
              width: "100%"
            }}
          >
            <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
              {/* Logo */}
              <Link href="/" className="block">
                <Image 
                  src="/Logos_Logomark - Orange.svg" 
                  alt="My Study Space" 
                  width={40} 
                  height={40} 
                  priority 
                  className="md:hidden"
                />
                <Image 
                  src="/logo.webp" 
                  alt="My Study Space" 
                  width={200} 
                  height={40} 
                  priority 
                  className="hidden md:block"
                />
              </Link>

              {/* Mobile Register Button and Menu Button */}
              <div className="flex lg:hidden items-center gap-3">
                <Link 
                  href="https://app.mystudyspace.mv/auth2CreateProfileUpdate" 
                  className={`${buttonStyles.base} ${buttonStyles.primary} h-[38px] px-4 flex items-center justify-center rounded-[15px]`} 
                >
                  Register
                </Link>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="z-20 flex items-center justify-center relative w-[40pt] h-[40pt]"
                >
                  <div className="w-7 h-5 relative">
                    <span className={`absolute h-[3px] w-full rounded-[20px] bg-[#707070] transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'rotate-0 top-0'}`}></span>
                    <span className={`absolute h-[3px] w-full rounded-[20px] bg-[#707070] transform transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`absolute h-[3px] w-full rounded-[20px] bg-[#707070] transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'rotate-0 top-4'}`}></span>
                  </div>
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-[50px]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#351E1C] font-medium text-[16px] leading-[25px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Desktop Auth Buttons */}
              <div className="hidden lg:flex items-center gap-6">
                <Link 
                  href="https://app.mystudyspace.mv/auth2CreateProfileUpdate" 
                  className={`${buttonStyles.base} ${buttonStyles.primary} w-[128px] h-[40px] flex items-center justify-center rounded-[15px]`} 
                >
                  Register
                </Link>
                <Link 
                  href="https://app.mystudyspace.mv/auth2Login" 
                  className={`relative overflow-hidden group ${buttonStyles.base} ${buttonStyles.secondary} w-[128px] h-[40px] flex items-center justify-center rounded-[15px]`}
                >
                  <span className="absolute inset-12 size-2 bg-[#F9633B] transform duration-500 ease-in-out group-hover:size-56 rounded-full left-1/2 -translate-1/2"></span>
                  <span className="px-5 relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
