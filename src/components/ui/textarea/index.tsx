"use client";

import textareaStyles from "./textarea.module.scss";

import clsx from "clsx";
import { forwardRef } from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", error, ...otherProps }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        textareaStyles.textarea,
        {
          [textareaStyles["textarea--error"]]: error,
        },
        className
      )}
      {...otherProps}
    />
  )
);
Textarea.displayName = "TextArea";

export default Textarea;
