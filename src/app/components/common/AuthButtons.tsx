'use client';

import { ButtonBase } from './ButtonBase';

export const RegisterButton = ({ className = '' }) => (
  <ButtonBase
    href="https://app.mystudyspace.mv/auth2CreateProfileUpdate"
    variant="primary"
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="px-5 transition-transform duration-300 group-hover:scale-110">
      Register
    </span>
  </ButtonBase>
);

export const LoginButton = ({ className = '' }) => (
  <ButtonBase
    href="https://app.mystudyspace.mv/auth2Login"
    variant="secondary"
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="left-1/2 absolute inset-14 size-5 bg-[#F9633B] transform duration-500 ease-in-out group-hover:size-56 rounded-full -translate-1/2"></span>
    <span className="px-5 relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-110">
      Log in
    </span>
  </ButtonBase>
);
