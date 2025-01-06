"use client";

import projectHeroStyles from "./project-hero.module.scss";

import { bottomIn, bottomInContainer } from "@/utils/variants";
import { ArrowLeft, MoveRight } from "lucide-react";
import clsx from "clsx";
import { m } from "framer-motion";
import { useRouter } from "next/navigation";

type ProjectHeroProps = {
  name: string;
  overview?: string;
  year: number;
  details: string[];
  scope?: string[];
  technologies: string[];
  link?: string;
};

export default function ProjectHero({
  name,
  overview,
  year,
  details,
  scope = [],
  technologies,
  link,
}: ProjectHeroProps) {
  const router = useRouter();

  return (
    <div className={projectHeroStyles.hero}>
      <div className={clsx(projectHeroStyles.container, "container")}>
        <m.header className={clsx(projectHeroStyles.header, "text-sm")}>
          <m.button
            variants={bottomIn(0, 10)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className={clsx(projectHeroStyles.navigation, "button")}
            onClick={() => router.back()}
          >
            <ArrowLeft size={16} strokeWidth={2} />{" "}
            <span className="font-mono text-sm">Back</span>
          </m.button>
          <div className={projectHeroStyles.content}>
            <div>
              <m.span
                variants={bottomIn(0, 10)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                Client: {name}
              </m.span>
              {overview && (
                <m.span
                  variants={bottomIn(0, 10)}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true }}
                >
                  {overview}
                </m.span>
              )}
            </div>
            <m.span
              variants={bottomIn(0, 10)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              {year}
            </m.span>
          </div>
        </m.header>
        <div className={projectHeroStyles.overview}>
          <m.h1
            variants={bottomIn(0.25, 10)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={clsx(projectHeroStyles.title, "text-4xl")}
          >
            {name}
          </m.h1>
          <div className={projectHeroStyles.details}>
            <m.div
              variants={bottomIn(0.25, 10)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {details.map((detail, i) => (
                <div
                  key={i}
                  className={clsx(projectHeroStyles.detail, "text-sm")}
                >
                  {detail}
                </div>
              ))}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  className={clsx(projectHeroStyles.detail, "text-sm")}
                >
                  {link}
                </a>
              )}
            </m.div>
            <m.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                type: "spring",
                bounce: 0,
              }}
              viewport={{ once: true }}
              className={projectHeroStyles.divide}
            />
            <div className={projectHeroStyles.scope}>
              <div>
                <m.h3
                  variants={bottomIn()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={clsx("text-sm", projectHeroStyles["scope-title"])}
                >
                  Scope
                </m.h3>
                <m.ul
                  variants={bottomInContainer(0, 0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-mono text-xs"
                >
                  {scope.map((item, i) => (
                    <m.li key={i} variants={bottomIn()}>
                      <MoveRight size={12} strokeWidth={2} />
                      {item}
                    </m.li>
                  ))}
                </m.ul>
              </div>
              <div>
                <m.h3
                  variants={bottomIn()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={clsx("text-sm", projectHeroStyles["scope-title"])}
                >
                  Tech
                </m.h3>
                <m.ul
                  variants={bottomInContainer(0, 0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-mono text-xs"
                >
                  {technologies.map((item, i) => (
                    <m.li key={i} variants={bottomIn()}>
                      <MoveRight size={12} strokeWidth={2} />
                      {item}
                    </m.li>
                  ))}
                </m.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
