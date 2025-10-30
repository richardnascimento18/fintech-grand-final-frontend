"use client";

import React from "react"

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export function MainButton(props: MainButtonProps) {
    return <button {...props}
        className="w-fit rounded-sm cursor-pointer font-poppins text-[1.25rem] px-9 py-3 font-bold bg-primary-400 text-primary-950 disabled:bg-gray-600 disabled:text-gray-200 disabled:cursor-not-allowed transition duration-300 ease-in-out hover:bg-primary-800 hover:text-primary-200">
            {props.text}
        </button>;
}