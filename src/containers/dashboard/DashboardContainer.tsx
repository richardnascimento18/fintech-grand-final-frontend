"use client";

import { MainFooter } from "@/components/Footer";
import { LineChartGraph } from "@/components/Graph";
import { MainHeader } from "@/components/Header";
import { MainList } from "@/components/List";
import { MainTitle } from "@/components/Title";
import { fetchHelper, LineChartObject, MainListObject } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export function DashboardContainer() {
    const [cookies] = useCookies(["token"]);
    const router = useRouter();

    const [email, setEmail] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [incomeItems, setIncomeItems] = useState<MainListObject[]>([]);

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
                router.push("/login");
            }
        };

        fetchUserData();
    }, [cookies.token, router]);

    useEffect(() => {
        if (!userId) return;

        const fetchIncomes = async () => {
            try {
                const res = await fetchHelper(`/income/${userId}/0`, {
                    method: "GET",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });

                const mapped = res.data.map((income: any) => ({
                    title: income.ds_income,
                    value: `+ R$ ${income.vl_income}`,
                }));

                setIncomeItems(mapped);
            } catch (err) {
                console.error("Failed to fetch income data", err);
            }
        };

        fetchIncomes();
    }, [userId]);

    if (!cookies.token || !email) return null;

    const mockExpenseItems: MainListObject[] = [
        { title: "24/11/2025", value: "- R$ 5.000,00" },
        { title: "24/11/2025", value: "- R$ 5.000,00" },
        { title: "24/11/2025", value: "- R$ 5.000,00" },
        { title: "24/11/2025", value: "- R$ 5.000,00" },
        { title: "24/11/2025", value: "- R$ 5.000,00" },
    ];

    const mockGraphData: LineChartObject[] = [
        { title: 'Agosto', receita: 1500, gasto: 10000 },
        { title: 'Setembro', receita: 40000, gasto: 20000 },
        { title: 'Outubro', receita: 4000, gasto: 2400 },
        { title: 'Novembro', receita: 3000, gasto: 1398 },
        { title: 'Dezembro', receita: 2000, gasto: 980 },
    ];

    return (
        <section className="flex flex-col w-full px-26 py-9 gap-34">
            <MainHeader email={email} />
            <main className="flex flex-row self-center justify-between align-baseline w-full gap-76 px-36">
                <MainList title="Ultimas Receitas" listItems={incomeItems} />
                <MainList title="Ultimos Gastos" listItems={mockExpenseItems} secondaryStyle />
            </main>

            <section className="flex flex-row self-center justify-between align-baseline w-full gap-76 px-36">
                <div className="flex flex-col w-full gap-9 items-center">
                    <MainTitle text="Gráfico de Receitas Mensais" />
                    <LineChartGraph data={mockGraphData}  />                   
                </div>
            </section>

            <MainFooter />
        </section>
    );
}
