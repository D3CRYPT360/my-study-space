import Image from 'next/image';
import { Teacher } from '@/app/lib/types';

interface TeacherCardProps {
  teacher: Teacher;
}

export const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <div className="relative flex flex-col items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px]">
      {/* Teacher container with portrait and background */}
      <div className="relative w-full">
        {/* Background container */}
        <div 
          className="w-full rounded-[50px] absolute top-[25%] left-0"
          style={{
            backgroundImage: 'url("/our teachers_background.png")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '75%'
          }}
        />
        
        {/* Teacher portrait */}
        <Image 
          src={teacher.image} 
          alt={`${teacher.name} ${teacher.title}`} 
          width={350} 
          height={400}
          className="w-full h-auto object-cover rounded-[50px] relative z-10"
        />
        
        {/* Name tag positioned at the bottom of the portrait */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-[80%] translate-y-1/3">
          <div className="w-full bg-[#F2C686] rounded-[12px] flex items-center justify-center py-2 px-3 sm:px-4 shadow-lg">
            <p className="flex items-center text-[24px] sm:text-[28px] md:text-[32px] leading-[1.2] text-[#351E1C] whitespace-nowrap">
              <span className="font-libre">{teacher.name}</span>
              <span className="mx-0.1">&nbsp;</span>
              <span className="baskervville-regular-italic">{teacher.title}</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Subject information */}
      <div className="w-[280px] bg-[#E1EEEF] rounded-[12px] flex items-center justify-center gap-3 py-3 mb-3 mt-10">
        <Image
          src={teacher.subjectIcon}
          alt={teacher.subject}
          width={40}
          height={40}
        />
        <span className="text-[#351E1C] text-[24px] font-medium font-poppins">
          {teacher.subject}
        </span>
      </div>
      
      {/* Experience information */}
      <div className="text-center text-[#351E1C] text-[16px] font-medium font-poppins">
        {teacher.experience} <br />
        Experience.
      </div>
    </div>
  );
};
