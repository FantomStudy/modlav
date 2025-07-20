import { Link } from "@tanstack/react-router";

import { BagIcon, HeartIcon, SearchIcon, UserIcon } from "@/assets/icons";

import { Button, ButtonLink } from "../ui";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link to="/" className={styles.logo}>
            <img src="/logo/modlav-logo.jpg" alt="modlav-logo" />
          </Link>

          <nav className={styles.navigation}>
            <Link to="/">Каталог</Link>
            <Link to="/">Новинки</Link>
            <Link to="/">Доставка и оплата</Link>
            <Link to="/">Отзывы</Link>
          </nav>

          <div className={styles.panel}>
            <Button variant="ghost">
              <SearchIcon />
            </Button>
            <ButtonLink to="/" variant="ghost">
              <UserIcon />
            </ButtonLink>
            <ButtonLink to="/" variant="ghost">
              <HeartIcon />
              <p>0</p>
            </ButtonLink>
            <ButtonLink variant="ghost">
              <BagIcon />
              <p>0</p>
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
};
