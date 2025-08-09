"use client";

import Image from "next/image";
import { useMenu } from "./context/menu-context";
import { useState, useEffect } from "react";
import {
  getTimetableData,
  getGrades,
  type Grade,
  type GradeSubjects,
} from "@/data/timetable";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const grades = getGrades();

const banners = [
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

// -------------------- SUBJECT FILTER SETTINGS --------------------
type SubjectKey = keyof GradeSubjects;

const gradeSubjectsMap: Record<Grade, SubjectKey[]> = {
  8: ["Mathematics", "Dhivehi", "Islam", "Business", "English", "Science"],
  9: [
    "Mathematics",
    "Chemistry",
    "Biology",
    "Physics",
    "English",
    "Accounting",
  ],
  10: [
    "Mathematics",
    "Chemistry",
    "Biology",
    "Physics",
    "English",
    "Accounting",
  ],
};

const allSubjects: Array<{
  name: SubjectKey;
  bgClass: string;
  icon: string;
}> = [
  { name: "Mathematics", bgClass: "bg-[#22b573]", icon: "/maths.svg" },
  { name: "Chemistry", bgClass: "bg-[#F9633B]", icon: "/chem.svg" },
  { name: "Biology", bgClass: "bg-[#7945DD]", icon: "/bio.svg" },
  { name: "Physics", bgClass: "bg-[#67B2ED]", icon: "/physics.svg" },
  { name: "English", bgClass: "bg-[#DB467F]", icon: "/eng.svg" },
  { name: "Accounting", bgClass: "bg-[#E24BDB]", icon: "/Acc.svg" },
  { name: "Dhivehi", bgClass: "bg-[#F2C686]", icon: "/dhiv.svg" },
  { name: "Islam", bgClass: "bg-[#F9633B]", icon: "/islam.svg" },
  { name: "Science", bgClass: "bg-[#22b573]", icon: "/Science.svg" },
  { name: "Business", bgClass: "bg-[#7945DD]", icon: "/Buss.svg" },
];

// -------------------- COMPONENTS --------------------
const Schedule = ({
  grade,
  subject,
}: {
  grade: Grade;
  subject: SubjectKey;
}) => {
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

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <Carousel
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
      </Carousel>
    </div>
  );
};

// -------------------- MAIN --------------------
export default function Home() {
  const { isOpen } = useMenu();
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedSubject, setSelectedSubject] =
    useState<SubjectKey>("Mathematics");
  const [expandedSubjects, setExpandedSubjects] = useState<Set<SubjectKey>>(
    new Set()
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSubjectExpansion = (subject: SubjectKey) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subject)) {
      newExpanded.delete(subject);
    } else {
      newExpanded.add(subject);
    }
    setExpandedSubjects(newExpanded);
    setSelectedSubject(subject);
  };

  const isSubjectExpanded = (subject: SubjectKey) =>
    expandedSubjects.has(subject);

  // Filter subjects based on selected grade
  const filteredSubjects =
    selectedGrade !== null
      ? allSubjects.filter((s) =>
          gradeSubjectsMap[selectedGrade].includes(s.name)
        )
      : [];

  return (
    <main className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative transition-all duration-300 ${
            isOpen ? "mt-[400px]" : "mt-[130px] md:mt-[150pt]"
          }`}
        >
          <BannerCarousel />

          {/* Subjects Section */}
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
                          setSelectedSubject(
                            gradeSubjectsMap[grade][0] // default first subject
                          );
                          setExpandedSubjects(new Set());
                        }}
                        className={`relative overflow-hidden group cursor-pointer px-4 py-1 font-medium text-base leading-[25px] font-['Poppins'] rounded-[15px] border transition-colors ${
                          selectedGrade === grade
                            ? "bg-[#F9633B] text-white border-[#F9633B]"
                            : "text-[#F9633B] border-[#F9633B]"
                        } ml-2 sm:ml-[20px] md:mt-[30px] first:ml-0 sm:first:ml-[20px]`}
                      >
                        <span className="px-5 relative z-10">
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
                      {filteredSubjects.map(({ name, bgClass, icon }) => (
                        <div key={name} className="flex flex-col">
                          <button
                            onClick={() => {
                              if (isMobile) {
                                toggleSubjectExpansion(name);
                              } else {
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
                                />
                              </div>
                              <span
                                className={`text-[20px] md:text-[30px] font-medium
                                ${
                                  !isMobile && selectedSubject === name
                                    ? "text-white"
                                    : "text-[#351E1C]"
                                }`}
                              >
                                {name}
                              </span>
                            </div>

                            {isMobile && (
                              <svg
                                width="24"
                                height="24"
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
                            )}
                          </button>

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

          {/* Teachers Section */}
          <div className="mt-15 w-full bg-[#FFFCF8] rounded-[30px] px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center pt-4">
              <h2 className="flex font-libre text-[40px] md:text-[60px] text-[#351E1C]">
                <span className="font-normal">Our</span>
                <span className="baskervville-regular-italic">Teachers</span>
              </h2>
              <Link
                href="/teachers"
                className="hidden md:block text-[16px] font-medium text-[#F9633B]"
              >
                See all Teachers {" > "}
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {teachers.map((teacher) => (
                <div
                  key={teacher.name}
                  className="flex flex-col items-center w-full max-w-[350px]"
                >
                  <Image
                    src={teacher.image}
                    alt={`${teacher.name} ${teacher.title}`}
                    width={350}
                    height={400}
                    className="w-full h-auto object-cover rounded-[50px]"
                  />
                  <div className="w-full bg-[#E1EEEF] rounded-[12px] flex items-center justify-center gap-3 py-3 mt-10">
                    <Image
                      src={teacher.subjectIcon}
                      alt={teacher.subject}
                      width={40}
                      height={40}
                    />
                    <span className="text-[#351E1C] text-[24px] font-medium">
                      {teacher.subject}
                    </span>
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
                className="text-center text-[16px] font-medium text-[#F9633B]"
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
