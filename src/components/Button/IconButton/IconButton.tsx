import React from "react"

interface IconButtonProps {
    buttonOptions: React.ButtonHTMLAttributes<HTMLButtonElement>;
    text: string;
    children: React.ReactNode;
}

export function IconButton(props: IconButtonProps) {
    return <button {...props.buttonOptions} 
        className="flex gap-3 items-center w-fit rounded-sm cursor-pointer font-poppins text-[1.25rem] py-3 text-primary-50 disabled:bg-gray-600 disabled:text-gray-200 disabled:cursor-not-allowed transition duration-300 ease-in-out hover:text-primary-200">
            {props.text}
            {props.children}
        </button>;
}