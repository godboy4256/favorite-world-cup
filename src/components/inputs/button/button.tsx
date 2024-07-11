import React, { MouseEventHandler } from "react";
import styles from "./button.module.css";

type ButtonType = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ text, onClick }: ButtonType) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
