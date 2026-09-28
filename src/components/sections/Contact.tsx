import { useState } from "react";
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { contactInfo } from "@/data/social";
import { isEmailConfigured, sendContactEmail } from "@/lib/emailjs";
import { SectionHeading } from "../ui/SectionHeading";
import { SlideIn } from "../motion/SlideIn";
import { SocialLinks } from "../ui/SocialLinks";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!emailPattern.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message = "Please write at least a short message (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    setStatusMessage("");

    try {
      await sendContactEmail({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setStatus("success");
      setStatusMessage("Thanks — your message was sent. I'll reply soon.");
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        !isEmailConfigured()
          ? `The mail service isn't configured yet. Please email me directly at ${contactInfo.email}.`
          : `Something went wrong while sending. Please try again or email ${contactInfo.email}.`,
      );
      console.error(error);
    }
  };

  const update = (key: keyof typeof values) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <section className="section" id="contact">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Build Something <em>Great</em>
            </>
          }
          subtitle="Open to frontend engineering roles and freelance collaborations."
        />

        <div className="contact-grid">
          <SlideIn from="left" className="contact-aside">
            <div className="contact-cards">
              <a className="contact-card" href={`mailto:${contactInfo.email}`}>
                <span className="contact-card-icon">
                  <Mail aria-hidden="true" />
                </span>
                <span>
                  <span className="contact-card-label">{"EMAIL:\u00a0"}</span>
                  <span className="contact-card-value">{contactInfo.email}</span>
                </span>
              </a>
              <a className="contact-card" href={`tel:+2${contactInfo.phone}`}>
                <span className="contact-card-icon">
                  <Phone aria-hidden="true" />
                </span>
                <span>
                  <span className="contact-card-label">{"PHONE:\u00a0"}</span>
                  <span className="contact-card-value">{contactInfo.phone}</span>
                </span>
              </a>
              <div className="contact-card">
                <span className="contact-card-icon">
                  <MapPin aria-hidden="true" />
                </span>
                <span>
                  <span className="contact-card-label">{"LOCATION:\u00a0"}</span>
                  <span className="contact-card-value">{contactInfo.location}</span>
                </span>
              </div>
            </div>
            <SocialLinks />
          </SlideIn>

          <SlideIn from="right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="field-label" htmlFor="contact-name">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  className="field-input"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name ? (
                  <span className="field-error" id="contact-name-error">
                    {errors.name}
                  </span>
                ) : null}
              </div>

              <div className="field">
                <label className="field-label" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  className="field-input"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email ? (
                  <span className="field-error" id="contact-email-error">
                    {errors.email}
                  </span>
                ) : null}
              </div>

              <div className="field">
                <label className="field-label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="field-textarea"
                  placeholder="Tell me about the role or project…"
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message ? (
                  <span className="field-error" id="contact-message-error">
                    {errors.message}
                  </span>
                ) : null}
              </div>

              <div aria-live="polite">
                {status === "success" ? (
                  <p className="form-status form-status-success">
                    <CheckCircle2 aria-hidden="true" />
                    {statusMessage}
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="form-status form-status-error">
                    <AlertCircle aria-hidden="true" />
                    {statusMessage}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="btn-icon" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
