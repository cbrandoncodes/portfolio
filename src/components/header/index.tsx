"use client";

import headerStyles from "./header.module.scss";

import { baseTransition } from "@/utils/variants";
import { themeStoreKey } from "@/utils";
import { navLinks } from "@/data";
import useLocalStorage from "@/hooks/use-local-storage";
import Logo from "@/components/logo";
import MobileHeader from "./mobile-header";
import clsx from "clsx";
import { m, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment() ?? "home";
  const { scrollY } = useScroll();
  const [scrollYPos, setScrollYPos] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const scrollThreshold = 40;
  const hideNav = scrollYPos > scrollThreshold && scrollDir === "down";

  const [theme, setTheme] = useLocalStorage<"light" | "dark" | null>(
    themeStoreKey,
    () => {
      if (typeof localStorage !== "undefined") {
        return (localStorage?.getItem(themeStoreKey) as any) ?? "light";
      }

      return "light";
    }
  );
  const [navOpen, setNavOpen] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYPos(latest);
    latest < scrollYPos ? setScrollDir("up") : setScrollDir("down");
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.key === "Escape" && navOpen && setNavOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const calculateSettingAsThemeString = (
      localStorageTheme: string | null,
      systemSettingDark: MediaQueryList
    ) => {
      if (localStorageTheme !== null) {
        return localStorageTheme;
      }

      if (systemSettingDark.matches) {
        return "dark";
      }

      return "light";
    };

    const newTheme = calculateSettingAsThemeString(
      theme,
      window.matchMedia("(prefers-color-scheme: dark)")
    );
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  }, [theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    let direction: "up" | "down" | undefined = "up";
    let prevYPosition = Infinity;

    const setScrollDirection = () => {
      if (window?.scrollY > prevYPosition) {
        direction = "down";
      } else if (window?.scrollY < prevYPosition) {
        direction = "up";
      } else {
        direction = undefined;
      }

      prevYPosition = window?.scrollY;
    };

    const getTargetSection = (target: Element) => {
      if (direction === "up") return target;

      const next = target.nextElementSibling;
      if (next) {
        return next;
      } else {
        return target;
      }
    };

    const shouldUpdate = (entry: IntersectionObserverEntry) => {
      if (direction === "down" && !entry.isIntersecting) {
        return true;
      }

      if (direction === "up" && entry.isIntersecting) {
        return true;
      }

      return false;
    };

    const updateColors = (target: any) => {
      const theme =
        (target as any)?.dataset?.theme ??
        document.querySelector("html")?.dataset?.theme ??
        "light";
      setIsWhite(theme !== "light");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          setScrollDirection();

          if (!shouldUpdate(entry)) return;

          const target = getTargetSection(entry.target);
          updateColors(target);
        });
      },
      {
        rootMargin: "-36px",
        threshold: 0,
      }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname, theme]);

  return (
    <m.div
      className={clsx(headerStyles.header, {
        [headerStyles["header--light"]]: isWhite,
        [headerStyles["header--open"]]: navOpen,
      })}
      animate={{ y: hideNav ? -100 : 0 }}
      transition={baseTransition}
    >
      <div className={clsx(headerStyles.container, "container")}>
        <div className={headerStyles.logo}>
          <Logo />
        </div>

        <div>
          <nav className={clsx(headerStyles["nav-items"])}>
            {navLinks.map(({ name, href }, i) => (
              <div className={clsx(headerStyles["nav-item"])} key={i}>
                <Link
                  href={href}
                  className={clsx(
                    "text-md",
                    segment === name ? headerStyles.active : ""
                  )}
                >
                  <span>{name}</span>
                </Link>
              </div>
            ))}
          </nav>
          <label
            tabIndex={0}
            className={clsx(
              headerStyles["theme-toggle"],
              {
                [headerStyles["theme-toggle--light"]]: theme === "light",
                [headerStyles["theme-toggle--dark"]]: theme !== "light",
              },
              "button"
            )}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <span />
          </label>
          <button
            className={clsx(
              headerStyles["nav-toggle"],
              {
                [headerStyles["nav-toggle--open"]]: navOpen,
              },
              "button"
            )}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <MobileHeader open={navOpen} setOpen={setNavOpen} />
    </m.div>
  );
}
