import { cn } from "@/lib/utils";
import React from "react";

export const DhakIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
    >
      <path d="M12 2a5 5 0 0 0-5 5v10a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
      <path d="M12 2v20" />
      <path d="M7 12h10" />
      <path d="M17 7a5 5 0 0 0-10 0" />
    </svg>
  );
};
