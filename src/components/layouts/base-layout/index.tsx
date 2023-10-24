"use client";

import baseLayoutStyles from "./base-layout.module.scss";

import useDeviceDetect from "@/hooks/use-device-detect";
import Footer from "@/components/footer";
import Header from "@/components/header";
import clsx from "clsx";
import { m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile } = useDeviceDetect();

  const [scrollTopButtonVisible, setScrollTopButtonVisible] = useState(false);
  const toTopRef = useRef(null);

  useEffect(() => {
    // scroll top button
    const handleScroll = () => {
      if (window.scrollY > 360) {
        setScrollTopButtonVisible(true);
      } else {
        setScrollTopButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cursor
    let curs: HTMLDivElement = document.querySelector(".cursor")!;
    let initCursor = false;

    const handleMove = (e: MouseEvent) => {
      var mouseX = e.clientX;
      var mouseY = e.clientY;

      if (!initCursor) {
        (window as any)?.TweenLite?.to(curs, 0.3, {
          opacity: 1,
        });
        initCursor = true;
      }

      (window as any)?.TweenLite?.to(curs, 0.3, {
        top: mouseY + "px",
        left: mouseX + "px",
      });
    };

    const handleMouseOut = () => {
      (window as any)?.TweenLite?.to(curs, 0.3, {
        opacity: 0,
      });
      initCursor = false;
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    // cursor hover
    const buttons = [
      ...Array.from(document.querySelectorAll("a")),
      ...Array.from(document.querySelectorAll(".button")),
    ];

    const handleButtonHover = () => {
      document.querySelector(".cursor")?.classList.add("hover");
    };
    const handleButtonLeave = () => {
      document.querySelector(".cursor")?.classList.remove("hover");
    };

    buttons.forEach((button) => {
      button.addEventListener("mouseover", handleButtonHover);
      button.addEventListener("mouseleave", handleButtonLeave);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseover", handleButtonHover);
        button.removeEventListener("mouseleave", handleButtonLeave);
      });
    };
  }, []);

  return (
    <>
      <Header key={1} />
      {!isMobile && <div className="cursor" />}
      <m.button
        ref={toTopRef}
        name="scroll to top"
        className={clsx(baseLayoutStyles["to-top"], "button")}
        animate={{
          opacity: scrollTopButtonVisible ? 1 : 0,
          y: scrollTopButtonVisible ? 0 : 10,
          pointerEvents: scrollTopButtonVisible ? "all" : "none",
        }}
        transition={{ duration: 0.2 }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ArrowUp size={22} strokeWidth={2} />
      </m.button>
      <main key={2} className="app-content">
        {children}
      </main>
      <Footer key={3} />
    </>
  );
}
