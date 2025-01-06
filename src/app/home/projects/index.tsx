"use client";

import projectsStyles from "./projects.module.scss";

import { bottomIn, bottomInContainer } from "@/utils/variants";
import { works } from "@/data";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import slug from "slug";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomeProjects() {
  const router = useRouter();

  useEffect(() => {
    const works = document.querySelectorAll(`.${projectsStyles["work-img"]}`);

    function handleMouseOver() {
      document.querySelector(".cursor")?.classList.add("cursor--view");
    }
    function handleMouseLeave() {
      document.querySelector(".cursor")?.classList.remove("cursor--view");
    }

    works.forEach((work) => {
      work.addEventListener("mouseover", () => {
        handleMouseOver();
      });
      work.addEventListener("mouseleave", () => {
        handleMouseLeave();
      });
    });

    return () => {
      works.forEach((work) => {
        work.removeEventListener("mouseover", () => {
          handleMouseOver();
        });
        work.removeEventListener("mouseleave", () => {
          handleMouseLeave();
        });
      });
    };
  }, []);

  return (
    <section id="projects" className={projectsStyles.expertise}>
      <div className={clsx(projectsStyles.container, "container")}>
        <div className={projectsStyles.header}>
          <m.h2
            variants={bottomIn()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={clsx(projectsStyles.heading, "text-6xl")}
          >
            Featured Projects
          </m.h2>
          <m.p
            variants={bottomIn()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={clsx(projectsStyles["sub-heading"], "font-mono text-md")}
          >
            Here are some of my recent works
          </m.p>
        </div>
        <m.div
          variants={bottomInContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={projectsStyles.works}
        >
          {works.map(({ name, image, link }, i) => {
            const projectLink = `/project/${slug(name)}`;

            return (
              <m.div
                key={i}
                variants={bottomIn(0)}
                className={projectsStyles.work}
              >
                <Link href={projectLink} className={projectsStyles["work-img"]}>
                  <Image
                    src={image}
                    alt={name}
                    width={600}
                    height={600}
                    sizes="100vw"
                  />
                </Link>
                <div className={projectsStyles["work-meta"]}>
                  <Link
                    href={projectLink}
                    className={clsx(projectsStyles["work-title"], "text-2xl")}
                  >
                    {name}
                  </Link>
                  <a
                    href={link}
                    target="_blank"
                    className={clsx(projectsStyles["work-link"], "text-md")}
                  >
                    View Project <ArrowUpRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
