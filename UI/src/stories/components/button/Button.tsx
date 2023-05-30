import clsx from "clsx";
import React from "react";

interface ButtonProps {
  label?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Button = ({
  label,
  size,
  className = "bg-blue-500 hover:bg-blue-800 text-white font-bold",
  ...props
}: ButtonProps) => {
  const xs = "py-1 px-2 rounded-md";
  const sm = "py-2 px-3 rounded-md";
  const md = "py-2 px-4 rounded-md";
  const lg = "py-2 px-5 rounded-md";
  const xl = "py-2 px-6 rounded-md";
  return (
    <>
      <button
        className={clsx({
          [xs]: size === "xs",
          [sm]: size === "sm",
          [md]: size === "md",
          [lg]: size === "lg",
          [xl]: size === "xl",
          [`${className}`]: true,
        })}
      >
        {label}
      </button>
    </>
  );
};
