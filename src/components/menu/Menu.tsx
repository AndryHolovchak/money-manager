import classNames from "classnames";
import React from "react";
import { useHistory, useLocation } from "react-router";
import Icon from "../icon/Icon";

import styles from "./Menu.module.sass";

const menuItems: MenuItemInfo[] = [
  {
    icon: "chart-pie-alt",
    route: "/chart",
  },
  {
    icon: "home-lg",
    route: "/",
  },
  {
    icon: "cog",
    route: "/settings",
  },
];

export const Menu = () => {
  const location = useLocation();

  return (
    <div className={styles.menu}>
      {menuItems.map((item, i) => (
        <MenuItem
          info={item}
          isActive={item.route === location.pathname}
          key={i}
        />
      ))}
    </div>
  );
};

interface MenuItemProps {
  info: MenuItemInfo;
  isActive: boolean;
}

const MenuItem = ({ info, isActive }: MenuItemProps) => {
  const history = useHistory();

  const clasName = classNames([
    styles.menu_item,
    { [styles["menu_item--active"]]: isActive },
  ]);

  return (
    <div className={clasName} onClick={() => history.push(info.route)}>
      <Icon name={info.icon} className={styles.menu_item__icon} />
    </div>
  );
};

interface MenuItemInfo {
  icon: string;
  route: string;
}
