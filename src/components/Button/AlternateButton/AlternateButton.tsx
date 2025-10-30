"use client";

import React from "react"

interface AlternateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export function AlternateButton(props: AlternateButtonProps) {
    return <button {...props}
        className="w-fit rounded-sm cursor-pointer font-poppins text-[1.25rem] px-9 py-3 font-bold text-primary-50 disabled:bg-gray-600 disabled:text-gray-200 disabled:cursor-not-allowed transition duration-300 ease-in-out hover:text-primary-200">
            {props.text}
        </button>;
}