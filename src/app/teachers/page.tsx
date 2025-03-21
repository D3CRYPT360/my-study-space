'use client';

import Teachers from '../components/Teachers';
import { useMenu } from '../context/menu-context';

export default function TeachersPage() {
  const { isOpen } = useMenu();

  return (
    <main className="min-h-screen">
      <div className={`relative transition-all duration-300 ${
        isOpen 
          ? 'mt-[400px]' 
          : 'mt-[130px] md:mt-[150pt]'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFCF8] rounded-[30px]">
            <div className="py-16">
              <Teachers />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}