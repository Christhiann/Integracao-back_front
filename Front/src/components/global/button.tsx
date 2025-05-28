import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends FC<PropsWithChildren<ButtonHTMLAttributes<any>>> {
  className?: string;
}

export const Button: ButtonProps = ({ children, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(`
        2xl:w-[425px] 2xl:max-w-[425px] xl:w-[300px] xl:max-w-[350px] w-[285px] max-w-[285px]
        bg-gradient-darkblue rounded-lg p-3 py-2 text-white 2xl:text-lg xl:text-md text-xs
        transition-colors duration-200 ease-in-out
        hover:bg-dark-blue hover:cursor-pointer
      ${className}
    `)}
    {...props}
    >
      {children}
    </button>
  );
};

