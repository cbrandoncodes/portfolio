import { Variant } from "framer-motion";

export const baseTransition = { duration: 1.2, type: "spring", bounce: 0 };

export const heightUp = (delay?: number) => {
  const args = delay ? { delay: delay } : {};

  return {
    hidden: { height: "100%" },
    visible: {
      height: "0%",
      transition: {
        ...baseTransition,
        duration: 1,
        ...args,
      },
    },
  };
};

export const heightUpContainer = (delay = 0, stagger = 0.15) => ({
  hidden: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const fadeInContainer = (delay = 0.25, stagger = 0.3) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ...baseTransition,
    },
  },
};

export const headerFadeIn = {
  hidden: {
    opacity: 0,
    transition: {
      ...baseTransition,
      duration: 0.5,
      delay: 0.55,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      ...baseTransition,
      duration: 0.5,
    },
  },
};

export const slideInContainer = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: delay,
    },
  },
});

export const slideIn = (
  delay = 0
): {
  [key: string]: Variant;
} => ({
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      y: {
        ease: [0.24, 0.84, 0.98, 0.98],
        duration: 0.45,
      },
      duration: 0.5,
      delay,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      ease: "linear",
      y: {
        ease: [0.24, 0.84, 0.98, 0.98],
        duration: 0.4,
      },
      opacity: {
        duration: 0.275,
      },
      delay,
    },
  },
});

export const bottomInContainer = (delay = 0.25, stagger = 0.3) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const bottomIn = (delay = 0, y = 50) => {
  const args = delay ? { delay: delay } : {};
  return {
    hidden: { opacity: 0, y: `${y}px`, scale: 1.0125 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ...baseTransition,
        ...args,
      },
    },
  };
};
