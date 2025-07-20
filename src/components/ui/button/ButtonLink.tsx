import { Link, type LinkProps } from "@tanstack/react-router";

import styles from "./Button.module.css";

interface ButtonLinkProps extends LinkProps {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export const ButtonLink = ({
  to,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      to={to}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};
