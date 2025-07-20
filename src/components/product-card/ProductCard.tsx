import type { ComponentProps } from "react";

import { Link } from "@tanstack/react-router";

import { ColorBadge } from "@/components/ui";
import type { Product } from "@/types";

import styles from "./ProductCard.module.css";

interface CardProps extends ComponentProps<"div"> {
  product: Product;
}

export const Card = ({
  product: { id, title, price, thumbnail },
  className,
  ...props
}: CardProps) => {
  return (
    <article className={`${styles.card} ${className}`} {...props}>
      <img src={thumbnail} alt={title} className={styles.image} />

      <div className={styles.cardHead}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price} $</p>
      </div>

      <div>
        <p>42-44, 46-48, 50-52</p>
      </div>

      <div>
        <p>Цвет: </p>
        <ColorBadge descriptor="Любой" />
      </div>

      <Link
        to="/$productId"
        params={{ productId: id.toString() }}
        className={styles.link}
      />
    </article>
  );
};
