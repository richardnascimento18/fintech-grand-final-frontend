import { HomeAnimation } from "@/components/Animations";
import { IconButton, MainButton } from "@/components/Button";
import { MainFooter } from "@/components/Footer";
import { FormField } from "@/components/Form";
import { HomeHeader } from "@/components/Header";
import { IconList } from "@/components/List";
import { CircleDividerOrnament } from "@/components/Ornament";
import { MainTitle, MainTitleXL, Subtitle, UnderlineSubtitle } from "@/components/Title";
import { ArrowLeftRightIcon, ArrowUpRightIcon, IterationCwIcon, WifiOffIcon } from "lucide-react";

export function HomeContainer() {
    const iconListItems = [
        { icon: <ArrowLeftRightIcon size={16} />, title: "Rápido e Inteligente" },
        { icon: <WifiOffIcon size={16} />, title: "Registro Offline" },
        { icon: <IterationCwIcon size={16} />, title: "Atualização Automática" },
    ];

    return (
        <section className="flex flex-col w-full px-26 py-9 gap-34">
            <HomeHeader />
            <main className="flex flex-row self-center justify-center items-center w-full gap-16 px-36">
                <div className="flex flex-col gap-8 w-full">
                    <MainTitleXL className="text-primary-100">Gerencie suas finanças hoje<span className="text-primary-400">.</span></MainTitleXL>
                    <UnderlineSubtitle text="A %iCashiq%i disponibiliza meios para gerenciamento financeiro %irápidos%i e %ifáceis%i, que te auxiliarão no dia a dia." />
                    <IconButton text="Acesse seu Dashboard" buttonOptions={{ type: "button" }}>
                        <ArrowUpRightIcon size={20} />
                    </IconButton>
                </div>
                <HomeAnimation />
            </main>

            <main className="flex flex-row self-center justify-center items-center w-full gap-16 px-36">
                <div className="flex flex-col gap-8 w-full">
                    <MainTitle text="Registro de Gastos e Ganhos" />
                    <IconList listItems={iconListItems} />
                </div>
                <CircleDividerOrnament />
                <div className="flex flex-col gap-8 w-full h-fit">
                    <MainTitleXL className="text-primary-100">Soluções inteligentes<span className="text-primary-400">.</span></MainTitleXL>
                    <UnderlineSubtitle text="Nosso foco em %iinovação%i possibilita você a gerir suas finanças de maneira %iinteligente%i, a fim de %itransformar%i sua vida financeira." />
                </div>
            </main>

            <main className="flex flex-col self-center justify-center items-center w-full gap-16 px-36">
                <div className="flex flex-col gap-8 w-full items-center">
                    <MainTitleXL className="text-primary-100">Entre em Contato<span className="text-primary-400">.</span></MainTitleXL>
                    <Subtitle text="Ficou com alguma dúvida ou quer saber mais sobre nossos serviços? Entre em contato conosco!" />

                    <form className="flex flex-col items-center gap-8 w-full px-72">
                        <FormField label="Email:" id="Email" type="text" placeholder="johndoe@exemplo.com" />
                        <div className="flex flex-col w-full items-start gap-2">
                            <label className="font-poppins text-[1.5rem] font-bold text-primary-50">
                                Mensagem:
                            </label>
                            <textarea className="w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 bg-primary-50 max-h-96" placeholder="Escreva sua mensagem aqui..." />
                        </div>

                        <MainButton type="submit" text="Enviar" />
                    </form>
                </div>
            </main>

            <MainFooter />
        </section>
    )
}