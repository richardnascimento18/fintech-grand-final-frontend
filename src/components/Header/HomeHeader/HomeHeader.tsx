"use client";

import { MainButton } from "../../Button/MainButton/MainButton";
import { AlternateButton } from "../../Button/AlternateButton/AlternateButton";
import { Logo } from "../../Title/Logo/Logo";
import { redirect } from "next/navigation";

export function HomeHeader() {
    return (
        <header className="flex flex-row justify-between items-center w-full">
            <Logo />
            <div className="flex flex-row items-center gap-4">
                <AlternateButton text="Log In" type="button" onClick={() => redirect("/login")} />
                <MainButton text="Cadastre-se" type="button" onClick={() => redirect("/register")} />
            </div>
        </header>
    );
}