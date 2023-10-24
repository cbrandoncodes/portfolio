import logoStyles from "./logo.module.scss";

import clsx from "clsx";
import Link, { LinkProps } from "next/link";

export default function Logo({
  linkProps,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { linkProps?: Omit<LinkProps, "href"> }) {
  return (
    <div className={clsx(logoStyles.logo)} {...props}>
      <Link
        href="/"
        className="font-mono text-2xl text-zinc-light leading-normal"
        {...linkProps}
      >
        Brandon.
      </Link>
    </div>
  );
}
