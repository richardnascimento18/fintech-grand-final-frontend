interface MainTitleProps {
    text: string;
}

export function MainTitle(props: MainTitleProps) {
    return <h2 className="font-poppins text-[3rem] font-medium text-primary-50">{props.text}</h2>;
}