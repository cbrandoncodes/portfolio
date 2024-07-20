"use client";

import heroStyles from "./hero.module.scss";

import { bottomIn, fadeIn } from "@/utils/variants";
import buttonAnimation from "@/lotties/button.json";
import clsx from "clsx";
import Lottie from "lottie-react";
import { m } from "framer-motion";

export default function HomeHero() {
  return (
    <section id="hero" className={clsx(heroStyles.hero)} data-theme="dark">
      <div className={heroStyles["bg-overlay"]} />

      <div className={clsx(heroStyles.container, "container")}>
        <div className={heroStyles["shine-container"]}>
          <div className={heroStyles["shine"]}>
            <div className={heroStyles["circle-yel"]} />
          </div>
        </div>

        <div className={clsx(heroStyles.main)}>
          <h1 className={clsx(heroStyles.heading, "font-sans")}>BRANDON</h1>
          <m.p
            variants={bottomIn()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={clsx(heroStyles["sub-heading"], "font-mono")}
          >
            {/* <span>Software Developer</span>
            <span>|</span> */}
            <span>Full-Stack Developer</span>
          </m.p>
          <m.button
            aria-label="scroll to next section"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={clsx(heroStyles["scroll"], "button")}
            onClick={() => {
              document
                .querySelector("#expertise")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Lottie animationData={buttonAnimation} loop size={20} />
          </m.button>
        </div>
      </div>
    </section>
  );
}
