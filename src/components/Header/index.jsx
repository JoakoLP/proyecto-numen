import React from "react";
import Links from "./links";
import HeaderMain from "./HeaderMain";
import Panel from "./Panel";
import * as styles from "./styles";

const Header = () => {
  return (
    <div className={styles.header}>
      <Links />
      <HeaderMain />
      <Panel />
    </div>
  );
};

export default Header;
