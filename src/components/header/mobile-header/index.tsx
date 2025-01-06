import mobileHeaderStyles from "./mobile-header.module.scss";

import { headerFadeIn, slideIn } from "@/utils/variants";
import { navLinks } from "@/data";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

type MobileHeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
};

export default function MobileHeader({ open, setOpen }: MobileHeaderProps) {
  useEffect(() => {
    const navItems = document.querySelectorAll(
      `.${mobileHeaderStyles["nav-item"]} a`
    );

    const handleButtonHover = () => {
      document.querySelector(".cursor")?.classList.add("hover");
    };
    const handleButtonLeave = () => {
      document.querySelector(".cursor")?.classList.remove("hover");
    };

    navItems.forEach((button) => {
      button.addEventListener("mouseover", handleButtonHover);
      button.addEventListener("mouseleave", handleButtonLeave);
    });

    return () => {
      navItems.forEach((button) => {
        button?.removeEventListener("mouseover", handleButtonHover);
        button?.removeEventListener("mouseleave", handleButtonLeave);
      });
    };
  }, [open]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {open && (
          <m.div
            variants={headerFadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={mobileHeaderStyles["mobile-header"]}
          >
            <ul className={mobileHeaderStyles["nav-items"]}>
              {navLinks.map(({ href, name }, i) => (
                <li key={i} className={mobileHeaderStyles["nav-item"]}>
                  <Link href={href} onClick={() => setOpen(false)}>
                    <m.span
                      variants={slideIn((i + 1) * 0.075)}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {name}
                    </m.span>
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
