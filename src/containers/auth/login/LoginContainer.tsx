"use client";

// Components
import { MainButton } from "@/components/Button/";
import { FormField } from "@/components/Form/";
import { DescriptionLink } from "@/components/Link/";
import { Logo, MainTitle, Subtitle } from "@/components/Title/";

// Libraries
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

// Utils
import { loginSchema, LoginFormFields, useNotification } from "@/utils/";

export function LoginContainer() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isReady } } = useForm<LoginFormFields>({
        resolver: zodResolver(loginSchema),
        mode: "all",
    });
    
    const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
        try {
            console.log(data);
        } catch (error) {
            notify(error instanceof Error ? error.message : "Erro ao efetuar login.", "error");
        }
    };
    
    const { notify } = useNotification();
    const isDisabled = isSubmitting || errors.email || errors.password || isReady ? true : false;

    return (
        <div className="flex flex-col items-center justify-center gap-4 w-fit h-full">
            <Logo />
            <section className="flex flex-col items-center justify-center gap-1 w-fit">
                <MainTitle text="Faça o Seu Login" />
                <Subtitle text="Utilize suas credenciais para acessar sua conta." />
            </section>
            <form className="flex flex-col items-center gap-8 w-full" onSubmit={handleSubmit(onSubmit)}>
                <FormField label="Email:" id="email" type="text" {...register("email")} error={errors.email} />
                <FormField label="Senha:" id="password" type="password" {...register("password")} error={errors.password} />

                <DescriptionLink description="Não possui uma conta?" href="/register" linkText="Registre-se" />
                <MainButton buttonOptions={{ type: "submit", disabled: isDisabled }} text={isSubmitting ? "Entrando..." : "Entrar"} />
            </form>
        </div>
    );
}