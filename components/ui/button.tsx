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
    "border border-cyan-200/50 bg-[linear-gradient(135deg,rgba(34,211,238,1),rgba(96,165,250,0.95)_55%,rgba(139,92,246,0.92))] text-slate-950 shadow-[0_18px_48px_rgba(6,182,212,0.24)] hover:-translate-y-0.5 hover:shadow-[0_24px_65px_rgba(34,211,238,0.24)] focus-visible:outline-cyan-200",
  secondary:
    "border border-white/10 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.1] hover:shadow-[0_16px_50px_rgba(15,23,42,0.22)]",
  ghost:
    "text-slate-200 hover:-translate-y-0.5 hover:bg-white/5 hover:text-white",
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
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
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
