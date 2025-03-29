'use client';

import React, { useState, useRef } from 'react';
import { useMenu } from '../context/menu-context';
import { faqData } from './faq';

const FAQAccordion = ({ question, answer, isOpen, onClick, isLast }: { 
  question: string; 
  answer: string | React.ReactNode; 
  isOpen: boolean;
  onClick: () => void;
  isLast?: boolean;
}) => {
  return (
    <div className={`${!isLast ? 'border-b border-gray-300' : ''} py-2`}>
      <button
        className="flex justify-between items-center w-full text-left text-base md:text-lg font-medium text-[#351E1C] py-1"
        onClick={onClick}
      >
        <span>{question}</span>
        <span className="ml-4 md:ml-6 flex-shrink-0">
          <svg 
            className={`h-6 w-6 md:h-10 md:w-10 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </span>
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-[1000px] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="mt-2 pr-4 md:pr-12">
          <div className="text-sm md:text-base text-[#351E1C]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  const { isOpen } = useMenu();
  const [openQuestions, setOpenQuestions] = useState<Record<string, number[]>>({});

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggleQuestion = (category: string, index: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [category]: prev[category]?.includes(index)
        ? prev[category].filter(i => i !== index)
        : [...(prev[category] || []), index]
    }));
  };

  const scrollToSection = (category: string) => {
    sectionRefs.current[category]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative transition-all duration-300 ${
          isOpen 
            ? 'mt-[400px]' 
            : 'mt-[130px] md:mt-[150pt]'
        }`}>
          {/* Navigation Section */}
          <section className="bg-[#FFFCF8] rounded-[30px] p-8 mb-8">
            <h1 className="text-[32px] md:text-[40px] font-['Libre_Baskerville'] text-center mb-8">FAQs</h1>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {faqData.map((category) => (
                <button
                  key={category.title}
                  onClick={() => scrollToSection(category.title)}
                  className="relative group overflow-hidden text-lg md:text-[30px] h-[45px] md:h-[60px] flex items-center justify-center rounded-[15px] border border-[#351E1C] text-[#351E1C] hover:text-[#F9633B] transition-all duration-300"
                >
                  <span className="left-1/2 absolute inset-40 size-50 bg-[#351E1C] transform duration-450 ease-in-out group-hover:size-150 rounded-full -translate-1/2"></span>
                  <span className="px-5 relative z-10 transition-all duration-300 group-hover:text-[#F9633B]">
                    {category.title}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* FAQ Content Sections */}
          {faqData.map((category) => (
            <section 
              key={category.title}
              ref={(el: HTMLElement | null) => {
                sectionRefs.current[category.title] = el;
              }}
              className="bg-[#FFFCF8] rounded-[30px] p-4 md:p-8 mb-8 scroll-mt-32"
            >
              <h2 className="text-2xl md:text-[32px] font-poppins text-[#351E1C]">{category.title}</h2>
              <div className="space-y-2 font-poppins">
                {category.questions.map((faq, index) => (
                  <FAQAccordion
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openQuestions[category.title]?.includes(index) || false}
                    onClick={() => toggleQuestion(category.title, index)}
                    isLast={index === category.questions.length - 1}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}