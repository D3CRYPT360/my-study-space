"use client";

import Image from "next/image";
import Link from "next/link";
import { useMenu } from "@/app/context/menu-context";
import { useState, useEffect } from 'react';
import { buttonStyles } from '@/app/styles/button';
import { LoginButton, RegisterButton } from '../common/AuthButtons';

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
    <nav className="fixed top-6 left-0 right-0 z-[1000]">
      <div className="mx-0 lg:mx-auto max-w-[1345px] relative">
        {/* Mobile Menu - Behind navbar */}
        <div
         className={`lg:hidden fixed inset-0 transition-all duration-300 z-[5] ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none' 
        }`}
      >
        <div className="mx-0 lg:mx-auto max-w-[1345px]">
          <div className="bg-white rounded-b-[30px] shadow-lg mt-[90px] md:mt-[116px]">
            <div className="flex flex-col items-center text-center py-8 pt-[80px] md:pt-[116px]">
              <Link href="/timetables" className="font-medium font-poppins text-[22px] text-[#351E1C] mb-4">
                Timetables
              </Link>
              <Link href="/teachers" className="font-medium font-poppins text-[22px] text-[#351E1C] mb-8">
                Teachers
              </Link>
              <Link 
                href="https://app.mystudyspace.mv/auth2CreateProfileUpdate"
                className={`${buttonStyles.base} ${buttonStyles.primary} w-[128pt] h-[40pt] flex items-center justify-center rounded-[15px] mb-4`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px]">Register</span>
              </Link>
              <Link 
                href="https://app.mystudyspace.mv/auth2Login"
                className="font-poppins text-[#F9633B] text-[15px] border border-[#F9633B] rounded-[15px] w-[128pt] h-[40pt] flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>


        {/* Navbar - Above menu */}
        <div 
          className={`relative z-[999] md:h-[116px] h-[70pt] w-full rounded-[30px] transition-all duration-300 ${
            scrolled ? 'backdrop-blur-md bg-gradient-to-r from-[rgba(244,212,170,0.95)] via-[rgba(255,252,248,0.95)] to-[rgba(225,238,239,0.95)]' : 'bg-gradient-to-r from-[rgba(244,212,170,0.9)] via-[rgba(255,252,248,0.9)] to-[rgba(225,238,239,0.9)]'
          }`}
          style={{
            background: "linear-gradient(45deg, rgba(244, 212, 170, 0.9) 30%, rgba(255, 252, 248, 0.9) 90%, rgba(225, 238, 239, 0.9) 100%)",
          }}
        >
          <div className="flex justify-between items-center h-full px-[30px] lg:px-10 max-w-[1400px] mx-auto">
            {/* Logo */}
            <div>
              <Image 
                src="/Logos_Logo 1 - Orange.png" 
                alt="My Study Space" 
                width={137.48} 
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

            {/* Mobile Auth Buttons and Menu */}
            <div className="flex lg:hidden items-center gap-4 ml-auto">
              <Link 
                href="https://app.mystudyspace.mv/auth2CreateProfileUpdate" 
                className={`${buttonStyles.base} ${buttonStyles.primary} w-[110px] h-[38px] md:w-[128pt] md:h-[40pt] flex items-center justify-center rounded-[15px]`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 text-center text-[15px] md:text-base">Register</span>
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-20 flex items-center justify-center relative w-[40pt] h-[40pt]">
                <div className="w-7 h-5 relative">
                  <span className={`absolute h-[3px] w-full rounded-[20px] bg-[#707070] transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'rotate-0 top-0'}`}></span>
                  <span className={`absolute h-[3px] w-full rounded-[20px] bg-[#707070] transform transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute h-[3px] w-full rounded-[20px] bg-[#707070] transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'rotate-0 top-4'}`}></span>
                </div>
              </button>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <RegisterButton />
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
