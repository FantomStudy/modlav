import { Link } from "@tanstack/react-router";

import styles from "./Sidebar.module.css";
import { CATEGORIES } from "./const";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {CATEGORIES.map((category, index) => (
        <Link to="/" key={`category-${index}`} className={styles.sidebarItem}>
          {category}
        </Link>
      ))}
    </aside>
  );
};
