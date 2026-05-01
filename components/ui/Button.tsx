import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-sm font-medium transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]";

  const variants = {
    primary:
      "px-5 py-2.5 rounded-[var(--radius-sm)] bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 shadow-[var(--shadow-sm)]",
    secondary:
      "px-5 py-2.5 rounded-[var(--radius-sm)] border border-border text-text-secondary hover:text-text-primary hover:border-text-muted hover:-translate-y-0.5",
    text: "text-accent hover:text-accent-hover",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {variant === "text" && <span className="ml-1">→</span>}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
      {variant === "text" && <span className="ml-1">→</span>}
    </button>
  );
}
