"use client";

import { useState } from "react";
import { fetchHelper } from "@/utils";

export function AddIncomeModal({ userId, onClose, onAdded }: { userId: string, onClose: () => void, onAdded: () => void }) {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetchHelper("/income", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ds_income: name,
                    vl_income: value,
                    cd_user: userId
                }),
            });
            onAdded();
            onClose();
        } catch (err) {
            console.error("Failed to add income", err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 flex flex-col gap-6 w-[400px]">
                <h2 className="text-2xl font-semibold text-center">Adicionar Entrada</h2>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded-lg p-3" required />
                <input type="number" placeholder="Valor" value={value} onChange={(e) => setValue(e.target.value)} className="border border-gray-300 rounded-lg p-3" required />
                <div className="flex justify-end gap-4 mt-4">
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 cursor-pointer">Cancelar</button>
                    <button type="submit" className="px-4 py-2 rounded-lg bg-green-500 text-white cursor-pointer">Salvar</button>
                </div>
            </form>
        </div>
    );
}
