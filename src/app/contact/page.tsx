import contactStyles from "./contact.module.scss";

import { baseMetadata } from "@/utils/base-metadata";
import ContactForm from "./contact-form";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = baseMetadata({
  title: "Contact - Brandon",
  description: "Get in touch with Brandon",
  slug: "/contact",
});

export default function Contact() {
  return (
    <section className={contactStyles.hero}>
      <div className={clsx(contactStyles.container, "container")}>
        <div className={contactStyles["email"]}>
          <h2 className={contactStyles.heading}>Email</h2>
          <a href="mailto:brandon.chikezie@outlook.com" className="text-md">
            brandon.chikezie@outlook.com
          </a>
        </div>
        <div className={contactStyles.content}>
          <h2 className={contactStyles.heading}>Get in touch</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
