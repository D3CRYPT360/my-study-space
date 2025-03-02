'use client';

import Image from 'next/image';
import { useMenu } from './context/menu-context';

export default function Home() {
  const { isOpen } = useMenu();

  return (
    <main className="min-h-screen">
      <div className={`relative mt-[75px] mx-auto max-w-full sm:max-w-[1400px] transition-all duration-300 ${isOpen ? 'lg:mt-[75px] mt-[400px]' : 'mt-[75px]'}`}>
        <Image 
          src="/banner.webp"
          alt="Banner"
          width={1400}
          height={550}
          priority
          className="object-cover rounded-[30px] w-full h-auto"
        />
      </div>
    </main>
  );
}
