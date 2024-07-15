import React, { MouseEventHandler } from "react";
import styles from "./button.module.css";

type ButtonType = {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
};

const Button = ({ text, onClick, fullWidth }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`${fullWidth && "w_100"} ${styles.button}`}
    >
      {text}
    </button>
  );
};

export default Button;
