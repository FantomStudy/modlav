import { type ComponentProps } from "react";

import styles from "./Input.module.css";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
}

export const Input = ({
  label,
  className,
  type = "text",
  ...props
}: InputProps) => {
  return (
    <label className={`${styles.label} ${className}`}>
      {label}
      <input className={styles.input} type={type} {...props} />
    </label>
  );
};
