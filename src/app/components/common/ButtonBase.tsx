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
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export const ButtonBase = ({
  href,
  onClick,
  variant,
  children,
  className = '',
  target,
  rel
}: ButtonBaseProps) => {
  const buttonClasses = `${buttonStyles.base} ${buttonStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} legacyBehavior>
        <a className={buttonClasses} target={target} rel={rel}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
