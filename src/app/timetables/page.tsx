'use client';

import Image from 'next/image';
import { useMenu } from '../context/menu-context';
import { useState } from 'react';

export default function TimetablePage() {
  const { isOpen } = useMenu();
  const [selectedGrade, setSelectedGrade] = useState<'gr9' | 'gr10'>('gr9');

  return (
    <div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-[150px] md:mt-[200px] mb-10">
        <div className="bg-[#FFFCF8] rounded-[30px] p-4 sm:p-6">
          <h1 className="text-[30px] font-['Libre_Baskerville'] mb-4">Timetables</h1>
          
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedGrade('gr9')}
              className={`relative overflow-hidden group h-[45px] px-10 rounded-[15px] text-sm font-medium border-2 border-[#F9633B] ${
                selectedGrade === 'gr9'
                  ? 'bg-[#F9633B] text-white'
                  : 'bg-white text-[#F9633B] hover:text-white'
              }`}
            >
              <span className={`absolute inset-12 size-2 bg-[#F9633B] transform duration-500 ease-in-out group-hover:size-56 rounded-full left-1/2 -translate-1/2 ${
                selectedGrade === 'gr9' ? 'size-56' : ''
              }`}></span>
              <span className="relative z-10 transition-all duration-300 group-hover:scale-110">Grade 9</span>
            </button>
            <button
              onClick={() => setSelectedGrade('gr10')}
              className={`relative overflow-hidden group h-[45px] px-10 rounded-[15px] text-sm font-medium border-2 border-[#F9633B] ${
                selectedGrade === 'gr10'
                  ? 'bg-[#F9633B] text-white'
                  : 'bg-white text-[#F9633B] hover:text-white'
              }`}
            >
              <span className={`absolute inset-12 size-2 bg-[#F9633B] transform duration-500 ease-in-out group-hover:size-56 rounded-full left-1/2 -translate-1/2 ${
                selectedGrade === 'gr10' ? 'size-56' : ''
              }`}></span>
              <span className="relative z-10 transition-all duration-300 group-hover:scale-110">Grade 10</span>
            </button>
          </div>

          <div className="relative w-full h-auto mb-6">
            <Image
              src={`/${selectedGrade}_timetable.jpg`}
              alt={`${selectedGrade === 'gr9' ? 'Grade 9' : 'Grade 10'} Timetable`}
              width={800}
              height={533}
              className="rounded-lg w-full h-auto max-h-[500px] object-contain"
              priority
            />
          </div>

          <div>
            <a
              href="/timetable.pdf"
              download
              className="text-[#F9633B] font-medium text-lg flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              Download the Timetable
              <Image
                src="/down-arrow-svgrepo-com.svg"
                alt="Download"
                width={20}
                height={20}
                className="inline-block"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}