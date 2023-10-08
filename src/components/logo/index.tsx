import logoStyles from "./logo.module.scss";

import clsx from "clsx";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={clsx(logoStyles.logo)}>
      <Link
        href="/"
        className="font-mono text-2xl text-zinc-light leading-normal"
      >
        Brandon.
      </Link>
    </div>
  );
}
