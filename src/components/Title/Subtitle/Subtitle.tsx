interface SubtitleProps {
    text: string;
}

export function Subtitle(props: SubtitleProps) {
    return <p className="font-poppins text-[1.25rem] font-normal text-[#999999]">{props.text}</p>;
}