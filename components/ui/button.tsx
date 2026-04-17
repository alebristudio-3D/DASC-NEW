import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type SharedProps = {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-300 text-slate-950 hover:bg-cyan-200 focus-visible:outline-cyan-200",
  secondary:
    "border border-white/12 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-white/10",
  ghost: "text-slate-200 hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm md:px-6 md:text-base",
};

export function buttonStyles({
  className,
  size = "md",
  variant = "primary",
}: SharedProps) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & SharedProps;

export function ButtonLink({
  className,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonStyles({ className, size, variant })} {...props} />
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedProps;

export function Button({
  className,
  size,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ className, size, variant })}
      {...props}
    />
  );
}

