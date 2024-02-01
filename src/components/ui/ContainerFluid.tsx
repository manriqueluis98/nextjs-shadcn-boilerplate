import { cn } from "@/lib/utils";
import React from "react";

type ContainerFluidProps = React.HTMLProps<HTMLDivElement>;

export default function ContainerFluid({
  children,
  ...props
}: ContainerFluidProps) {
  return (
    <div
      {...props}
      className={cn(
        " w-full max-w-[1440px]  px-6 md:px-6 xl:px-10",
        props.className
      )}
    >
      {children}
    </div>
  );
}
