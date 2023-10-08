"use client";

import buttonStyles from "./button.module.scss";

import clsx from "clsx";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  theme?: "base" | "primary" | "light";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", size = "md", theme = "base", ...otherProps }, ref) => (
    <button
      className={clsx(
        buttonStyles.button,
        {
          [buttonStyles[`button--${size}`]]: size,
          [buttonStyles[`button--${theme}`]]: theme,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    />
  )
);
Button.displayName = "Button";

export default Button;
