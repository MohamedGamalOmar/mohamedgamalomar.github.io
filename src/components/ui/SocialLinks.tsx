import { Github, Linkedin, Mail, MessageCircle, Terminal } from "lucide-react";
import { socialLinks } from "@/data/social";

const icons = {
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle,
  code: Terminal,
  mail: Mail,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={className ? `social-links ${className}` : "social-links"}>
      {socialLinks.map((link) => {
        const Icon = icons[link.icon];
        const external = link.href.startsWith("http");
        return (
          <li key={link.label}>
            <a
              className="social-link"
              href={link.href}
              aria-label={link.label}
              title={link.label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
