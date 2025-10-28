import { Logo } from "../../Title/Logo/Logo";

export function MainFooter() {
    return (
        <footer className="flex flex-row items-center justify-center gap-5 py-24 border-t border-primary-400">
            <Logo />
            <p className="text-primary-400">© Todos os direitos reservados.</p>
        </footer>
    )
}