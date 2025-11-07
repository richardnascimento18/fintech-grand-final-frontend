"use client";

import { MainFooter } from "@/components/Footer";
import { BarChartGraph } from "@/components/Graph";
import { MainHeader } from "@/components/Header";
import { MainList } from "@/components/List";
import { MainTitle } from "@/components/Title";
import { fetchHelper, LineChartObject, MainListObject } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { useCookies } from "react-cookie";

export function DashboardContainer() {
    const [cookies] = useCookies(["token"]);
    const router = useRouter();
    const [email, setEmail] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [incomeItems, setIncomeItems] = useState<MainListObject[]>([]);
    const [expenseItems, setExpenseItems] = useState<MainListObject[]>([]);

    const fetchIncomes = async () => {
        try {
            const res = await fetchHelper(`/income/${userId}/0`, {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });
            const onRemove = async (id: string) => {
                try {
                    await fetchHelper(`/income/${id}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    });
                    setIncomeItems((prev) => prev.filter((item) => item.id !== id));
                } catch (err) {
                    console.error("Failed to remove income", err);
                }
            };
            const mapped = res.data.map((income: any) => ({
                id: income.cd_income,
                title: income.ds_income,
                value: `+ R$ ${income.vl_income}`,
                onRemove: () => onRemove(income.cd_income),
            }));
            setIncomeItems(mapped);
        } catch (err) {
            console.error("Failed to fetch income data", err);
        }
    };

    const fetchExpenses = async () => {
        try {
            const res = await fetchHelper(`/expense/${userId}/0`, {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });
            const onRemove = async (id: string) => {
                try {
                    await fetchHelper(`/expense/${id}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    });
                    setExpenseItems((prev) => prev.filter((item) => item.id !== id));
                } catch (err) {
                    console.error("Failed to remove expense", err);
                }
            };
            const mapped = res.data.map((expense: any) => ({
                id: expense.cd_expense,
                title: expense.ds_expense,
                value: `- R$ ${expense.vl_expense}`,
                onRemove: () => onRemove(expense.cd_expense),
            }));
            setExpenseItems(mapped);
        } catch (err) {
            console.error("Failed to fetch expense data", err);
        }
    };

    useEffect(() => {
        if (!cookies.token) {
            router.push("/login");
            return;
        }
        const fetchUserData = async () => {
            try {
                const res = await fetchHelper("/user/me", {
                    method: "GET",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });
                const { cd_user, user_email } = res.data;
                setUserId(cd_user);
                setEmail(user_email);
            } catch (err) {
                console.error("Failed to fetch user data", err);
                document.cookie = "token=; path=/; Secure; SameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                router.push("/");
            }
        };
        fetchUserData();
    }, [cookies.token, router]);

    useEffect(() => {
        if (userId) {
            fetchIncomes();
            fetchExpenses();
        }
    }, [userId]);

    const totalIncome = useMemo(() => {
        return incomeItems.reduce((sum, item) => {
            const cleaned = item.value.replace(/[^\d,.-]/g, "").replace(",", ".");
            const numericValue = parseFloat(cleaned);
            return sum + (isNaN(numericValue) ? 0 : numericValue);
        }, 0);
    }, [incomeItems]);

    const totalExpense = useMemo(() => {
        return expenseItems.reduce((sum, item) => {
            const cleaned = item.value.replace(/[^\d,.-]/g, "").replace(",", ".");
            const numericValue = parseFloat(cleaned);
            return sum + (isNaN(numericValue) ? 0 : numericValue);
        }, 0);
    }, [expenseItems]);

    if (!cookies.token || !email) return null;

    const mockGraphData: LineChartObject[] = [{ receita: totalIncome, gasto: totalExpense }];

    return (
        <section className="flex flex-col w-full px-26 py-9 gap-34">
            <MainHeader email={email} userId={userId!} onIncomeAdded={() => { fetchIncomes(); fetchExpenses(); }} />
            <main className="flex flex-row self-center justify-between align-baseline w-full gap-76 px-36">
                <MainList title="Ultimas Receitas" listItems={incomeItems} />
                <MainList title="Ultimos Gastos" listItems={expenseItems} secondaryStyle />
            </main>
            <section className="flex flex-row self-center justify-between align-baseline w-full gap-76 px-36">
                <div className="flex flex-col w-full gap-9 items-center">
                    <MainTitle text="Gráfico de Receitas e Gastos" />
                    <BarChartGraph data={mockGraphData} />
                </div>
            </section>
            <MainFooter />
        </section>
    );
}
