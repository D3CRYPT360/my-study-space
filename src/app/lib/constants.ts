import { SubjectButton, Teacher } from './types';

export const SUBJECTS: SubjectButton[] = [
  { name: 'Mathematics', bgClass: 'bg-[#22b573]', icon: '/maths.svg' },
  { name: 'Chemistry', bgClass: 'bg-[#F9633B]', icon: '/chem.svg' },
  { name: 'Biology', bgClass: 'bg-[#7945DD]', icon: '/bio.svg' },
  { name: 'Physics', bgClass: 'bg-[#67B2ED]', icon: '/physics.svg' },
  { name: 'English', bgClass: 'bg-[#DB467F]', icon: '/eng.svg' },
];

export const TEACHERS: Teacher[] = [
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
