import React, { useContext } from "react";
import { IButton } from "typesSrc/components";
import styles from "../styles/button.module.css";
import { ThemeContext } from "../providers/ThemeProvider";

function Button(props: IButton) {
  const { secondaryColor } = useContext(ThemeContext);
  return (
    <button
      className={styles.button}
      style={{ color: secondaryColor }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
