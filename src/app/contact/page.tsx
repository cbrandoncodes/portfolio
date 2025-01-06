import { baseMetadata } from "@/utils/base-metadata";
import ContactMain from "./contact-main";
import { Metadata } from "next";

export const metadata: Metadata = baseMetadata({
  title: "Contact - Brandon",
  description: "Get in touch with Brandon",
  slug: "/contact",
});

export default function Contact() {
  return <ContactMain />;
}
