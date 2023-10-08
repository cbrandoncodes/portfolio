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

export const heightUpContainer = (delay?: number, stagger?: number) => ({
  hidden: {
    transition: {
      staggerChildren: stagger ?? 0.15,
      delayChildren: delay ?? 0,
    },
  },
  visible: {
    transition: {
      staggerChildren: stagger ?? 0.15,
      delayChildren: delay ?? 0,
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
      delayChildren: delay ?? 0,
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

export const bottomIn = (delay?: number, x = 20) => {
  const args = delay ? { delay: delay } : {};
  return {
    hidden: { opacity: 0, x: `${x}px`, y: "60px", scale: 1.025 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        ...baseTransition,
        ...args,
      },
    },
  };
};

export const rightLeftContainer = (
  delay?: number,
  stagger?: number,
  xOffset = "100px"
) => ({
  hidden: { opacity: 0, x: xOffset },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: stagger ?? 0.1,
      delayChildren: delay ?? 0,
    },
  },
});

export const rightLeft = (delay?: number, xOffset = "100px") => {
  const args = delay ? { delay: delay } : {};
  return {
    hidden: { opacity: 0, x: xOffset },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ...baseTransition,
        ...args,
      },
    },
  };
};
