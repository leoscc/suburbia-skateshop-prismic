import clsx from "clsx";
import { ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h1",
  size = "lg",
  className,
  children,
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-sans uppercase",
        size === "xl" && "~text-4xl/8xl",
        size === "lg" && "~text-4xl/7xl",
        size === "md" && "~text-3xl/5xl",
        size === "sm" && "~text-2xl/4xl",
        size === "xs" && "~text-lg/xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
