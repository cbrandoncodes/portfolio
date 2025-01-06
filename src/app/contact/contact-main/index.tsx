"use client";

import contactStyles from "./contact.module.scss";

import { fadeIn, fadeInContainer } from "@/utils/variants";
import ContactForm from "./contact-form";
import clsx from "clsx";
import { m } from "framer-motion";

export default function ContactMain() {
  return (
    <section className={contactStyles.hero}>
      <div className={clsx(contactStyles.container, "container")}>
        <m.div
          variants={fadeInContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={contactStyles["email"]}
        >
          <m.h2 variants={fadeIn} className={contactStyles.heading}>
            Email
          </m.h2>
          <m.a
            variants={fadeIn}
            href="mailto:brandon.chikezie@outlook.com"
            className="text-md"
          >
            brandon.chikezie@outlook.com
          </m.a>
        </m.div>
        <m.div
          variants={fadeInContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={contactStyles.content}
        >
          <m.h2 variants={fadeIn} className={contactStyles.heading}>
            Get in touch
          </m.h2>
          <m.div variants={fadeIn}>
            <ContactForm />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
