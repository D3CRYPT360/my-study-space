"use client";

import Image from "next/image";
import { useMenu } from "./context/menu-context";
import { useState, useEffect, useCallback } from "react";
import { 
  getTimetableData, 
  getSubjectsForGrade, 
  getGrades, 
  type Grade, 
  type GradeSubjects 
} from "@/data/timetable";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const grades = getGrades();

const banners = [
  {
    mobile: "/term - mobile.jpg",
    desktop: "/term - web.jpg",
    alt: "Term Exam Prep Just for 249",
  },
  {
    mobile: "/Algebra crash course wbsite banners_Mobile.jpg",
    desktop: "/Algebra crash course wbsite banners_Desktop.jpg",
    alt: "Algebra Crash Course",
  },
  {
    mobile: "/for just 249_Mobile.jpg",
    desktop: "/for just 249_Desktop.jpg",
    alt: "For just 249",
  },
];



const teachers = [
  {
    name: "Mahil",
    title: "Sir",
    subject: "Mathematics",
    experience: "4+ Years of Teaching ",
    image: "/our teachers_mahil.png",
    subjectIcon: "/maths.svg",
  },
  {
    name: "Nafla",
    title: "Miss",
    subject: "Chemistry",
    experience: "7+ Years of Teaching",
    image: "/our teachers_nafla.png",
    subjectIcon: "/chem.svg",
  },
  {
    name: "Iyad",
    title: "Sir",
    subject: "English",
    experience: "9+ Years of Teaching",
    image: "/our teachers_iyad.png",
    subjectIcon: "/eng.svg",
  },
];

const Schedule = ({ grade, subject }: { grade: Grade; subject: keyof GradeSubjects }) => {
  const subjectData = getTimetableData(grade, subject);
  if (!subjectData) return null;

  return (
    <div className="w-full text-[#351E1C]">
      {subjectData.schedule.map((slot, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-medium mb-1">{slot.day}</h3>
          <p>{slot.time}</p>
        </div>
      ))}
      <div className="mt-4">
        <h3 className="font-medium mb-1">Teacher:</h3>
        <p>{subjectData.teacher}</p>
      </div>
    </div>
  );
};

const BannerCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Handle auto-scroll and slide change events
  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Auto-scroll functionality
    const autoplay = setInterval(() => {
      if (api) {
        const nextIndex = (api.selectedScrollSnap() + 1) % banners.length;
        api.scrollTo(nextIndex);
      }
    }, 3000); // Change slide every 3 seconds

    // Cleanup function
    return () => {
      api.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [api]);

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <Carousel 
        setApi={setApi}
        opts={{ 
          loop: true,
        }} 
        className="relative rounded-[30px] overflow-hidden"
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <Image
                src={isMobile ? banner.mobile : banner.desktop}
                alt={banner.alt}
                width={1400}
                height={550}
                priority={index === 0}
                className="w-full h-auto object-cover rounded-[30px]"
                draggable={true}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Dots indicator */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="flex justify-center gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all border-[#F9633B] duration-300 flex items-center justify-center outline-none ${
                  current === index 
                    ? 'bg-[#F9633B] scale-125' 
                    : 'border-2 border-[#F9633B] bg-transparent hover:bg-[#F9633B]/20 focus:outline-none focus:ring-0'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default function Home() {
  const { isOpen } = useMenu();
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  type SubjectKey = keyof GradeSubjects;
  const [selectedSubject, setSelectedSubject] = useState<SubjectKey>("Mathematics");
  const [expandedSubjects, setExpandedSubjects] = useState<Set<keyof GradeSubjects>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener
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

  const subjects: Array<{
    name: SubjectKey;
    bgClass: string;
    icon: string;
  }> = [
    { name: "Mathematics", bgClass: "bg-[#22b573]", icon: "/maths.svg" },
    { name: "Chemistry", bgClass: "bg-[#F9633B]", icon: "/chem.svg" },
    { name: "Biology", bgClass: "bg-[#7945DD]", icon: "/bio.svg" },
    { name: "Physics", bgClass: "bg-[#67B2ED]", icon: "/physics.svg" },
    { name: "English", bgClass: "bg-[#DB467F]", icon: "/eng.svg" },
    { name: "Business", bgClass: "bg-[#FBB03B]", icon: "/Buss.svg" },
    { name: "Accounting", bgClass: "bg-[#E24BDB]", icon: "/Acc.svg" },
    { name: "Economics", bgClass: "bg-[#4DCEC8]", icon: "/Econ.svg" },
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative transition-all duration-300 ${isOpen ? "mt-[400px]" : "mt-[130px] md:mt-[150pt]"}`}>
          <BannerCarousel />

          <div className="bg-[#FFFCF8] rounded-[30px] mt-15">
            <div
              className={`py-8 transition-all duration-300 ${
                selectedGrade
                  ? "min-h-[600px] sm:min-h-[700px] lg:min-h-[501px]"
                  : "h-auto md:h-[169px]"
              }`}
            >
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-0">
                  <h2 className="text-[#351E1C] font-['Libre_Baskerville'] text-[32px] md:text-[60px] leading-tight md:mt-[20px]">
                    Subjects
                  </h2>
                  <div className="flex items-center">
                    {grades.map((grade) => (
                      <button
                        key={grade}
                        onClick={() => {
                          setSelectedGrade(grade);
                          setSelectedSubject("Mathematics");
                          setExpandedSubjects(new Set());
                        }}
                        className={`relative overflow-hidden group cursor-pointer px-4 py-1 font-medium text-base leading-[25px] font-['Poppins'] rounded-[15px] border transition-colors ${
                          selectedGrade === grade
                            ? "bg-[#F9633B] text-white border-[#F9633B]"
                            : "text-[#F9633B] border-[#F9633B]"
                        } ml-2 sm:ml-[20px] md:mt-[30px] first:ml-0 sm:first:ml-[20px]`}
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
                    <div
                      className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8"
                      style={{ width: "auto" }}
                    >
                      {subjects.map(({ name, bgClass, icon }) => (
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
                              ${
                                isSubjectExpanded(name)
                                  ? "rounded-t-[12px] rounded-b-none"
                                  : "rounded-[12px]"
                              } 
                              transition-colors w-full lg:w-[316px] h-[73px] 
                              ${
                                isMobile
                                  ? "bg-[#E1EEEF]"
                                  : selectedSubject === name
                                  ? bgClass
                                  : "bg-[#E1EEEF]"
                              }`}
                          >
                            <div className="flex items-center gap-5">
                              <div
                                className={
                                  !isMobile && selectedSubject === name
                                    ? "brightness-0 invert"
                                    : ""
                                }
                              >
                                <Image
                                  src={icon}
                                  alt={name}
                                  width={45}
                                  height={45}
                                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                                />
                              </div>
                              <span
                                className={`text-[20px] md:text-[30px] leading-[22px] md:leading-[26px] font-medium text-left
                                ${
                                  !isMobile && selectedSubject === name
                                    ? "text-white"
                                    : "text-[#351E1C]"
                                }`}
                              >
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
                                className={`transition-transform duration-300 ${
                                  isSubjectExpanded(name) ? "rotate-180" : ""
                                }`}
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
                              {selectedGrade && (
                                <Schedule
                                  grade={selectedGrade}
                                  subject={name}
                                />
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="hidden lg:block w-[2px] h-[270px] bg-[#E1EEEF]" />

                    <div className="hidden lg:block w-full lg:w-1/4 px-4 lg:px-0 mt-8 lg:mt-0">
                      <Schedule
                        grade={selectedGrade}
                        subject={selectedSubject}
                      />
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
              <Link
                href="/teachers"
                className="hidden md:block text-[16px] leading-[25px] font-medium text-[#F9633B] hover:text-[#d94d27]"
              >
                See all Teachers {" > "}
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {teachers.map((teacher) => (
                <div key={teacher.name} className="flex flex-col items-center w-full max-w-[350px]">
                  <div className="relative w-full">
                    <div
                      className="w-full rounded-[50px] absolute top-[25%] left-0"
                      style={{
                        backgroundImage: 'url("/our teachers_background.png")',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "75%",
                      }}
                    />
                    <Image
                      src={teacher.image}
                      alt={`${teacher.name} ${teacher.title}`}
                      width={350}
                      height={400}
                      className="w-full h-auto object-cover rounded-[50px] relative z-10"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-[80%] translate-y-1/3">
                      <div className="bg-[#F2C686] rounded-[12px] flex items-center justify-center py-2 px-4 shadow-lg">
                        <p className="text-[28px] md:text-[32px] text-[#351E1C] whitespace-nowrap">
                          <span className="font-libre">{teacher.name}</span>
                          <span className="ml-1 italic">{teacher.title}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-[#E1EEEF] rounded-[12px] flex items-center justify-center gap-3 py-3 mt-10">
                    <Image src={teacher.subjectIcon} alt={teacher.subject} width={40} height={40} />
                    <span className="text-[#351E1C] text-[24px] font-medium">{teacher.subject}</span>
                  </div>
                  <div className="text-center text-[#351E1C] text-[16px] font-medium mt-3">
                    {teacher.experience} <br /> Experience.
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 md:hidden">
              <Link
                href="/teachers"
                className="text-center text-[16px] font-medium text-[#F9633B] hover:text-[#d94d27]"
              >
                See all Teachers {" > "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
