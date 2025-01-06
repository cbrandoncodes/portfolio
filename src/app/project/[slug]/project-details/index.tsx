"use client";

import projectDetailsStyles from "./project-details.module.scss";

import { bottomIn, bottomInContainer } from "@/utils/variants";
import clsx from "clsx";
import { m } from "framer-motion";
import Image from "next/image";

type ProjectDetailsProps = {
  images: string[];
  name: string;
};

export default function ProjectDetails({ images, name }: ProjectDetailsProps) {
  return (
    <div className={projectDetailsStyles.details}>
      <m.div
        variants={bottomInContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={clsx(projectDetailsStyles.container, "container")}
      >
        {images.map((image, i) => (
          <m.div key={i} variants={bottomIn()}>
            <Image
              src={image}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              objectFit="contain"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </m.div>
        ))}
      </m.div>
    </div>
  );
}
