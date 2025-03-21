import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FBEEDA] pt-27 pb-5 md:pt-40 md:pb-6 lg:pt-35 lg:pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center md:flex-col md:items-center xl:flex-row xl:items-start xl:justify-between gap-y-6">
        
        {/* Logo Section */}
        <div className="mb-6 md:mb-8 xl:mb-0">
          <Image
            src="/Logos_Logo 1 - Orange.svg"
            alt="My Study Space"
            width={400}
            height={80}
            className="h-auto w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] "
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-12 xl:gap-24 mt-0">
          {/* First Column */}
          <div className="flex flex-col  gap-2 text-center md:text-left">
            <Link href="/timetables" className="text-[#F9633B] font-semibold text-[18px]">
              Timetables
            </Link>
            <Link href="/teachers" className="text-[#F9633B] font-semibold text-[18px]">
              Teachers
            </Link>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-[#F9633B] font-semibold text-[18px]">Contact Us</p>
            <a href="tel:+9607572910" className="text-[#F9633B] text-[18px]">
              +960 7572910
            </a>
            <a href="mailto:info@mystudyspace.mv" className="text-[#F9633B] text-[18px]">
              info@mystudyspace.mv
            </a>
          </div>
        </div>

        {/* Social Buttons Section */}
        <div className="flex flex-col gap-3 mt-6 xl:mt-0">
          <a
            href="tel:7572910"
            className="relative group overflow-hidden h-[45px] w-[200px] flex items-center justify-center rounded-[15px] border border-[#F9633B] text-[#F9633B] hover:text-white transition-all duration-300 text-sm font-medium"
          >
            <span className="left-1/2 absolute inset-14 size-5 bg-[#F9633B] transform duration-450 ease-in-out group-hover:size-56 rounded-full -translate-1/2"></span>
            <span className="px-5 relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">
              Call Us
            </span>
          </a>
          <a
            href="https://t.me/mystudyspace_mv"
            className="relative group overflow-hidden h-[45px] w-[200px] flex items-center justify-center rounded-[15px] border border-[#F9633B] text-[#F9633B] hover:text-white transition-all duration-300 text-sm font-medium"
          >
            <span className="left-1/2 absolute inset-14 size-5 bg-[#F9633B] transform duration-450 ease-in-out group-hover:size-56 rounded-full -translate-1/2"></span>
            <span className="px-5 relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">
              Telegram
            </span>
          </a>
        </div>
      </div>

      {/* Connect with us Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <h3 className="text-center font-semibold text-[20px] leading-[26px] tracking-[0px] text-[#F9633B] opacity-100 font-['Poppins'] mb-6">Connect with us</h3>
        <div className="flex justify-center items-center gap-8">
          <a href="https://invite.viber.com/?g2=AQAGtJI5WdVC7lO7rKbD3pk6nY6tPhnDKqZz4MVMuO%2FOCaEHmvRviHzu%2FMHRBEMH" className="hover:opacity-80 transition-opacity">
            <Image
              src="/viber.svg"
              alt="Viber"
              width={24}
              height={24}
              className="w-7 h-7 md:w-10 md:h-10"
            />
          </a>
          <a href="https://t.me/mystudyspacemv" className="hover:opacity-80 transition-opacity">
            <Image
              src="/tel.svg"
              alt="Telegram"
              width={24}
              height={24}
              className="w-7 h-7 md:w-10 md:h-10"
            />
          </a>
          <a href="https://www.instagram.com/mystudyspacemv" className="hover:opacity-80 transition-opacity">
            <Image
              src="/insta.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="w-7 h-7 md:w-10 md:h-10"
            />
          </a>
          <a href="https://www.facebook.com/people/My-Study-Space-Tuition-Services/61573087430795/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/fb.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="w-7 h-7 md:w-10 md:h-10"
            />
          </a>
          <a href="https://www.tiktok.com/@mystudyspacemv" className="hover:opacity-80 transition-opacity">
            <Image
              src="/tiktok.svg"
              alt="TikTok"
              width={24}
              height={24}
              className="w-7 h-7 md:w-10 md:h-10"
            />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-25 pt-6 border-t border-[#F9633B]/10">
        <p className="text-center text-[#F9633B]/70 text-sm font-poppins">
        &copy; {new Date().getFullYear()} My Study Space. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
