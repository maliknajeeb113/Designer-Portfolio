import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  nav?: boolean;
}

const Button = ({ to = "", onClick, children, nav=false }: ButtonProps) => {

  return (
    <Link to={to} onClick={onClick}>
      <div className={` ${nav?`shadow-neu px-16 py-8 rounded-xl text-xl cursor-pointer active:shadow-neu-i hover:scale-105 duration-500`:`flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]`}`}>
        {children}
      </div>
    </Link>
  );
};

export default Button;
