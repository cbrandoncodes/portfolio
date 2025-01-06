"use client";

import heroStyles from "./hero.module.scss";

import { fadeIn, fadeInContainer } from "@/utils/variants";
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

        <m.div
          variants={fadeInContainer(0, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={clsx(heroStyles.main)}
        >
          <m.h1
            variants={fadeIn}
            className={clsx(heroStyles.heading, "font-sans")}
          >
            I&apos;M BRANDON
          </m.h1>
          <m.p
            variants={fadeIn}
            className={clsx(heroStyles["sub-heading"], "font-mono")}
          >
            <span>Software Developer</span>
            <span>|</span>
            <span>Open Source / Web3 Enthusiast</span>
            <span>|</span>
            <span>Problem Solver</span>
          </m.p>
          <m.button
            aria-label="scroll to next section"
            variants={fadeIn}
            className={clsx(heroStyles["scroll"], "button")}
            onClick={() => {
              document
                .querySelector("#expertise")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Lottie animationData={buttonAnimation} loop size={20} />
          </m.button>
        </m.div>
      </div>
    </section>
  );
}
