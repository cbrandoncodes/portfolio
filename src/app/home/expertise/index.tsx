"use client";

import expStyles from "./expertise.module.scss";

import { bottomIn, rightLeft, rightLeftContainer } from "@/utils/variants";
import clsx from "clsx";
import { m } from "framer-motion";

export default function HomeExpertise() {
  return (
    <section id="expertise" className={expStyles.expertise}>
      <div className={clsx(expStyles.container, "container")}>
        <m.h2
          variants={bottomIn()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={clsx(expStyles.heading, "text-6xl")}
        >
          My Expertise
        </m.h2>
        <m.div
          variants={rightLeftContainer(0, 0.1, "50px")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={expStyles.content}
        >
          <m.div
            variants={rightLeft(0, "50px")}
            className={expStyles["content-box"]}
          >
            <div>
              <div className={expStyles["content-header"]}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 7l5 5l-5 5" />
                    <path d="M13 17l6 0" />
                  </svg>
                </span>
                <h3 className={clsx(expStyles["content-title"], "text-3xl")}>
                  Computer Programming
                </h3>
              </div>
              <p
                className={clsx(
                  expStyles["content-text"],
                  "text-sm leading-normal"
                )}
              >
                I have a robust understanding of both functional programming and
                object-oriented programming, demonstrated through practical
                expertise in Kotlin, JavaScript, and TypeScript.
              </p>
            </div>
          </m.div>
          <m.div
            variants={rightLeft(0, "50px")}
            className={expStyles["content-box"]}
          >
            <div>
              <div className={expStyles["content-header"]}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12z" />
                    <path d="M3 13h18" />
                    <path d="M8 21h8" />
                    <path d="M10 17l-.5 4" />
                    <path d="M14 17l.5 4" />
                  </svg>
                </span>
                <h3 className={clsx(expStyles["content-title"], "text-3xl")}>
                  Front-End Development
                </h3>
              </div>
              <p
                className={clsx(
                  expStyles["content-text"],
                  "text-sm leading-normal"
                )}
              >
                I build eye-catching UIs with HTML, CSS, JavaScript frameworks
                including React.js, Next.js, and Gatsby.js.
              </p>
            </div>
          </m.div>
          <m.div
            variants={rightLeft(0, "50px")}
            className={expStyles["content-box"]}
          >
            <div>
              <div className={expStyles["content-header"]}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 14l-3 -3l8 -8h6z" />
                    <path d="M14 21l-5 -5l5 -5h5l-5 5l5 5z" />
                  </svg>
                </span>
                <h3 className={clsx(expStyles["content-title"], "text-3xl")}>
                  Mobile Development
                </h3>
              </div>
              <p
                className={clsx(
                  expStyles["content-text"],
                  "text-sm leading-normal"
                )}
              >
                I build scalable mobile applications with React Native and Expo,
                showcasing a proven track record of expertise.
              </p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
