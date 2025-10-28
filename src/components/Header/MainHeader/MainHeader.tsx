import { Logo } from "../../Title/Logo/Logo";

export function MainHeader() {
    return (
        <header className="flex flex-row justify-between items-center w-full">
            <Logo />
            <p className="text-primary-50 text-2xl font-medium">Bem-vindo de volta, User</p>
        </header>
    );
}