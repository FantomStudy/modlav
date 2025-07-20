import { Fragment } from "react/jsx-runtime";

import { Link, useRouterState } from "@tanstack/react-router";

import { ArrowIcon } from "@/assets/icons";

import styles from "./Breadcrumbs.module.css";

export const BreadCrumbs = () => {
  const matches = useRouterState({ select: (s) => s.matches });

  return (
    <nav className={styles.container}>
      {matches.map((match, index) => {
        const meta = match.meta ?? [{ title: "Нет метаданных" }];
        return (
          <Fragment key={match.id}>
            <Link to={match.fullPath}>{meta[0]!.title}</Link>
            {index + 1 !== matches.length && <ArrowIcon />}
          </Fragment>
        );
      })}
    </nav>
  );
};
