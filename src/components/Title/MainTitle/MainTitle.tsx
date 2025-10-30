import React from "react";

interface MainTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
}

export function MainTitle(props: MainTitleProps) {
    return <h2 className="font-poppins text-5xl font-medium text-primary-50">{props.text}</h2>;
}