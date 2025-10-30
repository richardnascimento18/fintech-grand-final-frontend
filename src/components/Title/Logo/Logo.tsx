"use client";

import { redirect } from "next/navigation";

export function Logo() {
    return <h1 className="font-adlam text-[3rem] font-medium text-primary-400 cursor-pointer p-2" onClick={() => redirect("/")}>Cashiq</h1>;
}