import ContactMessage from "@/templates/contact-message";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

export async function sendContactMessage(
  email: string,
  name: string,
  message: string
) {
  const transporter = nodemailer.createTransport({
    host: process.env.FROM_EMAIL_SMTP,
    port: parseInt(process.env.FROM_EMAIL_PORT ?? "587"),
    secure: true,
    service: "Outlook365",
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_EMAIL_PASSWORD,
    },
  });

  const emailHtml = render(
    <ContactMessage message={message} name={name} email={email} />
  );

  const options = {
    from: {
      name: "My Portfolio",
      address: process.env.FROM_EMAIL!,
    },
    to: process.env.TO_EMAIL!,
    subject: "New Portfolio Contact Message",
    html: emailHtml,
  };

  return await transporter.sendMail(options);
}
