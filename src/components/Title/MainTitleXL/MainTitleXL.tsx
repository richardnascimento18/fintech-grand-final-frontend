import React from "react";

interface MainTitleXLProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function MainTitleXL({ children, className, ...props }: MainTitleXLProps) {
    return <h2 className={"font-poppins text-7xl font-medium text-primary-50 " + className }>{children}</h2>;
}