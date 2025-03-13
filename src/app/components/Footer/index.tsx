import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FBEEDA] px-6 pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-16 lg:pb-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        {/* Logo Section */}
        <div className="mb-6 lg:mb-0">
          <Image
            src="/Logos_Logo 1 - Orange.svg"
            alt="My Study Space"
            width={250}
            height={100}
            className="h-auto"
          />
        </div>
        
        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-32 lg:ml-16">
          <div className="flex flex-col gap-3 text-center lg:text-left">
            {/* <Link href="/about-us" className="text-[#F9633B] font-semibold text-[18px]">About Us</Link> */}
            <Link href="/timetables" className="text-[#F9633B] font-semibold text-[18px]">Timetables</Link>
            <Link href="/teachers" className="text-[#F9633B] font-semibold text-[18px]">Teachers</Link>
            {/* <Link href="/faqs" className="text-[#F9633B] font-semibold text-[18px]">FAQs</Link> */}
          </div>
          
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <Link href="" className="text-[#F9633B] font-semibold text-[18px]">Contact Us</Link>
            <a href="tel:+9607572910" className="text-[#F9633B] text-[18px]">+960 7572910</a>
            <a href="mailto:info@mystudyspace.mv" className="text-[#F9633B] text-[18px]">info@mystudyspace.mv</a>
          </div>
        </div>
        
        {/* Social Buttons Section */}
        <div className="flex flex-col gap-3 mt-6 lg:mt-0">
          <a 
            href="tel:7572910" 
            className="w-[120px] h-[40px] flex items-center justify-center rounded-[15px] border border-[#F9633B] text-[#F9633B] hover:bg-[#F9633B] hover:text-white transition-all duration-300 text-sm font-medium"
          >
            Call
          </a>
          <a 
            href="https://t.me/mystudyspace_mv" 
            className="w-[120px] h-[40px] flex items-center justify-center rounded-[15px] border border-[#F9633B] text-[#F9633B] hover:bg-[#F9633B] hover:text-white transition-all duration-300 text-sm font-medium"
          >
            Telegram
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-6xl mx-auto mt-8 lg:mt-12 pt-6 border-t border-[#F9633B]/10">
        <p className="text-center text-[#F9633B]/70 text-sm font-poppins">
        © {new Date().getFullYear()} My Study Space. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
