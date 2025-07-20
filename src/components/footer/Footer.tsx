import { Link } from "@tanstack/react-router";

import {
  ClassmatesIcon,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
} from "@/assets/icons";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div>
            <Link to="/">
              <img src="/logo/modlav-logo.jpg" alt="modlav-logo" />
            </Link>
          </div>

          <nav className={styles.navigation}>
            <Link to="/">Каталог</Link>
            <Link to="/">Новинки</Link>
            <Link to="/">Доставка и оплата</Link>
            <Link to="/">Отзывы</Link>
          </nav>

          <nav className={styles.navigation}>
            <Link to="/">О промокодах</Link>
            <Link to="/">Политика конфиденциальности</Link>
            <Link to="/">Обработка персональных данных</Link>
            <Link to="/">Оферта</Link>
          </nav>

          <div className={styles.contacts}>
            <a href="tel:+7 (800) 350-75-28" className={styles.contact}>
              <PhoneIcon />
              <p>+7 (800) 350-75-28</p>
            </a>

            <a href="mailto:modlav.gmail.com" className={styles.contact}>
              <MailIcon />
              <p>modlav.gmail.com</p>
            </a>

            <div className={styles.networks}>
              <a href="#" className={styles.networkLink}>
                <ClassmatesIcon />
              </a>
              <a href="#" className={styles.networkLink}>
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
