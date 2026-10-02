/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const title = "Mohamed Gamal Omar | Frontend Engineer | React.js & Vue.js Developer";
const description =
  "Mohamed Gamal Omar is a Frontend Engineer in Cairo, Egypt specializing in React.js, Vue.js, TypeScript, Next.js, Nuxt.js and modern web application development.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://mohamedgamal-tech.vercel.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:image",
        content: "https://mohamedgamal-tech.vercel.app/logo.png",
      },
      { name: "google-site-verification", content: "vpXqLBwnsuWd0saTLicJe0xNxnQC3T-4wxXtSoN-67k" },
    ],
    links: [{ rel: "canonical", href: "https://mohamedgamal-tech.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://mohamedgamal-tech.vercel.app/#person",
          name: "Mohamed Gamal Omar",
          givenName: "Mohamed",
          familyName: "Gamal Omar",
          alternateName: "Mohamed Gamal",
          url: "https://mohamedgamal-tech.vercel.app/",
          jobTitle: "Frontend Engineer",
          description:
            "Frontend Engineer specializing in React.js, Vue.js, TypeScript, Next.js, Nuxt.js and modern web applications.",
          image: "https://mohamedgamal-tech.vercel.app/logo.png",
          email: "mailto:mohammedgamal.tech@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cairo",
            addressCountry: "EG",
          },
          sameAs: [
            "https://www.linkedin.com/in/mohamed-gamal-omar",
            "https://github.com/mohamedgamalomar",
            "https://www.codewars.com/users/MohamedGamalOmar",
          ],
          knowsAbout: [
            "Frontend Development",
            "Web Development",
            "Software Engineering",
            "React.js",
            "Vue.js",
            "TypeScript",
            "JavaScript",
            "Next.js",
            "Nuxt.js",
            "Tailwind CSS",
            "SCSS",
            "Redux",
            "Pinia",
            "Vuex",
            "REST APIs",
            "Responsive Web Design",
            "Accessibility",
            "Web Performance",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://mohamedgamal-tech.vercel.app/#website",
          url: "https://mohamedgamal-tech.vercel.app/",
          name: "Mohamed Gamal Omar — Frontend Engineer",
          description:
            "Portfolio of Mohamed Gamal Omar, a Frontend Engineer specializing in React.js, Vue.js, TypeScript, Next.js and Nuxt.js.",
          publisher: {
            "@id": "https://mohamedgamal-tech.vercel.app/#person",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Contact />
    </>
  );
}
