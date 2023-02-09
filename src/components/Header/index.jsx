import React from "react";
import Links from "./links";
import HeaderMain from "./Search-Container";
import Panel from "./Panel";
import * as styles from "./styles";

const Header = () => {
  return (
    // <div className="py-12 bg-sky-500">Header</div>
    <div className={styles.header}>
      <Links />
      <HeaderMain />
      <Panel />
    </div>
  );
};

export default Header;
