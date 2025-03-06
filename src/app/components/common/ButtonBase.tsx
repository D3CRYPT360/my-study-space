'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { buttonStyles } from '@/app/styles/button';

interface ButtonBaseProps {
  href?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export const ButtonBase = ({ href, onClick, variant, children, className = '' }: ButtonBaseProps) => {
  const buttonClasses = `${buttonStyles.base} ${buttonStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};