"use client";

import inputStyles from "./input.module.scss";

import clsx from "clsx";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error = false, ...otherProps }, ref) => (
    <input
      ref={ref}
      className={clsx(
        inputStyles.input,
        {
          [inputStyles["input--error"]]: error,
        },
        className
      )}
      {...otherProps}
    />
  )
);
Input.displayName = "Input";

export default Input;
