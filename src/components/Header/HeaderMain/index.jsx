import Icon from "./icon";
import Search from "./search";
import User from "./User";
import * as styles from "./styles";

const HeaderMain = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.formContainer}>
        <Icon />
        <Search />
        <User />
      </div>
    </div>
  );
};

export default HeaderMain;
