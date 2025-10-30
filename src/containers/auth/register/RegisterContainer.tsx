"use client";

// Components
import { MainButton } from "@/components/Button/";
import { FormField } from "@/components/Form/";
import { DescriptionLink } from "@/components/Link/";
import { Logo, MainTitle, Subtitle } from "@/components/Title/";

// Utils
import { registerSchema, RegisterFormFields, useAppForm } from "@/utils/";

export function RegisterContainer() {
    const { register, handleSubmitWithNotify, formState: { errors, isSubmitting, isValid }, } = useAppForm<RegisterFormFields>(registerSchema);

    const onSubmit = async (data: RegisterFormFields) => {
        console.log(data);
    };
    
    const isDisabled = isSubmitting || errors.email || errors.password || errors.confirmPassword || !isValid ? true : false;

    return (
        <div className="flex flex-col items-center justify-center gap-4 w-fit h-full">
            <Logo />
            <section className="flex flex-col items-center justify-center gap-1 w-fit">
                <MainTitle text="Cadastre-se aqui" />
                <Subtitle text="Digite suas informações para criar uma conta já!" />
            </section>
            <form className="flex flex-col items-center gap-8 w-full" onSubmit={handleSubmitWithNotify(onSubmit)}>
                <FormField label="Email:" id="email" type="text" {...register("email")} error={errors.email} />
                <FormField label="Senha:" id="password" type="password" {...register("password")} error={errors.password} />
                <FormField label="Confirme a Senha:" id="confirmPassword" type="password" {...register("confirmPassword")} error={errors.confirmPassword} />

                <DescriptionLink description="Já possui uma conta? Faça login" href="/login" linkText="por aqui." />
                <MainButton type="submit" disabled={isDisabled} text={isSubmitting ? "Cadastrando..." : "Cadastrar"} />
            </form>
        </div>
    );
}