import { MainLink } from "../MainLink/MainLink";

interface DescriptionLinkProps {
    description: string;
    href: string;
    linkText: string;
}

export function DescriptionLink(props: DescriptionLinkProps) {
    return (
        <p className="font-poppins text-[1.25rem] font-normal text-[#999999] text-center">
            {props.description} {" "}
            <MainLink href={props.href} text={props.linkText} />
        </p>
    );
}