import React, { useContext } from "react";
import { IPage } from "../typesSrc/pages";
import Button from "../components/Button";
import styles from "../styles/dashboard.module.css";
import { AuthContext } from "../providers/AuthProvider";
import { IState, ThemeContext } from "../providers/ThemeProvider";

const Settings: React.FC<IPage> = (props) => {
  const { isLogin, login, logout } = useContext(AuthContext);
  const { toggleTheme, mode, direction, lang, primaryColor, secondaryColor } =
    useContext(ThemeContext);

  const handleAuth = () => {
    if (isLogin) {
      logout();
    } else {
      login();
    }
  };

  const handleChangeMode = () => {
    if (mode === "dark") {
      const val: IState = {
        mode: "light",
        primaryColor: secondaryColor,
        secondaryColor: primaryColor,
        lang,
        direction,
      };
      toggleTheme({ key: "MODE", value: val });
    } else {
      const val: IState = {
        mode: "dark",
        primaryColor: secondaryColor,
        secondaryColor: primaryColor,
        lang,
        direction,
      };
      toggleTheme({ key: "MODE", value: val });
    }
  };

  const handleChangeDirection = () => {
    if (direction === "rtl") {
      const val: IState = {
        mode,
        primaryColor,
        secondaryColor,
        lang: "en",
        direction: "ltr",
      };
      toggleTheme({ key: "DIRECTION", value: val });
    } else {
      const val: IState = {
        mode,
        primaryColor,
        secondaryColor,
        lang: "fa",
        direction: "rtl",
      };
      toggleTheme({ key: "DIRECTION", value: val });
    }
  };

  return (
    <div>
      <div className={styles.buttonRow}>
        <Button onClick={handleAuth}>{isLogin ? "logout" : "login"}</Button>
        <Button onClick={handleChangeMode}>change theme to dark</Button>
        <Button onClick={handleChangeDirection}>change direction</Button>
        <Button onClick={handleChangeDirection}>change language</Button>
      </div>
    </div>
  );
};

export default Settings;
