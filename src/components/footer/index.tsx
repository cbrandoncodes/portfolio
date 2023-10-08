import footerStyles from "./footer.module.scss";

import { contactLinks, footerLinks } from "@/data";
import Divide from "../divide";
import Logo from "../logo";
import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={clsx(footerStyles.footer)}>
      <div className={clsx(footerStyles["container"], "container")}>
        <Divide />
        <div className={footerStyles["main"]}>
          <div className={footerStyles["logo"]}>
            <Logo />
          </div>
          <div className={footerStyles["content"]}>
            <ul className={clsx(footerStyles["list"])}>
              {footerLinks.map(({ name, href }, i) => (
                <li key={i} className={clsx("text-md", footerStyles["item"])}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
            <div className={footerStyles.socials}>
              {contactLinks.map(({ link, icon }, i) => (
                <a key={i} href={link} target="_blank">
                  {icon()}
                </a>
              ))}
            </div>
          </div>
          <p
            className={clsx(
              footerStyles["credits"],
              "font-mono text-sm leading-normal"
            )}
          >
            <span>Brandon Chikezie. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
