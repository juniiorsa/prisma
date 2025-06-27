import React from 'react';
import type { FC, ButtonHTMLAttributes } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => {
  return (
    <button
      className={`bg-azul-eletrico text-white font-bold py-3 px-6 rounded-lg transition-transform duration-150 ease-in-out hover:scale-105 active:scale-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;