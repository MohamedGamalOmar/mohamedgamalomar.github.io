import { contactInfo } from "@/data/social";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <p className="footer-brand-name">{contactInfo.name}</p>
            <p className="footer-brand-role">
              Frontend Engineer specializing in React.js, Vue.js, and Next.js.
            </p>
            <div className="footer-meta">
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <span>{contactInfo.location}</span>
            </div>
          </div>
          <SocialLinks />
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
          </span>
          <span>Built with React, TypeScript and Tailwind Css.</span>
        </div>
      </div>
    </footer>
  );
}
