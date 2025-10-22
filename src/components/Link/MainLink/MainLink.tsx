import Link from "next/link";

interface MainLinkProps {
    text: string;
    href: string;
}

export function MainLink(props: MainLinkProps) {
    return <Link href={props.href} className="text-primary-400">{props.text}</Link>;
}