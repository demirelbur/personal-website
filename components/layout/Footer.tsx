import { Container } from "./Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. {copy.ui.copyright}
        </p>
        <SocialIcons />
      </Container>
    </footer>
  );
}
