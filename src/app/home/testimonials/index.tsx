"use client";

import testimonialsStyles from "./testimonials.module.scss";

import { socials, testimonials } from "@/data";
import { bottomIn, rightLeft, rightLeftContainer } from "@/utils/variants";
import clsx from "clsx";
import { Quote } from "lucide-react";
import { m } from "framer-motion";
import Link from "next/link";

export default function HomeTestimonials() {
  return (
    <div id="testimonials" className={testimonialsStyles.testimonials}>
      <div className={clsx("container", testimonialsStyles.container)}>
        <div className={testimonialsStyles["content"]}>
          <div className={testimonialsStyles.contact}>
            <div className={testimonialsStyles["contact-header"]}>
              <m.h2
                variants={bottomIn(0, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={clsx(
                  testimonialsStyles["contact-heading"],
                  "text-4xl"
                )}
              >
                Available for contract projects
              </m.h2>
              <m.h3
                variants={bottomIn(0, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={clsx(
                  testimonialsStyles["contact-sub-heading"],
                  "font-mono text-sm"
                )}
              >
                If you need my services for a project or you&apos;d like to
                connect, you can reach me through{" "}
                <Link
                  href="mailto:brandon.chikezie@outlook.com"
                  className="link font-mono"
                >
                  <span>email</span>
                </Link>{" "}
                or any of my social media profiles below.
              </m.h3>
            </div>
            <m.ul
              variants={rightLeftContainer(0, 0.1, "25px")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={testimonialsStyles["socials"]}
            >
              {socials.map(({ name, url }, i) => (
                <m.li variants={rightLeft(0, "25px")} key={i}>
                  <Link href={url} target="_blank" className="text-sm">
                    {name}
                  </Link>
                </m.li>
              ))}
            </m.ul>
          </div>
          <div className={testimonialsStyles["testimonials-list"]}>
            {testimonials.map(({ name, role, testimonial }, i) => (
              <m.div
                key={i}
                variants={bottomIn(0, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={testimonialsStyles["testimonial"]}
              >
                <div className={testimonialsStyles["testimonial-header"]}>
                  <span>
                    <Quote size={36} strokeWidth={2} />
                  </span>
                </div>
                <div className={testimonialsStyles["testimonial-content"]}>
                  <p className="text-md">{testimonial}</p>
                </div>
                <div className={testimonialsStyles["testimonial-footer"]}>
                  <span className="text-xs font-mono">{name}</span>
                  <span className="text-xs font-mono">{role}</span>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
