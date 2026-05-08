export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "github", url: "https://github.com/demirelbur", label: "GitHub" },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/demirelbu",
    label: "LinkedIn",
  },
  {
    platform: "scholar",
    url: "https://scholar.google.com/citations?user=Bng9E5UAAAAJ",
    label: "Google Scholar",
  },
  {
    platform: "email",
    url: "mailto:burak.demirel@protonmail.com",
    label: "Email",
  },
];
