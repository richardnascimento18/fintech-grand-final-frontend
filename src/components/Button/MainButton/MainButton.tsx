import React from "react"

interface MainButtonProps {
    buttonOptions: React.ButtonHTMLAttributes<HTMLButtonElement>;
    text: string;
}

export function MainButton(props: MainButtonProps) {
    return <button {...props.buttonOptions} className="w-fit rounded-sm cursor-pointer font-poppins text-[20px] px-9 py-[12px] font-bold bg-primary-400 text-primary-950 disabled:bg-gray-600 disabled:text-gray-200 transition duration-300 ease-in-out hover:bg-primary-800 hover:text-primary-200">{props.text}</button>
}