export const grades = ['9', '10'] as const;
export type Grade = typeof grades[number];

export interface TimeSlot {
  day: string;
  time: string;
}

export interface SubjectData {
  teacher: string;
  schedule: TimeSlot[];
}

export interface GradeSubjects {
  Mathematics: SubjectData;
  Chemistry: SubjectData;
  Biology: SubjectData;
  Physics: SubjectData;
  English: SubjectData;
}

export interface TimetableData {
  grades: {
    [key in Grade]: GradeSubjects;
  };
}

export interface SubjectButton {
  name: keyof GradeSubjects;
  bgClass: string;
  icon: string;
}

export interface Teacher {
  name: string;
  title: string;
  subject: string;
  experience: string;
  image: string;
  subjectIcon: string;
  subjectBg: string;
}
