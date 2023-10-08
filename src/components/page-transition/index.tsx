"use client";

import pageTransitionStyles from "./page-transition.module.scss";

import { heightUp, heightUpContainer } from "@/utils/variants";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          key={pathname}
          variants={heightUpContainer(0, 0.1)}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={pageTransitionStyles["page-transition"]}
        >
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <m.div
                key={i}
                variants={heightUp()}
                className={pageTransitionStyles["block"]}
              />
            ))}
        </m.div>
        {children}
      </AnimatePresence>
    </LazyMotion>
  );
}
