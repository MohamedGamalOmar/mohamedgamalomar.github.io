import emailjs from "@emailjs/browser";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const serviceId = import.meta.env["VITE_EMAILJS_SERVICE_ID"] as string | undefined;
const templateId = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string | undefined;
const publicKey = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined;

export const isEmailConfigured = () =>
  Boolean(serviceId && templateId && publicKey);

/**
 * Sends the contact form through EmailJS.
 * Credentials come from environment variables only — never hardcoded.
 */
export async function sendContactEmail(payload: ContactPayload) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      reply_to: payload.email,
      message: payload.message,
    },
    { publicKey },
  );
}
