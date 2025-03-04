'use client';

import Image from 'next/image';
import { useMenu } from './context/menu-context';
import { useState } from 'react';
import timetableData from '@/data/timetable.json';

const grades = ['9', '10'] as const;
type Grade = typeof grades[number];

interface TimeSlot {
  day: string;
  time: string;
}

interface SubjectData {
  teacher: string;
  schedule: TimeSlot[];
}

interface GradeSubjects {
  Mathematics: SubjectData;
  Chemistry: SubjectData;
  Biology: SubjectData;
  Physics: SubjectData;
  English: SubjectData;
}

interface TimetableData {
  grades: {
    [key in Grade]: GradeSubjects;
  };
}

interface SubjectButton {
  name: keyof GradeSubjects;
  bgClass: string;
  icon: string;
}

const subjects: SubjectButton[] = [
  { name: 'Mathematics', bgClass: 'bg-[#22b573]', icon: '/maths.svg' },
  { name: 'Chemistry', bgClass: 'bg-[#F9633B]', icon: '/chem.svg' },
  { name: 'Biology', bgClass: 'bg-[#7945DD]', icon: '/bio.svg' },
  { name: 'Physics', bgClass: 'bg-[#67B2ED]', icon: '/physics.svg' },
  { name: 'English', bgClass: 'bg-[#DB467F]', icon: '/eng.svg' },
];

const Schedule = ({ grade, subject }: { grade: Grade; subject: keyof GradeSubjects }) => {
  const subjectData = (timetableData as TimetableData).grades[grade]?.[subject];

  if (!subjectData) {
    return null;
  }

  return (
    <div 
      key={`${grade}-${subject}`} 
      className="w-1/4 ml-10 text-[#351E1C] opacity-0 transition-opacity duration-700"
      style={{ animation: 'fadeIn 0.7s ease-in-out forwards 0.1s' }}
    >
      {subjectData.schedule.map((slot, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-medium mb-2">{slot.day}</h3>
          <p className="whitespace-nowrap ">{slot.time}</p>
        </div>
      ))}
      <div className="mt-6">
        <h3 className="font-medium mb-2">Teacher:</h3>
        <p className="whitespace-nowrap">{subjectData.teacher}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const { isOpen } = useMenu();
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<keyof GradeSubjects>('Mathematics');

  return (
    <main className="min-h-screen">
      <div className={`relative mt-[191px] mx-auto max-w-full sm:max-w-[1400px] transition-all duration-300 ${isOpen ? 'lg:mt-[140px] mt-[400px]' : 'mt-[140px]'}`}>        
        <Image src="/banner.jpg" alt="Banner" width={1400} height={550} priority className="object-cover rounded-[30px] w-full h-auto" />

        <div className={`mt-10 w-full bg-[#FFFCF8] rounded-[30px] px-4 sm:px-6 md:px-10 py-8 transition-all duration-300 ${selectedGrade ? 'h-auto md:h-[501px]' : 'h-auto md:h-[169px]'}`}>          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
            <h2 className="text-[#351E1C] font-['Libre_Baskerville'] text-4xl md:text-[60px] leading-tight" style={{ marginTop: '20px' }}>Subjects</h2>
            <div className="flex items-center">
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => { setSelectedGrade(grade); setSelectedSubject('Mathematics'); }}
                  className={`cursor-pointer px-4 py-1 font-medium text-base leading-[25px] font-['Poppins'] rounded-full border transition-colors ${selectedGrade === grade ? 'bg-[#F9633B] text-white border-[#F9633B]' : 'text-[#F9633B] border-[#F9633B] hover:bg-[#F9633B] hover:text-white'}`}
                  style={{ marginTop: '30px', marginLeft: '20px' }}
                >
                  Grade {grade}
                </button>
              ))}
            </div>
          </div>

          {selectedGrade && (
            <div className="mt-8 flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-8 justify-items-center">
                {subjects.map(({ name, bgClass, icon }) => (
                  <button
                    key={name}
                    onClick={() => setSelectedSubject(name)}
                    className={`flex items-center gap-3 px-6 rounded-[12px] transition-colors w-[316px] h-[73px] ${
                      selectedSubject === name ? bgClass : 'bg-[#E1EEEF]'
                    }`}
                  >
                    <div className={selectedSubject === name ? 'brightness-0 invert' : ''}>
                      <Image src={icon} alt={name} width={45} height={45} />
                    </div>
                    <span className={`text-[30px] leading-[26px] font-medium ${selectedSubject === name ? 'text-white' : 'text-[#351E1C]'}`}>
                      {name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="hidden lg:block w-[2px] h-[270px] bg-[#E1EEEF]" />

              <div className="w-full lg:w-1/4 lg:ml-10 text-[#351E1C]">
              <Schedule grade={selectedGrade} subject={selectedSubject} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}