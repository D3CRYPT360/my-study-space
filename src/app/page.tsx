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

const teachers = [
  {
    name: 'Mahil',
    title: 'Sir',
    subject: 'Mathematics',
    experience: '4+ Years of Teaching ',
    image: '/our teachers_mahil.png',
    subjectIcon: '/maths.svg',
    subjectBg: 'bg-[#E1EEEF]'
  },
  {
    name: 'Nafla',
    title: 'Miss',
    subject: 'Chemistry',
    experience: '7+ Years of Teaching',
    image: '/our teachers_nafla.png',
    subjectIcon: '/chem.svg',
    subjectBg: 'bg-[#E1EEEF]'
  },
  {
    name: 'Iyad',
    title: 'Sir',
    subject: 'English',
    experience: '9+ Years of Teaching',
    image: '/our teachers_iyad.png',
    subjectIcon: '/eng.svg',
    subjectBg: 'bg-[#E1EEEF]'
  }
];

const Schedule = ({ grade, subject }: { grade: Grade; subject: keyof GradeSubjects }) => {
  const subjectData = (timetableData as TimetableData).grades[grade]?.[subject];

  if (!subjectData) {
    return null;
  }

  return (
    <div 
      key={`${grade}-${subject}`} 
      className="w-full text-[#351E1C] opacity-0 transition-opacity duration-700"
      style={{ animation: 'fadeIn 0.7s ease-in-out forwards 0.1s' }}
    >
      {subjectData.schedule.map((slot, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-medium mb-2">{slot.day}</h3>
          <p className="whitespace-nowrap">{slot.time}</p>
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
        <Image 
          src="/banner.jpg" 
          alt="Banner" 
          width={1400} 
          height={550} 
          priority 
          className="hidden md:block object-cover rounded-[30px] w-full h-auto" 
        />
        <Image 
          src="/mobile.jpg" 
          alt="Mobile Banner" 
          width={1400} 
          height={550} 
          priority 
          className="md:hidden block object-cover rounded-[30px] w-full h-auto" 
        />
        <div className={`mt-15 w-full bg-[#FFFCF8] rounded-[30px] px-4 sm:px-6 md:px-10 py-8 transition-all duration-300 ${selectedGrade ? 'min-h-[600px] sm:min-h-[700px] lg:min-h-[501px]' : 'h-auto md:h-[169px]'}`}>          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
            <h2 className="text-[#351E1C] font-['Libre_Baskerville'] text-4xl md:text-[60px] leading-tight" style={{ marginTop: '20px' }}>Subjects</h2>
            <div className="flex items-center">
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => { setSelectedGrade(grade); setSelectedSubject('Mathematics'); }}
                  className={`relative overflow-hidden group cursor-pointer px-4 py-1 font-medium text-base leading-[25px] font-['Poppins'] rounded-[15px] border transition-colors ${selectedGrade === grade ? 'bg-[#F9633B] text-white border-[#F9633B]' : 'text-[#F9633B] border-[#F9633B]'}`}
                  style={{ marginTop: '30px', marginLeft: '20px' }}
                >
                  <span className="left-1/2 absolute inset-12 size-5 bg-[#F9633B] transform duration-500 ease-in-out group-hover:size-56 rounded-full -translate-1/2"></span>
                  <span className="px-5 relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">
                    Grade {grade}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {selectedGrade && (
            <div className="mt-8 flex flex-col lg:flex-row gap-10">
              <div className="w-lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8" style={{width: "auto"}}>
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

              <div className="w-full lg:w-1/4 px-4 lg:px-0 mt-8 lg:mt-0">
                <Schedule grade={selectedGrade} subject={selectedSubject} />
              </div>
            </div>
          )}
        </div>

        {/* Our Teachers Section */}
        <div className="mt-15 w-full bg-[#FFFCF8] rounded-[30px] px-4 sm:px-6 md:px-10 py-8">
          <div className="flex justify-between items-center">
            <h2 className="flex font-libre text-[60px] leading-[74px] text-[#351E1C]">
              <span className="font-normal">Our</span>
              <span className="baskervville-regular-italic">Teachers</span>
            </h2>
            <a href="#" className="text-right text-[16px] leading-[25px] font-medium font-poppins text-[#F9633B]">
              See all Teachers {'>'}
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {teachers.map((teacher) => (
              <div key={teacher.name} className="relative pt-[100px] flex flex-col items-center">
                <Image 
                  src={teacher.image} 
                  alt={`${teacher.name} ${teacher.title}`} 
                  width={413} 
                  height={400}
                  className="absolute -top-[30px] left-1/2 -translate-x-1/2 z-10 rounded-[50px]"
                />
                <div 
                  className="relative w-[413px] h-[411px] rounded-[50px] overflow-hidden mb-4"
                  style={{
                    backgroundImage: 'url("/our teachers_background.png")',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '150%'
                  }}
                />
                <div className="absolute top-[470px] left-1/2 -translate-x-1/2 z-20">
                  <div 
                    className="w-[316px] h-[73px] bg-[#F2C686] rounded-[12px] flex items-center justify-center shadow-lg"
                  >
                    <p className="flex items-center text-[50px] leading-[26px] text-[#351E1C] whitespace-nowrap">
                      <span className="font-libre">{teacher.name}</span>
                      <span className="mx-1">&nbsp;</span>
                      <span className="baskervville-regular-italic">{teacher.title}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-15 w-[316px] h-[73px] bg-[#E1EEEF] rounded-[12px] flex items-center justify-center gap-3 mb-3">
                  <Image
                    src={teacher.subjectIcon}
                    alt={teacher.subject}
                    width={40}
                    height={40}
                  />
                  <span className="text-[#351E1C] text-[30px] font-medium font-poppins">
                    {teacher.subject}
                  </span>
                </div>
                <div className="text-center text-[#351E1C] text-[16px] font-medium font-poppins">
                  {teacher.experience} <br></br>
                  Experience.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}