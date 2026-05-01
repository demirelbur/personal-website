export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
