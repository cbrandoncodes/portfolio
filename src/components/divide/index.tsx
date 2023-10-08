import clsx from "clsx";
import divideStyles from "./divide.module.scss";

export default function Divide({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return <div className={clsx(divideStyles.divide, className)} {...props} />;
}
