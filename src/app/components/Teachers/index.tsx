import Image from 'next/image';

interface Teacher {
  name: string;
  title: string;
  subject: string;
  experience?: string;
  education?: string;
  image: string;
  subjectIcon: string;
  hasBackground: boolean;
  description: string;
}

const teachers: Teacher[] = [
  {
    name: 'Mahil',
    title: 'Sir',
    subject: 'Mathematics',
    experience: '4+ Years of Teaching<br />Experience.',
    image: '/our teachers_mahil.png',
    subjectIcon: '/maths.svg',
    hasBackground: true,
    description: 'Mahil Sir is a self-taught maths tutor with 4+ years of teaching<br />experience, including previously teaching on a reputed online platform<br />in the Maldives. He uses digital tools to simplify complex topics and has<br />developed innovative methods to boost critical thinking and problem-<br />solving skills. An A-Level graduate with A* grades in both IGCSE and A-<br />Levels, his unorthodox approach has made math easier and more<br />enjoyable for students.'
  },
  {
    name: 'Nafla',
    title: 'Miss',
    subject: 'Chemistry',
    experience: '7+ Years of Teaching<br />Experience.',
    image: '/our teachers_nafla.png',
    subjectIcon: '/chem.svg',
    hasBackground: true,
    description: "With 7+ years of teaching experience in IGCSE and A-Level Chemistry,<br />Nafla Miss has taught students in Colombo and at a reputed institution<br />in the Maldives, gaining valuable international experience. Before<br />becoming a teacher, she worked as a laboratory technician for 2 years,<br />gaining practical knowledge of chemical handling that enhances her<br />ability to connect theory with real-world applications. Currently<br />pursuing a master's in Taylor's University, Malaysia, she is committed to<br /> providing students with a strong chemistry foundation."
  },
  {
    name: 'Iyad',
    title: 'Sir',
    subject: 'English',
    education: 'Bachelor of Honours in<br />International Relations',
    image: '/our teachers_iyad.png',
    subjectIcon: '/eng.svg',
    hasBackground: true,
    description: 'Say hi to your friendly English tutor Iyad Sir.<br />Iyad Sir brings 9+ years of IGCSE English teaching experience and has a<br />background in journalism at Avas Online News, and is a published<br />author and poet! With flying colours in 11 O\'Level subjects, National First<br />Place in A\'Level History, and a Bachelor of Honours in International<br />Relations, he combines academic excellence with engaging teaching.<br />His classes are fun, thanks to his witty humour and the fascinating<br />anecdotes he shares ranging from current pop-culture trends to pre-<br />World War I life, making learning both enjoyable and insightful.'
  },
  {
    name: 'Biology',
    title: 'Miss',
    subject: 'Biology',
    education: "Master's in Applied Zoology,<br />Bachelor's degree in Chemistry,<br /> Botany, and Zoology, &<br /> Bachelor's in Education",
    image: '/our teachers_bio.png',
    subjectIcon: '/bio.svg',
    hasBackground: false,
    description: "Miss is a dedicated Biology educator with over 9+ years of experience<br />teaching IGCSE and A-Level Biology. Having taught in India and now at<br />a reputed institution in the Maldives, she brings a wealth of<br />international teaching experience. She holds a Master's in Applied<br />Zoology, along with a Bachelor's degree in Chemistry, Botany, and<br />Zoology, as well as a Bachelor's in Education. With a passion for making<br />complex biological concepts accessible and practical, she ensures her<br />students grasp the subject with clarity and confidence."
  },
  {
    name: 'Physics',
    title: 'Sir',
    subject: 'Physics',
    education: "Bachelor of Technology in<br />Mechanical Engineering",
    image: '/our teachers_phy.png',
    subjectIcon: '/physics.svg',
    hasBackground: false,
    description: "Sir brings 4+ years of experience in teaching physics for both<br />IGCSE & A-Levels. He is a teacher and visiting lecturer at a reputed<br />institution in the Maldives and has tutored students in both the<br /> Maldives and Sri Lanka. As a mechanical engineer, he gained hands-on<br />expertise while working at Walkers Colombo Shipyard, Sri Lanka,<br />making him an ideal physics teacher. Shahim Sir explains complex<br />physics concepts in a clear and structured way, ensuring students<br />develop a strong and confident understanding of the subject."
  }
];

export default function Teachers() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="font-['Libre_Baskerville'] text-[40px] md:text-[50px] lg:text-[60px] leading-[1.2] md:leading-[74px] text-[#351E1C] font-normal tracking-[0px]">Our</span>{' '}
        <span className="font-['Libre_Baskerville'] text-[40px] md:text-[50px] lg:text-[60px] leading-[1.2] md:leading-[74px] text-[#351E1C] font-normal tracking-[0px] italic">Teachers</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
        {teachers.map((teacher) => (
          <div 
            key={`${teacher.name}-${teacher.subject}`}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 relative w-[165px] h-[216px]">
                {teacher.hasBackground ? (
                  <>
                    <div className="absolute bottom-0 w-full h-[175px] rounded-[20px] overflow-hidden">
                      <Image
                        src="/our teachers_background.png"
                        alt=""
                        fill
                        className="rounded-[20px]"
                        priority
                      />
                    </div>
                    <Image
                      src={teacher.image}
                      alt={`${teacher.name} ${teacher.title}`}
                      fill
                      className="w-full h-auto object-cover rounded-[20px] relative z-10"
                      priority
                    />
                  </>
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={teacher.image}
                      alt={`${teacher.name} ${teacher.title}`}
                      width={165}
                      height={165}
                      className="w-auto h-auto max-w-full max-h-full rounded-[20px]"
                      priority
                    />
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-5 mb-2 mt-10">
                  <h2 className="text-[#351E1C] font-['Libre_Baskerville'] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-tight">
                    <span className="font-libre">{teacher.name}</span>
                    <span className="mx-0.1">&nbsp;</span>
                    <span className="baskervville-regular-italic-nb">{teacher.title}</span>
                  </h2>
                  <div className="flex items-center bg-[#E1EEEF] rounded-md px-3 py-1 -mt-0.10">
                    <Image
                      src={teacher.subjectIcon}
                      alt={teacher.subject}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span className="text-sm sm:text-base font-['Poppins']">{teacher.subject}</span>
                  </div>
                </div>
                {teacher.experience && (
                  <p className="text-left font-medium text-base sm:text-lg md:text-xl leading-[24px] sm:leading-[26px] md:leading-[30px] font-['Poppins'] tracking-[0px] text-[#351E1C] opacity-100" 
                     dangerouslySetInnerHTML={{ __html: teacher.experience }}>
                  </p>
                )}
                {teacher.education && (
                  <p className="text-left font-medium text-base sm:text-lg md:text-xl leading-[24px] sm:leading-[26px] md:leading-[30px] font-['Poppins'] tracking-[0px] text-[#351E1C] opacity-100"
                     dangerouslySetInnerHTML={{ __html: teacher.education }}>
                  </p>
                )}
              </div>
            </div>
            <p className="text-left font-medium text-sm sm:text-base leading-[22px] sm:leading-[26px] font-['Poppins'] tracking-[0px] text-[#351E1C] opacity-100"
               dangerouslySetInnerHTML={{ __html: teacher.description }}>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}