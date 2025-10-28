import { MainTitle } from "../../Title/MainTitle/MainTitle";
import { MainListObject } from "@/utils";

interface MainListProps {
    title: string;
    listItems: MainListObject[];
    secondaryStyle?: boolean;
}

export function MainList(props: MainListProps) {
    return (
        <div className="flex flex-col w-full gap-9 items-center">
            <MainTitle text={props.title} />
            <ul className="flex flex-col w-full gap-5">
                {props.listItems.map((item, index) => (
                    <li className="flex flex-row justify-between px-6 py-3 bg-[#141414] rounded-2xl text-amber-50 font-medium" key={index}>
                        {item.title}
                        <span className={props.secondaryStyle ? "text-[#EE2A2E]" : "text-primary-400" }>{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}