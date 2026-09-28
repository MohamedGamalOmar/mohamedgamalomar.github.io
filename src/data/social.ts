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
  { label: "GitHub", href: "https://github.com/mohamedgamalomar", icon: "github" },
  { label: "WhatsApp", href: "https://wa.me/201021595806", icon: "whatsapp" },
  {
    label: "Codewars",
    href: "https://www.codewars.com/users/MohamedGamalOmar",
    icon: "code",
  },
  { label: "Email", href: "mailto:mohammedgamal.tech@gmail.com", icon: "mail" },
];

export const contactInfo = {
  name: "Mohamed Gamal",
  role: "Frontend Engineer",
  email: "mohammedgamal.tech@gmail.com",
  phone: "01021595806",
  location: "Cairo, Egypt",
  cvUrl:
    "https://drive.google.com/file/d/1-jahzOAbzaBGRj2wnbeLaDzYhU12-pt2/view?usp=sharing",
};
