import React from "react";

interface IconListObject {
    icon: React.ReactNode;
    title: string;
}

interface IconListProps {
    listItems: IconListObject[];
}

export function IconList(props: IconListProps) {
    return (
        <ul className="flex flex-col w-full gap-4">
            {props.listItems.map((item, index) => (
                <li className="flex flex-row items-center gap-4 text-[#999999] text-xl" key={index}>
                    <span className="text-primary-400">{item.icon}</span>
                    {item.title}
                </li>
            ))}
        </ul>
    );
}