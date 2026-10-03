export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "whatsapp" | "code" | "mail";
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-gamal-omar",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:mohammedgamal.tech@gmail.com", icon: "mail" },
  { label: "WhatsApp", href: "https://wa.me/201021595806", icon: "whatsapp" },
  { label: "GitHub", href: "https://github.com/mohamedgamalomar", icon: "github" },
  {
    label: "Codewars",
    href: "https://www.codewars.com/users/MohamedGamalOmar",
    icon: "code",
  },
];

export const contactInfo = {
  name: "Mohamed Gamal Omar",
  role: "Frontend Engineer",
  email: "mohammedgamal.tech@gmail.com",
  phone: "01021595806",
  location: "Cairo, Egypt",
  cvUrl: "https://drive.google.com/file/d/1zR6ommb-TkyD6K312Bo-mCZ0QOyxQiKR/view?usp=sharing",
};
