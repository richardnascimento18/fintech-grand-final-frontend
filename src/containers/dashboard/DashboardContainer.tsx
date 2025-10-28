import { MainFooter } from "@/components/Footer";
import { LineChartGraph } from "@/components/Graph";
import { MainHeader } from "@/components/Header";
import { MainList } from "@/components/List";
import { MainTitle } from "@/components/Title";
import { LineChartObject, MainListObject } from "@/utils";

export function DashboardContainer() {
    const mockIncomeItems: MainListObject[] = [
        {
            title: "24/11/2025",
            value: "+ R$ 5.000,00"
        },
        {
            title: "24/11/2025",
            value: "+ R$ 5.000,00"
        },
        {
            title: "24/11/2025",
            value: "+ R$ 5.000,00"
        },
        {
            title: "24/11/2025",
            value: "+ R$ 5.000,00"
        },
        {
            title: "24/11/2025",
            value: "+ R$ 5.000,00"
        },
    ];

    const mockExpenseItems: MainListObject[] = [
        {
            title: "24/11/2025",
            value: "- R$ 5.000,00"
        },
        {
            title: "24/11/2025",
            value: "- R$ 5.000,00"
        },
        {
            title: "24/11/2025",
            value: "- R$ 5.000,00"
        },
        {
            title: "24/11/2025",
            value: "- R$ 5.000,00"
        },
        {
            title: "24/11/2025",
            value: "- R$ 5.000,00"
        },
    ];

    const mockGraphData: LineChartObject[] = [
        { title: 'Agosto', receita: 1500, gasto: 10000, },
        { title: 'Setembro', receita: 40000, gasto: 20000, },
        { title: 'Outubro', receita: 4000, gasto: 2400, },
        { title: 'Novembro', receita: 3000, gasto: 1398, },
        { title: 'Dezembro', receita: 2000, gasto: 980, },
    ];

    return (
        <section className="flex flex-col w-full px-26 py-9 gap-34">
            <MainHeader />
            <main className="flex flex-row self-center justify-between align-baseline w-full gap-76 px-36">
                <MainList title="Resumo de Receitas" listItems={mockIncomeItems} />
                <MainList title="Resumo de Gastos" listItems={mockExpenseItems} secondaryStyle />
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