import React from "react";
import { Menu } from "../menu/Menu";

import styles from "./Layout.module.sass";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__content_container}>{children}</div>
      <div className={styles.layout__menu_container}>
        <Menu />
      </div>
    </div>
  );
};
