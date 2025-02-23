import clsx from "clsx";
import { ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: ReactNode;
  className?: string;
};

const sizeClasses = {
  xl: "~text-4xl/8xl",
  lg: "~text-4xl/7xl",
  md: "~text-3xl/5xl",
  sm: "~text-2xl/4xl",
  xs: "~text-lg/xl",
};

export function Heading({
  as: Comp = "h1",
  size = "lg",
  className,
  children,
}: HeadingProps) {
  return (
    <Comp className={clsx("font-sans uppercase", sizeClasses[size], className)}>
      {children}
    </Comp>
  );
}
