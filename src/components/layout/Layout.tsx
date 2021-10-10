import React from "react";
import { useHistory } from "react-router";
import Icon from "../icon/Icon";
import { Menu } from "../menu/Menu";

import styles from "./Layout.module.sass";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  withMenu?: boolean;
  withBackButton?: boolean;
}

export const Layout = ({
  children,
  withMenu = true,
  withBackButton = false,
}: LayoutProps) => {
  const history = useHistory();

  const handleBackButtonClick = () => history.goBack();

  return (
    <div className={styles.layout}>
      {withBackButton && (
        <div className={styles.layout__back_button_container}>
          <Icon
            name="arrow-left"
            className={styles.layout__back_button}
            onClick={handleBackButtonClick}
          />
        </div>
      )}
      <div className={styles.layout__content_container}>{children}</div>
      {withMenu && (
        <div className={styles.layout__menu_container}>
          <Menu />
        </div>
      )}
    </div>
  );
};
