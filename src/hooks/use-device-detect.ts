import { useEffect, useState } from "react";

export default function useDeviceDetect(): { isMobile: boolean | null } {
  const [isMobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;

    const mobileOrIpad = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      ) ||
        (userAgent.match(/Mac/) &&
          navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2)
    );

    setMobile(mobileOrIpad);
  }, []);

  return { isMobile };
}
