import { Grade, GradeSubjects, TimetableData } from '@/app/lib/types';
import timetableData from '@/data/timetable.json';

interface ScheduleProps {
  grade: Grade;
  subject: keyof GradeSubjects;
}

export const Schedule = ({ grade, subject }: ScheduleProps) => {
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
