import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-8 md:py-16 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
