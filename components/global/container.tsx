import { cn } from "@/lib/utils";
import React from "react";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
