'use client';

import Image from 'next/image';
import { useMenu } from './context/menu-context';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Grade, GradeSubjects } from './lib/types';
import { SUBJECTS, TEACHERS } from './lib/constants';
import { Schedule } from './components/Schedule';
import { TeacherCard } from './components/TeacherCard';

export default function Home() {
  const { isOpen } = useMenu();
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<keyof GradeSubjects>('Mathematics');
  const [expandedSubjects, setExpandedSubjects] = useState<Set<keyof GradeSubjects>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSubjectExpansion = (subject: keyof GradeSubjects) => {
    const newExpandedSubjects = new Set(expandedSubjects);
    if (newExpandedSubjects.has(subject)) {
      newExpandedSubjects.delete(subject);
    } else {
      newExpandedSubjects.add(subject);
    }
    setExpandedSubjects(newExpandedSubjects);
    setSelectedSubject(subject);
  };

  const isSubjectExpanded = (subject: keyof GradeSubjects) => {
    return expandedSubjects.has(subject);
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative transition-all duration-300 ${
          isOpen 
            ? 'mt-[400px]' 
            : 'mt-[130px] md:mt-[150pt]'
        }`}>        
          {/* Mobile Banner */}
          <Image 
            src="/for just 249_Mobile.jpg" 
            alt="Mobile Banner" 
            width={1400} 
            height={550} 
            priority 
            className="md:hidden block object-cover rounded-[20px] sm:rounded-[30px] w-full h-auto" 
          />
          
          {/* Desktop Banner */}
          <Image 
            src="/for just 249_Desktop.jpg" 
            alt="Desktop Banner" 
            width={1400} 
            height={550} 
            priority 
            className="hidden md:block object-cover rounded-[30px] w-full h-auto mb-" 
          />
          <div className="bg-[#FFFCF8] rounded-[30px] mt-15">
            <div className={`py-8 transition-all duration-300 ${selectedGrade ? 'min-h-[600px] sm:min-h-[700px] lg:min-h-[501px]' : 'h-auto md:h-[169px]'}`}>          
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-0">
                  <h2 className="text-[#351E1C] font-['Libre_Baskerville'] text-[32px] md:text-[60px] leading-tight md:mt-[20px]">Subjects</h2>
                  <div className="flex items-center">
                    {['9', '10'].map((grade) => (
                      <button
                        key={grade}
                        onClick={() => { setSelectedGrade(grade as Grade); setSelectedSubject('Mathematics'); setExpandedSubjects(new Set()); }}
                        className={`relative overflow-hidden group cursor-pointer px-4 py-1 font-medium text-base leading-[25px] font-['Poppins'] rounded-[15px] border transition-colors ${selectedGrade === grade ? 'bg-[#F9633B] text-white border-[#F9633B]' : 'text-[#F9633B] border-[#F9633B]'} ml-2 sm:ml-[20px] md:mt-[30px] first:ml-0 sm:first:ml-[20px]`}
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
                    <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8" style={{width: "auto"}}>
                      {SUBJECTS.map(({ name, bgClass, icon }) => (
                        <div key={name} className="flex flex-col">
                          <button
                            onClick={() => {
                              if (isMobile) {
                                // For mobile, toggle dropdown
                                toggleSubjectExpansion(name);
                              } else {
                                // For desktop, just select the subject
                                setSelectedSubject(name);
                              }
                            }}
                            className={`flex items-center justify-between px-6 
                              ${isSubjectExpanded(name) ? 'rounded-t-[12px] rounded-b-none' : 'rounded-[12px]'} 
                              transition-colors w-full lg:w-[316px] h-[73px] 
                              ${isMobile ? 'bg-[#E1EEEF]' : (selectedSubject === name ? bgClass : 'bg-[#E1EEEF]')}`}
                          >
                            <div className="flex items-center gap-5">
                              <div className={!isMobile && selectedSubject === name ? 'brightness-0 invert' : ''}>
                                <Image src={icon} alt={name} width={45} height={45} className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]" />
                              </div>
                              <span className={`text-[20px] md:text-[30px] leading-[22px] md:leading-[26px] font-medium text-left
                                ${!isMobile && selectedSubject === name ? 'text-white' : 'text-[#351E1C]'}`}>
                                {name}
                              </span>
                            </div>
                            
                            {/* Dropdown arrow for mobile only */}
                            <div className="lg:hidden">
                              <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform duration-300 ${isSubjectExpanded(name) ? 'rotate-180' : ''}`}
                              >
                                <path 
                                  d="M7 10L12 15L17 10" 
                                  stroke="#351E1C" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </button>
                          
                          {/* Mobile dropdown content */}
                          {isSubjectExpanded(name) && (
                            <div className="lg:hidden w-full bg-[#E1EEEF] rounded-b-[12px] p-6">
                              {selectedGrade && <Schedule grade={selectedGrade} subject={name} />}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="hidden lg:block w-[2px] h-[270px] bg-[#E1EEEF]" />

                    <div className="hidden lg:block w-full lg:w-1/4 px-4 lg:px-0 mt-8 lg:mt-0">
                      {selectedGrade && <Schedule grade={selectedGrade} subject={selectedSubject} />}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Our Teachers Section */}
          <div className="mt-15 w-full bg-[#FFFCF8] rounded-[30px] px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center pt-4">
              <h2 className="flex font-libre text-[40px] md:text-[60px] leading-[50px] md:leading-[74px] text-[#351E1C]">
                <span className="font-normal">Our</span>
                <span className="baskervville-regular-italic">Teachers</span>
              </h2>
              <Link href="/teachers" className="hidden md:block text-right text-[16px] leading-[25px] font-medium font-poppins text-[#F9633B] hover:text-[#d94d27] transition-colors">
                See all Teachers {'>'}
              </Link>
            </div>

            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {TEACHERS.map((teacher) => (
                <TeacherCard key={teacher.name} teacher={teacher} />
              ))}
            </div>

            {/* Mobile "See all Teachers" link */}
            <div className="flex justify-center mt-8 md:hidden">
              <Link href="/teachers" className="text-center text-[16px] leading-[25px] font-medium font-poppins text-[#F9633B] hover:text-[#d94d27] transition-colors">
                See all Teachers {'>'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}