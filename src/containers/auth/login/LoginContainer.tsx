"use client";

// Components
import { MainButton } from "@/components/Button/";
import { FormField } from "@/components/Form/";
import { DescriptionLink } from "@/components/Link/";
import { Logo, MainTitle, Subtitle } from "@/components/Title/";

// Utils
import { loginSchema, LoginFormFields, useNotification, useAppForm, fetchHelper } from "@/utils/";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export function LoginContainer() {
    const { register, handleSubmitWithNotify, formState: { errors, isSubmitting, isValid }, } = useAppForm<LoginFormFields>(loginSchema);
    const router = useRouter();
    const [cookies] = useCookies(["token"]);
    
    const onSubmit = async (data: LoginFormFields) => {
        try {
            const response = await fetchHelper(`/user/${data.email}/${data.password}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });

            if (response.status !== 201) throw new Error("Erro ao logar. Tente novamente.");

            notify("Login realizado com sucesso!", "success");
            router.push("/dashboard");
        } catch (error) {
            notify("Erro ao logar. Tente novamente.", "error");
        }
    };
    
    const { notify } = useNotification();
    const isDisabled = isSubmitting || errors.email || errors.password || !isValid ? true : false;

    return (
        <div className="flex flex-col items-center justify-center gap-4 w-fit h-full">
            <Logo />
            <section className="flex flex-col items-center justify-center gap-1 w-fit">
                <MainTitle text="Faça o Seu Login" />
                <Subtitle text="Utilize suas credenciais para acessar sua conta." />
            </section>
            <form className="flex flex-col items-center gap-8 w-full" onSubmit={handleSubmitWithNotify(onSubmit)}>
                <FormField label="Email:" id="email" type="text" {...register("email")} error={errors.email} />
                <FormField label="Senha:" id="password" type="password" {...register("password")} error={errors.password} />

                <DescriptionLink description="Não possui uma conta?" href="/register" linkText="Registre-se" />
                <MainButton type="submit" disabled={isDisabled}  text={isSubmitting ? "Entrando..." : "Entrar"} />
            </form>
        </div>
    );
}