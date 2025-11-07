"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Logo } from "../../Title/Logo/Logo";
import { fetchHelper } from "@/utils";
import { AddIncomeModal } from "./AddIncomeModal";
import { AddExpenseModal } from "./AddExpenseModal";

export function MainHeader({ email, userId, onIncomeAdded }: { email: string, userId: string, onIncomeAdded: () => void }) {
    const [showIncomeModal, setShowIncomeModal] = useState(false);
    const [showExpenseModal, setShowExpenseModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetchHelper("/user/logout", { method: "POST", credentials: "include" });
            router.push("/login");
        } catch (err) {
            console.error("Failed to logout", err);
        }
    };

    return (
        <header className="flex flex-row justify-between items-center w-full relative">
            <Logo />
            <div className="flex gap-8 text-primary-50 text-xl font-medium">
                <button onClick={() => setShowIncomeModal(true)} className="cursor-pointer">Entrada</button>
                <button onClick={() => setShowExpenseModal(true)} className="cursor-pointer">Gasto</button>
            </div>
            <div className="relative flex items-center gap-2 cursor-pointer select-none" onClick={() => setShowDropdown(!showDropdown)}>
                <p className="text-primary-50 text-2xl font-medium">Bem-vindo de volta, {email}</p>
                <ChevronDown className={`text-primary-50 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} size={24} />
                {showDropdown && (
                    <div className="absolute right-0 top-full mt-2 bg-[#141414] rounded-xl shadow-lg p-3 cursor-pointer">
                        <button onClick={handleLogout} className="text-red-500 hover:text-red-400 text-lg font-medium px-4 py-2 w-full text-left cursor-pointer">Sair</button>
                    </div>
                )}
            </div>
            {showIncomeModal && <AddIncomeModal userId={userId} onClose={() => setShowIncomeModal(false)} onAdded={onIncomeAdded} />}
            {showExpenseModal && <AddExpenseModal userId={userId} onClose={() => setShowExpenseModal(false)} onAdded={onIncomeAdded} />}
        </header>
    );
}
