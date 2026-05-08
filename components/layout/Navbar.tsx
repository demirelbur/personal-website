"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";
import { useTheme } from "@/lib/theme";
import { Container } from "./Container";
import { AskAIButton, AskAIPanel, useAskAI } from "@/components/AskAI";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const askAI = useAskAI();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-[var(--duration-base)] ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
        >
          <img
            src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
            alt={profile.name}
            className="h-7 w-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`text-sm transition-colors duration-[var(--duration-fast)] ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-1 h-1 rounded-full bg-accent" />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <AskAIButton onClick={askAI.open} />
          <button
            onClick={toggle}
            className="p-2 rounded-[var(--radius-sm)] text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors duration-[var(--duration-fast)]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-secondary"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </Container>

      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-b border-border md:hidden">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  askAI.open();
                }}
                className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 cursor-pointer"
              >
                Ask AI
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
    <AskAIPanel isOpen={askAI.isOpen} onClose={askAI.close} />
    </>
  );
}
